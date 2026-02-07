import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type Phase = "idle" | "covering" | "white" | "revealing";

interface TransitionContextValue {
  navigateTo: (path: string) => void;
  phase: Phase;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigateTo: () => {},
  phase: "idle",
});

export const usePageTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>("idle");
  const timeoutsRef = useRef<number[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const navigateTo = useCallback(
    (path: string) => {
      if (phase !== "idle") return;
      clearTimeouts();

      // Phase 1: fade current page to white (1s)
      setPhase("covering");

      // Phase 2: once white, navigate and hold (500ms)
      timeoutsRef.current.push(
        window.setTimeout(() => {
          navigate(path);
          window.scrollTo(0, 0);
          setPhase("white");

          // Phase 3: reveal new page (800ms)
          timeoutsRef.current.push(
            window.setTimeout(() => {
              setPhase("revealing");

              timeoutsRef.current.push(
                window.setTimeout(() => {
                  setPhase("idle");
                }, 900)
              );
            }, 500)
          );
        }, 500)
      );
    },
    [navigate, phase]
  );

  return (
    <TransitionContext.Provider value={{ navigateTo, phase }}>
      {children}
      <div
        className={cn(
          "fixed inset-0 bg-white pointer-events-none z-[55]",
          phase === "covering" && "animate-overlay-in",
          phase === "revealing" && "animate-overlay-out",
          phase === "idle" && "opacity-0"
        )}
        style={phase === "white" ? { opacity: 1 } : undefined}
      />
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
