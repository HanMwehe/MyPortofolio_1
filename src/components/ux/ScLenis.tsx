import { useEffect } from "react";
import Lenis, { LenisOptions } from "lenis";

export const useLenis = () => {
  useEffect(() => {
    const options: LenisOptions = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchInertiaMultiplier : 2 // Kalau mau smooth di HP, ubah jadi true
    };

    const lenis = new Lenis(options);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
