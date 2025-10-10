import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit(): null {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return null;
}
