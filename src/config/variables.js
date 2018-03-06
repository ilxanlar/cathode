import { keyframes as createKeyframe } from 'styled-components';

let theme = {
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

theme.common = {
  fontSize: theme.fontSizes.md,
  fontPrimary: theme.fonts.primary,
  fontSecondary: theme.fonts.secondary,
  fontWeight: theme.fontWeights.normal,
  lineHeight: 1.75,
  opacityLoading: 0.7,
  opacityDisabled: 0.5,
  filterDisabled: 'grayscale(0.75)',
  radius: 2,
  shadow: '0 0 10px rgba(0, 0, 0, 0.08)',
  transitionAll: `all 0.15s ease-in`
};

theme.moods = {
  primary: {
    original: theme.colors.primary,
    light: theme.colors.primaryLight,
    buttonBgColor: theme.colors.primary,
    buttonBgColorHovered: '#35c8f5',
    buttonBgColorPressed: '#009dcd',
    buttonBgColorDisabled: '#caf0fc',
    buttonTextColor: theme.colors.white,
    buttonTextColorGhost: theme.colors.primary,
    buttonTextColorDisabled: theme.colors.white
  },

  secondary: {
    original: theme.colors.secondary,
    light: theme.colors.secondaryLight,
    buttonBgColor: theme.colors.secondary,
    buttonBgColorHovered: '#e8f8ff',
    buttonBgColorPressed: '#8bdbff',
    buttonBgColorDisabled: '#d9f3ff',
    buttonTextColor: '#1caff6',
    buttonTextColorGhost: '#1caff6',
    buttonTextColorDisabled: theme.colors.white
  },

  tertiary: {
    original: theme.colors.tertiary,
    light: theme.colors.tertiaryLight,
    buttonBgColor: theme.colors.tertiary,
    buttonBgColorHovered: '#f1f3f9',
    buttonBgColorPressed: '#c1c6d6',
    buttonBgColorDisabled: '#e1e3ea',
    buttonTextColor: '#748494',
    buttonTextColorGhost: '#748494',
    buttonTextColorDisabled: theme.colors.white
  },

  info: {
    original: theme.colors.info,
    light: theme.colors.infoLight,
    buttonBgColor: theme.colors.info,
    buttonBgColorHovered: '#61a1eb',
    buttonBgColorPressed: '#3f7dc5',
    buttonBgColorDisabled: '#adcaec',
    buttonTextColor: theme.colors.white,
    buttonTextColorGhost: theme.colors.info,
    buttonTextColorDisabled: theme.colors.white
  },

  success: {
    original: theme.colors.success,
    light: theme.colors.successLight,
    buttonBgColor: theme.colors.success,
    buttonBgColorHovered: '#69f1d3',
    buttonBgColorPressed: '#40bfa2',
    buttonBgColorDisabled: '#bcf1e5',
    buttonTextColor: theme.colors.white,
    buttonTextColorGhost: theme.colors.success,
    buttonTextColorDisabled: theme.colors.white
  },

  error: {
    original: theme.colors.error,
    light: theme.colors.errorLight,
    buttonBgColor: theme.colors.error,
    buttonBgColorHovered: '#ff8ba1',
    buttonBgColorPressed: '#df3f5e',
    buttonBgColorDisabled: '#ffd0d9',
    buttonTextColor: theme.colors.white,
    buttonTextColorGhost: theme.colors.error,
    buttonTextColorDisabled: theme.colors.white
  },

  warning: {
    original: theme.colors.warning,
    light: theme.colors.warningLight,
    buttonBgColor: theme.colors.warning,
    buttonBgColorHovered: '#ffe662',
    buttonBgColorPressed: '#e7c200',
    buttonBgColorDisabled: '#feed93',
    buttonTextColor: theme.colors.white,
    buttonTextColorGhost: theme.colors.warning,
    buttonTextColorDisabled: theme.colors.white
  }
};

theme.message = {
  lineHeight: 1.5,
  titleFontWeight: theme.fontWeights.medium,
  padding: 20
};

theme.button = {
  size: {
    xxs: {
      radius: 2,
      fontSize: theme.fontSizes.xxs,
      lineHeight: theme.common.lineHeight,
      paddingH: 6,
      paddingV: 2
    },
    xs: {
      radius: 2,
      fontSize: theme.fontSizes.xs,
      lineHeight: theme.common.lineHeight,
      paddingH: 8,
      paddingV: 4
    },
    sm: {
      radius: 2,
      fontSize: theme.fontSizes.sm,
      lineHeight: theme.common.lineHeight,
      paddingH: 12,
      paddingV: 6
    },
    md: {
      radius: 2,
      fontSize: theme.fontSizes.md,
      lineHeight: theme.common.lineHeight,
      paddingH: 16,
      paddingV: 7
    },
    lg: {
      radius: 2,
      fontSize: theme.fontSizes.lg,
      lineHeight: theme.common.lineHeight,
      paddingH: 16,
      paddingV: 8
    },
    xl: {
      radius: 2,
      fontSize: theme.fontSizes.xl,
      lineHeight: theme.common.lineHeight,
      paddingH: 20,
      paddingV: 10
    },
    xxl: {
      radius: 2,
      fontSize: theme.fontSizes.xxl,
      lineHeight: theme.common.lineHeight,
      paddingH: 24,
      paddingV: 12
    }
  },
  fontWeight: theme.fontWeights.medium
};

theme.buttonGroup = {
  margin: 1
};

theme.dropdown = {
  minWidth: 150,
  itemBgColorHover: theme.colors.lightC,
  itemBgColorActive: theme.colors.primary,
  itemTextColorActive: theme.colors.white,
  itemPaddingH: 16,
  itemPaddingV: 5,
  separatorColor: theme.colors.lightC
};

theme.field = {
  labelFontWeight: theme.fontWeights.semiBold
};

theme.fieldBox = {
  bgColorDisabled: theme.colors.lightB,
  borderColor: theme.colors.lightA,
  borderColorHovered: theme.colors.lightA,
  borderColorFocused: theme.colors.primary,
  placeholderColor: theme.colors.grayC
};

theme.fieldBoolean = {
  borderColor: theme.colors.grayC,
  borderColorHovered: theme.colors.grayB,
  borderColorFocused: theme.colors.grayA,
  size: {
    xxs: {
      checkbox: {
        borderWidthOff: 1,
        borderWidthOn: 1,
        checkBorderWidth: 2,
        checkSize: 8,
        radius: 2,
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
        radius: 2,
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
        radius: 2,
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
        radius: 2,
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
        radius: 2,
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
        radius: 2,
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
        radius: 2,
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

theme.grid = {
  maxColumns: 24
};

theme.popover = {
  lineHeight: 1.2,
  margin: 5,
  padding: theme.spaces.md,
  arrowMarginInside: -3,
  arrowMarginSide: -4,
  arrowSize: 8
};

theme.tooltip = {
  fontSize: theme.fontSizes.sm,
  padding: 5
};

export default theme;
