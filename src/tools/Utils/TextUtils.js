const camelCase = string =>
  string
    .split('_')
    .map(function(word, index) {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const ellipsis = (rawText = '', limit) => {
  if (rawText.length > limit - 3) {
    return `${rawText.substr(0, limit - 3)}...`;
  }
  return rawText;
};

const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .toUpperCase();

export const TextUtils = { camelCase, capitalize, ellipsis, kebabCase };
