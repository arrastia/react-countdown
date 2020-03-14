import { useEffect, useState } from 'react';

export const useAnimationTimer = (duration = 1000, delay = 0) => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let animationFrame, timerStop, start;
    const onFrame = () => {
      setElapsed(Date.now() - start);
      onLoop();
    };

    const onLoop = () => {
      animationFrame = requestAnimationFrame(onFrame);
    };

    const onStart = () => {
      timerStop = setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        setElapsed(Date.now() - start);
      }, duration);

      start = Date.now();
      onLoop();
    };

    const timerDelay = setTimeout(onStart, delay);

    return () => {
      clearTimeout(timerStop);
      clearTimeout(timerDelay);
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, delay]);

  return elapsed;
};
