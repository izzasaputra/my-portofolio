import { useState, useEffect } from "react";
import { ScreenTypeInterface } from "@/types/hooks";

const useResponsive = () => {
  const [screenType, setScreenType] = useState<ScreenTypeInterface>({
    desktop: true,
    tablet: false,
    mobile: false,
  });

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setScreenType({ desktop: false, tablet: false, mobile: true });
    } else if (window.innerWidth <= 1024) {
      setScreenType({ desktop: false, tablet: true, mobile: false });
    } else {
      setScreenType({ desktop: true, tablet: false, mobile: false });
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useResponsive;
