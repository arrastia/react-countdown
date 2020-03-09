import React, { useContext } from 'react';

import './SocialMedia.css';

import { ResourcesContext } from 'tools/context/ResourcesContext';

export const SocialMedia = () => {
  const resources = useContext(ResourcesContext);

  return (
    <div className="buttons-wrapper">
      <a className="btn github" href="">
        <i className={resources.icons['github']}></i>
      </a>
      <a className="btn codepen" href="">
        <i className={resources.icons['codepen']}></i>
      </a>
      <a className="btn linkedin" href="">
        <i className={resources.icons['linkedin']}></i>
      </a>
      <a className="btn instagram" href="">
        <i className={resources.icons['instagram']}></i>
      </a>
    </div>
  );
};
