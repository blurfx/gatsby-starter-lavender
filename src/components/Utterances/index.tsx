import React, { createRef, useEffect } from 'react';

import { THEME } from '~/constants';
import { useThemeContext } from '~/hooks/useTheme';

const src = 'https://utteranc.es/client.js';
const branch = 'master';

interface Props {
  repo: string;
}

const Utterances = ({ repo }: Props) => {
  const ref = createRef<HTMLDivElement>();

  const { theme } = useThemeContext();
  const utteranceTheme = (theme === THEME.LIGHT) ? 'github-light' : 'photon-dark';

  useEffect(() => {
    const utterances = document.createElement('script');
    const config = {
      src,
      repo,
      branch,
      theme: utteranceTheme,
      label: 'comment',
      async: true,
      crossorigin: 'anonymous',
      'issue-term': 'pathname',
    };

    Object.entries(config).forEach(([key, value]) => {
      utterances.setAttribute(key, `${value}`);
    });

    ref.current?.childNodes.forEach((children) => {
      ref.current?.removeChild(children);
    });

    ref.current?.appendChild(utterances);
  }, []);

  return <div className='utterances' ref={ref} />;
};

export default Utterances;
