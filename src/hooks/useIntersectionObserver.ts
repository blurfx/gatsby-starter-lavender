import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  ref: MutableRefObject<Element | null>,
  options: IntersectionObserverInit = {},
) => {
  const [element, setElement] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (element === null) {
      return;
    }

    observer.current?.disconnect();
    observer.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {...options});
    observer.current?.observe(element);

    return () => {
      observer.current?.disconnect();
    };
  }, [element, options]);
  return isIntersecting;
};
