
import { type RefObject, useEffect, useState } from 'react';

function useIntersectionObserver(
    elementRef: RefObject<Element>,
    { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit,
    once = false // Add once parameter
): IntersectionObserverEntry | undefined {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = elementRef?.current; // DOM Ref
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin]); // Re-run if params change

    return entry;
}

export default useIntersectionObserver;
