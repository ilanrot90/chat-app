import backDrop from 'static/images/Login-left-image.svg';
import {
  centerFlex,
  textTruncate,
  primaryTextColor,
  bodyGray,
  lightGray,
  light,
  success,
  warning,
  error,
  deepRed,
  info,
  tableBorder,
  brightTeal,
  baseGray,
  darkGray,
  slightlyGray,
  scrollbar,
  brandTeal,
  getBackgroundColor,
  getAvailableHeight,
  rotateIcon,
  selectedRowStyle,
  selectedBackground,
  returnCssValue,
  devices,
  hoverBackground,
} from '../sharedStyle';

const FelixTheme = {
  // new theme

  colors: {
    // TODO: Decide on colors naming(and general sizes)
    natural: {
      Grey800: '#1E242B',
      Grey600: '#636569',
      Grey200: '#949899',
      LightGray: '#CDD2D3',
      Silver: '#A7A7A9',
    },
    brand: {
      brandTeal: '#00AF9A',
      brightTeal: '#87E1D1',
    },
  },
  borders: {
    radius: {
      md: '8px',
    },
  },

  // old theme
  text: {
    color: primaryTextColor,
    colorTableHeader: '#A7A7A9',
    colorTableFooter: '#636569',
    colorLight: light,
    colorError: '#BE0017',
    colorDisabled: '#666465',
    // TODO change all text sizes to use this sizes according to ux guidelines: https://forcepoint.invisionapp.com/d/main#/console/19213344/410219955/preview
    fontSize: {
      xxxxl: '40px',
      xxxl: '32px',
      xxl: '24px',
      xl: '20px',
      l: '16px',
      m: '14px', // body text
      s: '12px',
      xs: '10px',
    },
    font: {
      headerXXL: '32px',
      headerMedium: '24px',
      modalHeaderMedium: '20px',
      panelHeaderMedium: '16px',
      widgetHeaderMedium: '16px',
      bodyText: '14px',
      breadcrumb: '14px',
      modalText: '14px',
      menuItem: '14px',
      systemTreeGroup: '12px',
      widgetInfo: '12px',
      descriptive: '12px',
      large: '16px',
      default: '14px',
      small: '12px',
      tableHeader: '14px',
    },
    family: {
      main:
        '"Forcepoint Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Roboto, Helvetica, Arial, sans-serif',
    },
    lineHeight: {
      small: '14px',
      default: '16px',
      large: '18px',
    },
  },
  border: {
    width: {
      default: '1px',
      strong: '2px',
    },
    radius: {
      large: '8px',
      default: '4px',
      small: '2px',
    },
    default: tableBorder,
  },
  color: {
    table: {
      background: '#fafbfb',
      hoverBackground,
      selectedBackground,
    },
    brand: {
      nav: '#003447',
      navHover: '#003F57',
      navActive: '#004761',
      navLight: '#003F57',
      navLightActive: '#005D80',
      deepTeal: '#00473f',
      darkTeal: '#007565',
      brandTeal,
      brightTeal,
      gleamingTeal: '#14ffe4',
    },
    primary: {
      darkGreen: '#4a8b2c',
      brightGreen: '#80bc00',
      paleGreen: '#aada91',
      deepPurple: '#715091',
      deepMagenta: '#923a7f',
      palePurple: '#c6bbd0',
      deepOrange: '#db6015',
      orange: '#eaa55e',
      paleOrange: '#f6dfa4',
      light,
    },
    riskLevel: {
      critical: '#D62E34',
      high: '#F1A03F',
      medium: '#FADC4A',
      low: '#8DB838',
      info: '#2C6C92',
    },
    alerts: {
      error: '#FFD1DA',
      warning: '#FFF8CC',
      info: '#BEE2E9',
      success: '#C7E7B6',
    },
    status: {
      success,
      warning,
      error,
      info,
    },
    background: {
      default: '#FFFFFF',
      layout: '#F3F5F5',
      hover: '#F9F9F9',
      disabled: '#F2F2F2',
    },
    natural: {
      darkGray: primaryTextColor,
      bodyGray,
      dark: '#666465',
      gray: darkGray,
      silver: '#a7aba9',
      lightGray,
      brightGray: '#f9f9f9',
      slightlyGray,
      baseGray,
      grayHover: '#808080',
      lightBaseGray: '#A6A6A6',
      light,
    },
    blue: {
      deepBlue: '#004761',
      darkBlue: '#006e96',
      brightBlue: '#0092c7',
      blue: '#36B0C9',
      paleBlue: '#97d1dc',
      lightBlue: '#e6f8ff',
    },
    red: {
      deepRed,
    },
    input: {
      placeholder: '#A7A8A9',
      border: {
        default: '#A7A8A9',
        disabled: '#A7A8A9',
        error,
        active: '#00AF9A',
      },
    },
  },
  spacing: {
    xs: 2,
    sm: 4,
    md: 8,
    l: 12,
  },
  padding: {
    small: '4px',
    default: '8px',
    large: '16px',
    container: '24px',
  },
  shadow: {
    default: '0 4px 8px 0 rgba(0,0,0,0.1)',
    small: '0 2px 4px 0 rgba(0,0,0,0.15)',
    medium: '0 2px 8px 0 rgba(0, 0, 0, 0.3)',
    large: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  sizes: {
    icon: {
      default: '16px',
      small: '8px',
    },
    progress: {
      small: '24px',
      medium: '48px',
      large: '96px',
    },
    height: {
      default: '32px',
      small: '24px',
    },
    input: {
      height: {
        default: '32px',
        small: '24px',
      },
    },
  },
  transitions: {
    quick: '0.125s ease-in',
    normal: '0.250s ease-in',
  },
  utils: {
    centerFlex,
    textTruncate,
    scrollbar,
    getBackgroundColor,
    rotateIcon,
    getAvailableHeight,
    returnCssValue,
    selectedRowStyle,
    devices,
  },
  imgs: {
    backDrop,
  },
};

export default FelixTheme;
