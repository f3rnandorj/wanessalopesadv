import { useEffect, useState } from "react";

type WindowProps = {
  width: number | undefined;
  height: number | undefined;
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowProps>({} as WindowProps);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
