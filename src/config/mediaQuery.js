import { css } from 'styled-components';

class MediaQuery {
  breakpoints = {
    xxs: 0,
    xs: 380,
    sm: 600,
    md: 780,
    lg: 1040,
    xl: 1240,
    xxl: 1500
  };

  widths = {
    xxs: 0,
    xs: 320,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1200,
    xxl: 1440
  };

  selectors = {};

  constructor() {
    this.rebuild();
  }

  rebuild() {
    this.selectors = {
      xxs: `@media (min-width: 0px)`, // It's a trick
      xs: `@media (min-width: ${this.breakpoints.xs}px)`,
      sm: `@media (min-width: ${this.breakpoints.sm}px)`,
      md: `@media (min-width: ${this.breakpoints.md}px)`,
      lg: `@media (min-width: ${this.breakpoints.lg}px)`,
      xl: `@media (min-width: ${this.breakpoints.xl}px)`,
      xxl: `@media (min-width: ${this.breakpoints.xxl}px)`,
      xsOnly: `@media (max-width: ${this.breakpoints.sm - 1}px)`,
      smOnly: `@media (min-width: ${this.breakpoints.sm}px) and (max-width: ${this.breakpoints.md - 1}px)`,
      mdOnly: `@media (min-width: ${this.breakpoints.md}px) and (max-width: ${this.breakpoints.lg - 1}px)`,
      lgOnly: `@media (min-width: ${this.breakpoints.lg}px) and (max-width: ${this.breakpoints.xl - 1}px)`,
      xlOnly: `@media (min-width: ${this.breakpoints.xl}px) and (max-width: ${this.breakpoints.xxl - 1}px)`,
      xxlOnly: `@media (min-width: ${this.breakpoints.xxl}px)`
    };

    Object.keys(this.selectors).forEach(screenName => {
      this[screenName] = (...args) => screenName === 'xxs' ? css(...args) : css`
        ${this.selectors[screenName]} {
          ${css(...args)}
        }
      `;
    });
  }
}

export default new MediaQuery();