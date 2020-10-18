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
export const deepRed = '#C20024';
export const selectedBackground = '#ffffff';
export const hoverBackground = '#F5F6F6';
export const silver = '#A7A7A9';

// notifications colors
export const success = '#00AF9A';
export const warning = '#D62E34';
export const error = warning;
export const info = '#2C6C92';

// TODO should consider refactor repeating color names to be relevant to many use cases
// risk level colors
export const risk1 = '#0092C7';
export const risk2 = '#FFDD00';
export const risk3 = '#FF671D';
export const risk4 = deepRed;

export const brightTeal = '#19d3c5';

export const baseGray = '#CCCCCC';

export const slightlyGray = '#f5f6f6';

export const brandTeal = '#00af9a';

export const tableBorder = `
  0.9px solid ${baseGray};
`;

export const pageMargin = '24px';

export const tableRowHeight = 46;

export const getBackgroundColor = ({ variant, theme }) =>
  ({
    error: theme.color.status.error,
    warning: theme.color.status.warning,
    success: theme.color.status.success,
    info: theme.color.status.info,
  }[variant]);

// sizeMenu close and open width
export const openWidth = 200;
export const closeWidth = 58;
export const appHeaderHeight = 58;
export const getAvailableHeight = ({
  theme,
  currentPagePadding,
  withBreadCrumbs = true,
  withPageHeader = true,
}) => {
  const screenHeight = '100vh';
  const breadCrumbsHeaderHeight = withBreadCrumbs ? ` - ${appHeaderHeight}px` : '';
  const screenHeaderHeight = withPageHeader
    ? ` - ${theme.text.fontSize.xl}  - ${theme.padding.large} * 2`
    : '';
  const extraPadding = currentPagePadding ? ` - ${currentPagePadding}` : '';
  return `calc(${screenHeight}${breadCrumbsHeaderHeight + screenHeaderHeight + extraPadding})`;
};

export const selectedRowStyle = css`
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.border.radius.large};
  border: 2px solid rgba(0, 175, 154, 0.25);
`;

export const deleteRowStyleHover = (withBorder) => css`
  & > div > .DiIcon {
    opacity: 0;
  }
  :hover {
    :after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      ${withBorder && selectedRowStyle};
      background: rgba(0, 0, 0, 0);
      pointer-events: none;
    }
  }
  :hover {
    background: #ffffff;
    & > div > .DiIcon {
      opacity: 1;
    }
  }
`;

export const rotateIcon = (isOpen, openDegree = 180, closedDegree = 0) => `
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

export const returnCssValue = (val) => `${val}${Number.isInteger(val) ? `px` : `%`}`;
export const TextContent = styled.p`
  font-size: ${({ size = 14 }) => size}px;
  font-weight: ${({ weight = 300 }) => weight};
  line-height: ${({ lineHeight = 20 }) => lineHeight}px;
  margin-top: ${({ margin, theme }) => margin && theme.padding.default};
  color: ${({ theme, color }) => color || theme.text.color};
  ${({ isTruncate }) => isTruncate && textTruncate}
`;
// riskScore style
export const getColorByRisk = (risk: number = 0) => {
  switch (true) {
    case risk === 0:
      return 'Informational';
    case risk < 40:
      return 'low';
    case risk < 70:
      return 'medium';
    case risk < 90:
      return 'high';
    default:
      return 'critical';
  }
};

export const RiskScore = styled.div`
  border-radius: 50%;
  border: 2px solid ${({ theme, risk }) => theme.color.riskLevel[getColorByRisk(risk)]};
  width: 28px;
  height: 28px;
  ${({ theme }) => theme.utils.centerFlex};
`;
RiskScore.score = styled(TextContent).attrs({
  as: 'span',
  size: 12,
  weight: 400,
})`
  line-height: normal;
  margin-top: 2px;
`;
