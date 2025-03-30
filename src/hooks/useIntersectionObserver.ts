
import { RefObject, useEffect, useState } from 'react';

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0 },
  once: boolean = false
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const element = elementRef?.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
      
      // If once is true and the element is intersecting, disconnect the observer
      if (once && entry.isIntersecting) {
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options, once]);

  return entry;
}

export default useIntersectionObserver;
