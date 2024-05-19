import { useEffect, useState } from "react";

export function useCurrentWindowScroll(
  id: string | undefined,
  isTopScreen: boolean
) {
  const [isVisible, setIsVisible] = useState(isTopScreen);

  useEffect(() => {
    if (!id) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById(id)?.offsetTop || 0;
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return { isVisible };
}
