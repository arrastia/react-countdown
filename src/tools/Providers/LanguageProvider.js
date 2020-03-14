import React from 'react';

import { Lang } from 'config/lang';

import { LanguageContext } from 'tools/Contexts/LanguageContext';

export const LanguageProvider = ({ children }) => (
  <LanguageContext.Provider value={{ ...Lang }}>{children}</LanguageContext.Provider>
);
