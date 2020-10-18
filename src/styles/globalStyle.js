import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    height: 100%;
    body {
      height: 100%;
      #root {
        height: 100%;
      }
      .centered {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  .text-small {
      font-size: ${({ theme }) => theme.text.font.small};
  }
  
.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
}

.ReactModal__Overlay--after-open {
    opacity: 1;
}

.ReactModal__Overlay--before-close {
    opacity: 0;
}

  .overlay-base {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
  }
  
  .modal-overlay {
    background-color: rgba(0,0,0,0.6);
  }
  
 .login-layout {
    background: radial-gradient(circle, #00af9a 0%, #007768 53%, #006154 100%);
    
    &::before {
      position: absolute;
      height: 100%;
      width: 524px;
      opacity: 0.8;
      top: 0;
      left: 0;
      content: url(${({ theme }) => theme.imgs.backDrop});
    }
  }
  
  ul,
  ol {
    list-style: none;
  }
  
  div:focus,
  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }
  
  dt {
    float: left;
    clear: left;
    width: 60px;
    text-align: left;
    font-weight: 400;
    font-size: ${({ theme }) => theme.text.font.small};
  }
  dd {
    font-size: ${({ theme }) => theme.text.font.small};
    margin-left: 70px;
    padding-left: 0.5em;
  }
  
  div {
    & dd:last-of-type {
      padding-left: 0.5em;
    }
  }
  
  h1 {
    font-size: ${({ theme }) => theme.text.font.headerMedium};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.text.font.modalHeaderMedium};
  }
  h3 {
    font-size: ${({ theme }) => theme.text.font.widgetHeaderMedium};
    line-height: 22px;
  }
  
  p, span, div, input, a, button {
    font-size: ${({ theme }) => theme.text.font.bodyText};
  }
}

`;

export default GlobalStyle;
