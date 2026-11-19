import { useEffect } from "react";

/**
 * Fades `.reveal` elements in as they enter the viewport.
 * Elements already on screen are marked visible before the hidden state applies, so nothing flickers.
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));
    const viewport = window.innerHeight;
    for (const el of elements) {
      if (el.getBoundingClientRect().top < viewport * 0.92) el.classList.add("is-visible");
    }
    document.documentElement.classList.add("reveal-ready");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    elements.filter((el) => !el.classList.contains("is-visible")).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
