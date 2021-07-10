import React, { memo, MouseEvent, useCallback } from 'react';

import { TAG } from '~/constants';

import { Container, Title, TagListWrapper, Tag } from './styles';

interface Props {
  tags: string[];
  currentTag: string;
  setCurrentTag: (tag: string) => void;
}


const TagFilter = ({ tags, currentTag, setCurrentTag }: Props) => {
  const onClickTag = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const tag = (e.target as HTMLButtonElement).dataset['tag'] as string;

    setCurrentTag(tag);
  }, [setCurrentTag]);

  return (
    <Container>
      <Title>Tags</Title>
      <TagListWrapper>
        <Tag
          type='button'
          data-tag={TAG.ALL}
          onClick={onClickTag}
          filtered={currentTag === TAG.ALL}
        >
          { TAG.ALL }
        </Tag>
        {tags.map((tag) => (
          <Tag
            type='button'
            key={tag}
            data-tag={tag}
            onClick={onClickTag}
            filtered={currentTag === tag}
          >
            { tag }
          </Tag>
        ))}
      </TagListWrapper>
    </Container>
  );
};

export default memo(TagFilter);
