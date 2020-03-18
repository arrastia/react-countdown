const generateZIndex = () => {
  let zindex;
  zindex || 999;
  return ++zindex;
};

export const GrowlUtils = { generateZIndex };
