import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook for detecting when an element comes into view
 * @param options - Intersection Observer options
 * @returns [ref, isInView] - Ref to attach to element and visibility state
 */
export const useInView = (options: UseInViewOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;
  
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        
        if (inView && !hasTriggered) {
          setIsInView(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce && !inView) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return [ref, isInView] as const;
};

export default useInView;
