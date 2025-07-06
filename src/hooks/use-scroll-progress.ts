import { useEffect, useState } from "react";

export const useScrollProgress = (maxScroll = 200) => {
  const [progress, setProgress] = useState(0); // from 0 to 1

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setProgress(Math.min(scrollY / maxScroll, 1));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll]);

  return progress;
};
