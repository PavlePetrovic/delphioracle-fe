import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", checkIsMobile, { passive: true });
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const checkIsMobile = () => {
    var size = window.innerWidth;
    if (size > 888) {
      setIsMobile(false);
    } else if (size <= 888) {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    checkIsMobile();
  }, []);

  return isMobile;
};
