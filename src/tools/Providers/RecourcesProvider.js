import React from 'react';

import iconsResources from 'config/icons.json';

import { ResourcesContext } from 'tools/Contexts/ResourcesContext';

export const ResourcesProvider = ({ children }) => {
  const resources = { ...iconsResources };

  return <ResourcesContext.Provider value={resources}>{children}</ResourcesContext.Provider>;
};
