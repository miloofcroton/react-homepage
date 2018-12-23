import React from 'react';
import styled from 'styled-components';

const IconImg = styled.img`
  width: 36px;
  margin: 5px;
`;

export const SmallIcon = ({ image }) => {

  return (
    <IconImg
      src={image.url}
      alt={image.tag}
    />
  );
};
