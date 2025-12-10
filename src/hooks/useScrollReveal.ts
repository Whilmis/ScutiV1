import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.1, oneTime = true) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento entra en pantalla...
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Si oneTime es true, dejamos de observar (para que no desaparezca al subir)
          if (oneTime) observer.unobserve(element);
        }
      },
      { 
        threshold: threshold, // 0.1 significa "cuando se vea el 10% del elemento"
        rootMargin: "0px 0px -50px 0px" // Un pequeño margen para que no active muy abajo
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, oneTime]);

  return { ref, isVisible };
};