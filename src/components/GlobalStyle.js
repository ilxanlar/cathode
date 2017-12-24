import { injectGlobal, withTheme } from 'styled-components';

let injected = false;

const injectGlobalCss = (theme, customCss = undefined) => injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box;
    outline: none !important;
  }

  html {
    font-size: ${theme.common.fontSize}px;
  }

  body {
    background: ${theme.colors.white};
    color: ${theme.colors.text};
    font-family: ${theme.common.fontPrimary};
    font-size: ${theme.common.fontSize}px;
    font-weight: 400;
    line-height: ${theme.common.lineHeight};
    margin: 0;
    overflow-x: hidden;
    padding: 0;
  }

  body.disable-scroll {
    overflow: hidden;
  }

  a, input, textarea, button, select, option {
    color: inherit;
    font: inherit;
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${theme.fieldBox.placeholderColor};
  }

  ::-moz-placeholder { /* Firefox 19+ */
    color: ${theme.fieldBox.placeholderColor};
    opacity: 1;
  }

  :-ms-input-placeholder { /* IE 10+ */
    color: ${theme.fieldBox.placeholderColor};
  }

  :-moz-placeholder { /* Firefox 18- */
    color: ${theme.fieldBox.placeholderColor};
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }

  hr {
    border-width: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    margin: ${theme.spaces.md}px 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  strong {
    font-weight: ${theme.fontWeights.bold};
  }

  ${customCss}
`;

const GlobalStyle = ({ customCss, theme }) => {
  if (injected === false) {
    injectGlobalCss(theme, customCss);
    injected = true;
  }

  return null
};

export default withTheme(GlobalStyle);