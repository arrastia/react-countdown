import React, { useReducer } from 'react';

import { TranslationsContext } from 'tools/Contexts/TranslationsContext';

import { translationsReducer } from 'tools/Reducers/translationsReducer';

export const TranslationsProvider = ({ children }) => {
  const [translationState, translationDispatch] = useReducer(translationsReducer, 'en');

  return (
    <TranslationsContext.Provider
      value={{
        selected: translationState,
        onChangeLang: ({ type, newLang }) => {
          translationDispatch({ type: type, payload: newLang });
        }
      }}>
      {children}
    </TranslationsContext.Provider>
  );
};
