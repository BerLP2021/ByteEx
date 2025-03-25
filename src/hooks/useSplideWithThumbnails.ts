import { useEffect, useRef } from "react";
import { Splide as SplideCore, Options as SplideOptions} from '@splidejs/splide';

export const useSplideWithThumbnails = (options: SplideOptions, slides: string[]) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const splideRef = useRef<SplideCore | null>(null);

  useEffect(() => {
    if (!ref.current || !slides.length) return;

    splideRef.current = new SplideCore(ref.current, options);

    return () => {
      splideRef.current?.destroy();
    };
  }, [options, slides]);

  return { ref, splide: splideRef };
};