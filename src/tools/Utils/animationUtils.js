export const AnimationUtils = {
  cubic: t => t * (4 * t * t - 9 * t + 6),

  elastic: t => t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15),

  inCubic: t => t * t * t,

  inExpo: t => Math.pow(2, 10 * (t - 1)),

  inOutCirc: t => {
    t /= 0.5;
    if (t < 1) return -(Math.sqrt(1 - t * t) - 1) / 2;
    t -= 2;
    return (Math.sqrt(1 - t * t) + 1) / 2;
  },

  inOutCubic: t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),

  inOutExpo: t => {
    t /= 0.5;
    if (t < 1) return Math.pow(2, 10 * (t - 1)) / 2;
    t--;
    return (-Math.pow(2, -10 * t) + 2) / 2;
  },

  inCirc: t => -Math.sqrt(1 - t * t) + 1,

  inOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),

  inOutQuart: t => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),

  inOutQuint: t => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),

  inOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,

  inQuad: t => t * t,

  inQuart: t => t * t * t * t,

  inQuint: t => t * t * t * t * t,

  inSine: t => -Math.cos(t * (Math.PI / 2)) + 1,

  linear: t => t,

  outCirc: t => Math.sqrt(1 - (t = t - 1) * t),

  outCubic: t => --t * t * t + 1,

  outExpo: t => -Math.pow(2, -10 * t) + 1,

  outQuad: t => t * (2 - t),

  outQuart: t => 1 - --t * t * t * t,

  outQuint: t => 1 + --t * t * t * t * t,

  outSine: t => Math.sin(t * (Math.PI / 2)),

  quadratic: t => t * (-(t * t) * t + 4 * t * t - 6 * t + 4)
};
