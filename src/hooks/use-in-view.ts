import { useEffect, useRef, useState, useCallback } from "react";

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: "0px 0px -15% 0px",
};

export function useInView<T extends HTMLElement>(options: IntersectionObserverInit = DEFAULT_OPTIONS) {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback(
    (node: T | null) => {
      observerRef.current?.disconnect();
      observerRef.current = null;

      if (!node) return;

      const observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting);
      }, options);

      observer.observe(node);
      observerRef.current = observer;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options.threshold, options.rootMargin, options.root]
  );

  useEffect(() => () => observerRef.current?.disconnect(), []);

  return [setRef, inView] as const;
}
