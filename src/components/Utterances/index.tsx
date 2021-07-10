import React, { createRef, useEffect } from 'react';

import { useDarkMode } from '~/hooks/useDarkMode';

const src = 'https://utteranc.es/client.js';
const branch = 'master';

interface Props {
  repo: string;
}

const Utterances = ({ repo }: Props) => {
  const ref = createRef<HTMLDivElement>();

  const [darkMode] = useDarkMode();
  const utteranceTheme = darkMode ? 'photon-dark' : 'github-light';

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
