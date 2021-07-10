import { RenderBodyArgs } from 'gatsby';
import React from 'react';

import { getCssString } from './src/stitches.config';

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <style
      key='stitches'
      id='stitches'
      dangerouslySetInnerHTML={{
        __html: getCssString(),
      }}
    />,
  ]);
};
