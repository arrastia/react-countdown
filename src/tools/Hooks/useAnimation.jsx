import { useAnimationTimer } from './useAnimationTimer';

import { animationUtils } from '../Utils/animationUtils';

export const useAnimation = (easingName = 'linear', duration = 500, delay = 0) => {
  const elapsed = useAnimationTimer(duration, delay);
  const position = Math.min(1, elapsed / duration);
  return animationUtils[easingName](position);
};
