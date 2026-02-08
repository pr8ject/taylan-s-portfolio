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

// Map destination paths to overlay colors
const getOverlayColor = (path: string) => {
  if (path === "/about") return "#2C42E7";
  return "#ffffff";
};

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>("idle");
  const [overlayColor, setOverlayColor] = useState("#ffffff");
  const timeoutsRef = useRef<number[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const navigateTo = useCallback(
    (path: string) => {
      if (phase !== "idle") return;
      clearTimeouts();

      // Set overlay color based on destination
      setOverlayColor(getOverlayColor(path));

      // Phase 1: fade current page (500ms)
      setPhase("covering");

      // Phase 2: once covered, navigate and hold (500ms)
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
          "fixed inset-0 pointer-events-none z-[55]",
          phase === "covering" && "animate-overlay-in",
          phase === "revealing" && "animate-overlay-out",
          phase === "idle" && "opacity-0"
        )}
        style={{
          backgroundColor: overlayColor,
          ...(phase === "white" ? { opacity: 1 } : {}),
        }}
      />
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
