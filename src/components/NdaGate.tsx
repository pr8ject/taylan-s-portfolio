import { useState, useEffect, useRef } from "react";
import { usePageTransition } from "@/components/PageTransition";
import { ChevronLeft } from "lucide-react";

const NDA_PASSWORD = "Courage";
const STORAGE_KEY = "nda-unlocked";

const NdaGate = ({ children }: { children: React.ReactNode }) => {
  const { navigateTo } = usePageTransition();
  const [unlocked, setUnlocked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [inputReady, setInputReady] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check sessionStorage on mount
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  // Lock scroll when gate is active
  useEffect(() => {
    if (!unlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [unlocked]);

  const handleExpand = () => {
    setExpanded(true);
    // After the width transition finishes, swap to input mode and focus
    setTimeout(() => {
      setInputReady(true);
      setTimeout(() => inputRef.current?.focus(), 50);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === NDA_PASSWORD.toLowerCase()) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
      setPassword("");
      setTimeout(() => setError(false), 2000);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center px-6">
        {/* Back button — x-ray blend */}
        <div className="fixed top-0 left-0 right-0 z-[101]" style={{ mixBlendMode: "difference" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center h-20 md:h-24">
              <button
                onClick={() => navigateTo("/")}
                className="flex items-center gap-1 text-white font-bold text-base md:text-lg tracking-wide hover:opacity-70 transition-opacity"
              >
                <ChevronLeft size={20} strokeWidth={3} />
                Home
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-md w-full text-center">
          <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6">
            Hey There Curious!
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            The NDA protects this case study. So, just so you know, if you don't have my magical buzzword, you won't be opening it.
          </p>

          <div className="flex flex-col items-center gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
              <div
                className="relative overflow-hidden rounded-full border border-foreground transition-all duration-500 ease-out"
                style={{
                  width: expanded ? "100%" : "auto",
                  maxWidth: expanded ? "320px" : "280px",
                }}
              >
                {!inputReady ? (
                  <button
                    type="button"
                    onClick={handleExpand}
                    className="w-full px-6 py-3 bg-foreground text-background font-bold text-sm tracking-wider uppercase whitespace-nowrap hover:opacity-90 transition-opacity"
                    style={{
                      opacity: expanded ? 0 : 1,
                      transition: "opacity 0.3s ease-out",
                    }}
                  >
                    Don't worry I have it
                  </button>
                ) : (
                  <input
                    ref={inputRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter the buzzword"
                    className="w-full px-6 py-3 bg-transparent text-foreground text-sm text-center tracking-wider placeholder:text-muted-foreground/50 outline-none"
                  />
                )}
              </div>

              {error && (
                <p className="text-xs text-red-500">
                  That's not the buzzword. Try again?
                </p>
              )}

              {inputReady && (
                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-background font-bold text-sm tracking-wider uppercase rounded-full hover:opacity-90 transition-opacity"
                  style={{
                    opacity: 0,
                    animation: "fade-in 0.4s ease-out 0.1s forwards",
                  }}
                >
                  Unlock
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default NdaGate;
