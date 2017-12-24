import { keyframes as createKeyframe } from 'styled-components';

let variables = {
  colors: {
    white: '#fff',
    lightA: '#d5d5d5',
    lightB: '#ececec',
    lightC: '#f6f6f6',
    grayA: '#888',
    grayB: '#999',
    grayC: '#aaa',
    darkA: '#222',
    darkB: '#444',
    darkC: '#666',
    black: '#111',
    text: '#444',
    primary: '#1caff6',
    primaryLight: '#effaff',
    secondary: '#d9f3ff',
    secondaryLight: '#effaff',
    tertiary: '#e8eaf1',
    tertiaryLight: '#f6f8ff',
    info: '#4a90e2',
    infoLight: '#eff6ff',
    success: '#50e3c2',
    successLight: '#ebfffb',
    error: '#ff5475',
    errorLight: '#fff2f5',
    warning: '#F5B800',
    warningLight: '#fff8e4'
  },
  gutters: {
    none: 0,
    xxs: 2,
    xs: 3,
    sm: 5,
    md: 10,
    lg: 15,
    xl: 20,
    xxl: 25
  },
  spaces: {
    none: 0,
    xxs: 2,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 25,
    xxl: 30
  },
  shadows: {
    xxs: '0 0 5px rgba(0, 0, 0, 0.08)',
    xs: '0 0 7px rgba(0, 0, 0, 0.08)',
    sm: '0 0 10px rgba(0, 0, 0, 0.08)',
    md: '0 0 10px rgba(0, 0, 0, 0.08)',
    lg: '0 0 10px rgba(0, 0, 0, 0.08)',
    xl: '0 0 13px rgba(0, 0, 0, 0.08)',
    xxl: '0 0 16px rgba(0, 0, 0, 0.08)'
  },
  keyframes: {
    buttonLoading: createKeyframe`
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    `,
    fadeIn: createKeyframe`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `,
    fadeInDown: createKeyframe`
      from {
        opacity: 0;
        transform: translate3d(0, -30px, 0);
      }
      to {
        opacity: 1;
        transform: none;
      }
    `,
    reminderDot: createKeyframe`
      0% {
        opacity: 0.5;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(5);
      }
    `,
    spin: createKeyframe`
      0% { transform: rotate(0deg) }
      to { transform: rotate(1turn) }
    `,
    switchDot: createKeyframe`
      0% {
        transform: scale(1);
      }
      20% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    `
  },
  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    secondary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
  },
  fontSizes: {
    xxs: 11,
    xs: 12,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 24
  },
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  isRTL: false
};

variables.common = {
  fontSize: variables.fontSizes.md,
  fontPrimary: variables.fonts.primary,
  fontSecondary: variables.fonts.secondary,
  fontWeight: variables.fontWeights.normal,
  lineHeight: 1.75,
  opacityLoading: 0.7,
  opacityDisabled: 0.5,
  filterDisabled: 'grayscale(0.75)',
  radius: 3,
  shadow: '0 0 10px rgba(0, 0, 0, 0.08)',
  transitionAll: `all 0.15s ease-in`
};

variables.moods = {
  primary: {
    original: variables.colors.primary,
    light: variables.colors.primaryLight,
    buttonBgColor: variables.colors.primary,
    buttonBgColorHovered: '#35c8f5',
    buttonBgColorPressed: '#009dcd',
    buttonBgColorDisabled: '#caf0fc',
    buttonTextColor: variables.colors.white,
    buttonTextColorGhost: variables.colors.primary,
    buttonTextColorDisabled: variables.colors.white
  },

  secondary: {
    original: variables.colors.secondary,
    light: variables.colors.secondaryLight,
    buttonBgColor: variables.colors.secondary,
    buttonBgColorHovered: '#e8f8ff',
    buttonBgColorPressed: '#8bdbff',
    buttonBgColorDisabled: '#d9f3ff',
    buttonTextColor: '#1caff6',
    buttonTextColorGhost: '#1caff6',
    buttonTextColorDisabled: variables.colors.white
  },

  tertiary: {
    original: variables.colors.tertiary,
    light: variables.colors.tertiaryLight,
    buttonBgColor: variables.colors.tertiary,
    buttonBgColorHovered: '#f1f3f9',
    buttonBgColorPressed: '#c1c6d6',
    buttonBgColorDisabled: '#e1e3ea',
    buttonTextColor: '#748494',
    buttonTextColorGhost: '#748494',
    buttonTextColorDisabled: variables.colors.white
  },

  info: {
    original: variables.colors.info,
    light: variables.colors.infoLight,
    buttonBgColor: variables.colors.info,
    buttonBgColorHovered: '#61a1eb',
    buttonBgColorPressed: '#3f7dc5',
    buttonBgColorDisabled: '#adcaec',
    buttonTextColor: variables.colors.white,
    buttonTextColorGhost: variables.colors.info,
    buttonTextColorDisabled: variables.colors.white
  },

  success: {
    original: variables.colors.success,
    light: variables.colors.successLight,
    buttonBgColor: variables.colors.success,
    buttonBgColorHovered: '#69f1d3',
    buttonBgColorPressed: '#40bfa2',
    buttonBgColorDisabled: '#bcf1e5',
    buttonTextColor: variables.colors.white,
    buttonTextColorGhost: variables.colors.success,
    buttonTextColorDisabled: variables.colors.white
  },

  error: {
    original: variables.colors.error,
    light: variables.colors.errorLight,
    buttonBgColor: variables.colors.error,
    buttonBgColorHovered: '#ff8ba1',
    buttonBgColorPressed: '#df3f5e',
    buttonBgColorDisabled: '#ffd0d9',
    buttonTextColor: variables.colors.white,
    buttonTextColorGhost: variables.colors.error,
    buttonTextColorDisabled: variables.colors.white
  },

  warning: {
    original: variables.colors.warning,
    light: variables.colors.warningLight,
    buttonBgColor: variables.colors.warning,
    buttonBgColorHovered: '#ffe662',
    buttonBgColorPressed: '#e7c200',
    buttonBgColorDisabled: '#feed93',
    buttonTextColor: variables.colors.white,
    buttonTextColorGhost: variables.colors.warning,
    buttonTextColorDisabled: variables.colors.white
  }
};

variables.message = {
  lineHeight: 1.5,
  titleFontWeight: variables.fontWeights.medium
};

variables.button = {
  size: {
    xxs: {
      radius: 3,
      fontSize: variables.fontSizes.xxs,
      lineHeight: variables.common.lineHeight,
      paddingH: 6,
      paddingV: 2
    },
    xs: {
      radius: 3,
      fontSize: variables.fontSizes.xs,
      lineHeight: variables.common.lineHeight,
      paddingH: 8,
      paddingV: 4
    },
    sm: {
      radius: 3,
      fontSize: variables.fontSizes.sm,
      lineHeight: variables.common.lineHeight,
      paddingH: 12,
      paddingV: 6
    },
    md: {
      radius: 3,
      fontSize: variables.fontSizes.md,
      lineHeight: variables.common.lineHeight,
      paddingH: 16,
      paddingV: 7
    },
    lg: {
      radius: 3,
      fontSize: variables.fontSizes.lg,
      lineHeight: variables.common.lineHeight,
      paddingH: 16,
      paddingV: 8
    },
    xl: {
      radius: 5,
      fontSize: variables.fontSizes.xl,
      lineHeight: variables.common.lineHeight,
      paddingH: 20,
      paddingV: 10
    },
    xxl: {
      radius: 5,
      fontSize: variables.fontSizes.xxl,
      lineHeight: variables.common.lineHeight,
      paddingH: 24,
      paddingV: 12
    }
  },
  fontWeight: variables.fontWeights.medium
};

variables.buttonGroup = {
  margin: 1
};

variables.dropdown = {
  minWidth: 150,
  itemBgColorHover: variables.colors.lightC,
  itemBgColorActive: variables.colors.primary,
  itemTextColorActive: variables.colors.white,
  itemPaddingH: 16,
  itemPaddingV: 5,
  separatorColor: variables.colors.lightC
};

variables.field = {
  labelFontWeight: variables.fontWeights.semiBold
};

variables.fieldBox = {
  bgColorDisabled: variables.colors.lightB,
  borderColor: variables.colors.lightA,
  borderColorHovered: variables.colors.lightA,
  borderColorFocused: variables.colors.primary,
  placeholderColor: variables.colors.grayC
};

variables.fieldBoolean = {
  borderColor: variables.colors.grayC,
  borderColorHovered: variables.colors.grayB,
  borderColorFocused: variables.colors.grayA,
  size: {
    xxs: {
      checkbox: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        checkBorderWidth: 2,
        checkSize: 8,
        radius: 3,
        size: 10
      },
      radio: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        dotSize: 4,
        size: 10
      },
      switch: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        padding: 1,
        dotSize: 8,
        height: 10,
        width: 22
      }
    },
    xs: {
      checkbox: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        checkBorderWidth: 2,
        checkSize: 8,
        radius: 3,
        size: 12
      },
      radio: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        dotSize: 4,
        size: 12
      },
      switch: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        padding: 1,
        dotSize: 10,
        height: 12,
        width: 27
      }
    },
    sm: {
      checkbox: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        checkBorderWidth: 2,
        checkSize: 8,
        radius: 3,
        size: 14
      },
      radio: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        dotSize: 6,
        size: 14
      },
      switch: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        padding: 1,
        dotSize: 12,
        height: 14,
        width: 32
      }
    },
    md: {
      checkbox: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        checkBorderWidth: 2,
        checkSize: 8,
        radius: 3,
        size: 16
      },
      radio: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        dotSize: 6,
        size: 16
      },
      switch: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        padding: 1,
        dotSize: 14,
        height: 16,
        width: 37
      }
    },
    lg: {
      checkbox: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        checkBorderWidth: 2,
        checkSize: 8,
        radius: 3,
        size: 18
      },
      radio: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        dotSize: 6,
        size: 18
      },
      switch: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        padding: 1,
        dotSize: 16,
        height: 18,
        width: 42
      }
    },
    xl: {
      checkbox: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        checkBorderWidth: 2,
        checkSize: 8,
        radius: 3,
        size: 20
      },
      radio: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        dotSize: 8,
        size: 20
      },
      switch: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        padding: 1,
        dotSize: 18,
        height: 20,
        width: 47
      }
    },
    xxl: {
      checkbox: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        checkBorderWidth: 2,
        checkSize: 8,
        radius: 3,
        size: 22
      },
      radio: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        dotSize: 8,
        size: 22
      },
      switch: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        padding: 1,
        dotSize: 20,
        height: 22,
        width: 52
      }
    }
  }
};

variables.grid = {
  maxColumns: 24
};

variables.popover = {
  lineHeight: 1.2,
  margin: 10,
  padding: variables.spaces.md,
  arrowMarginInside: -2,
  arrowMarginSide: -3,
  arrowSize: 6
};

variables.tooltip = {
  fontSize: variables.fontSizes.sm,
  padding: 5
};

export default variables;