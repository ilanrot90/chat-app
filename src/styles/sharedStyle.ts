import styled, { css } from 'styled-components';

export const centerFlex = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const textTruncate = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const primaryTextColor = '#252525';
export const bodyGray = '#2e3c47';
export const light = '#FFFFFF';
export const gray = '#A5B8C0';
export const darkGray = '#636569';
export const lightGray = '#91A7B5';
export const selectedBackground = '#ffffff';
export const hoverBackground = '#F5F6F6';
export const silver = '#A7A7A9';

// notifications colors
export const success = '#00AF9A';
export const warning = '#D62E34';
export const error = warning;
export const info = '#2C6C92';

export const rotateIcon = (isOpen: boolean, openDegree = 180, closedDegree = 0) => `
  transform: rotate(${isOpen ? openDegree : closedDegree}deg);
  transition: transform 0.2s;
  transform-origin: center;
`;

export const scrollBarWidth = '6px';

export const scrollbar = css`
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background-color: #ffffff;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    /* height: 6px; */
    background-color: rgba(166, 185, 200, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(166, 185, 200, 0.5);
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(166, 185, 200, 1);
  }

  &:hover::-webkit-scrollbar {
    width: ${scrollBarWidth};
    height: ${scrollBarWidth};
  }
`;

export const sizes = {
  laptopL: '1024px',
  laptopXl: '1370px',
  laptopXXl: '1600px',
};

export const devices = {
  laptopL: `(min-width: ${sizes.laptopL})`,
  laptopXl: `(min-width: ${sizes.laptopXl})`,
  laptopXXl: `(min-width: ${sizes.laptopXXl})`,
};

export const TextContent = styled.p<{
  size?: number;
  weight?: number;
  lineHeight?: number;
  isTruncate?: boolean;
}>`
  font-size: ${({ size = 14 }) => size}px;
  font-weight: ${({ weight = 300 }) => weight};
  line-height: ${({ lineHeight = 20 }) => lineHeight}px;
  ${({ isTruncate }) => isTruncate && textTruncate}
`;

export const HEADER_HEIGHT = 80;
