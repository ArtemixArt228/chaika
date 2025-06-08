import { useEffect, useState } from "react";

export const useScrolledPastThreshold = (thresholdPx?: number): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const threshold = thresholdPx ?? window.innerHeight;

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Call once on mount in case already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [thresholdPx]);

  return scrolled;
};
