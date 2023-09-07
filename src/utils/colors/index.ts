interface BorderColorPalette {
  main?: string;
  bottomNav?: string;
  card?: string;
}

interface PrimaryColorPalette {
  main?: string;
  surface?: string;
  shadow?: string;
}
interface SecondaryColorPalette {
  main?: string;
}

interface TextColorPalette {
  title?: string;
  subTitle?: string;
  descTitle?: string;
}

interface NeutralColorPalette {
  white?: string;
  black?: string;
  gray?: string;
}

interface InputColorPalette {
  placeholder?: string;
}

export interface ThemeColors {
  primary: PrimaryColorPalette;
  secondary: SecondaryColorPalette;
  text: TextColorPalette;
  neutral: NeutralColorPalette;
  border: BorderColorPalette;
  inputs: InputColorPalette;
}

export const lightColors: ThemeColors = {
  primary: {
    main: '#F9862D',
    surface: '#FFE2C2',
    shadow: 'rgba(249, 134, 45, 0.14)',
  },
  secondary: {
    main: '#AAC626',
  },
  text: {
    title: '#393E46',
    subTitle: '#6C7076',
    descTitle: '#26292F',
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#B6B8BA',
  },
  border: {
    main: '#E0E0E0',
    bottomNav: '#F7F7F7',
    card: '#F7F7F7',
  },
  inputs: {
    placeholder: '#9E9E9E',
  },
};

export const darkColors: ThemeColors = {
  primary: {
    main: '#F9862D',
    surface: '#FFE2C2',
    shadow: 'rgba(249, 134, 45, 0.14)',
  },
  secondary: {
    main: '#AAC626',
  },
  text: {
    title: '#393E46',
    subTitle: '#6C7076',
    descTitle: '#26292F',
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#B6B8BA',
  },
  border: {
    main: '#E0E0E0',
    bottomNav: '#F7F7F7',
    card: '#F7F7F7',
  },
  inputs: {
    placeholder: '#9E9E9E',
  },
};
