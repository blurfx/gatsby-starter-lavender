import React, { memo } from 'react';

import { TagList, Tag } from './styles';

interface Props {
  tags?: string[],
}

const Tags = ({ tags }: Props) => (
  <TagList>
    {
      tags?.map((tag) => (
        <Tag key={tag}>{ tag }</Tag>
      ))
    }
  </TagList>
);

export default memo(Tags);
