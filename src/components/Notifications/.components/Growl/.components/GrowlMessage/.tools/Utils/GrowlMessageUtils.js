const hasClass = (element, className) => {
  console.log('element', element);
  if (element) {
    if (element.classList) return element.classList.contains(className);
    else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
  }
};

export const GrowlMessageUtils = { hasClass };
