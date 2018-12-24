import React from 'react';
import styled from 'styled-components';

const IconImg = styled.img`
  width: 36px;
  height: 36px;
  margin: 5px;
  display: inline-block;
`;

export const TechIcon = ({ tag }) => {

  const url = tag => {
    return require('../../assets/tech/' + tag.toLowerCase() + '.png');
  };

  return (
    <IconImg
      src={url(tag)}
      alt={tag}
    />
  );
};
