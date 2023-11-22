import '@emotion/react';

const colors = {
  white: '#fefefe',
  black: '#101010',
  gray: '#b8b8b8',
  light_purple: '#A550f0',
  purple: '#6E28AC',
};

const flex = {
  flexCenter: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },
  flexColumn: {
    display: 'flex',
    'flex-direction': 'column',
  },
  flexRow: {
    display: 'flex',
    'flex-direction': 'row',
  },
};

const font = {
  title: {
    'font-family': 'lemon',
    'font-size': '3rem',
    'line-height': '1.2',
  },
  bold_20: {
    'font-size': '2rem',
    'font-weight': '700',
    'line-height': '1.2',
  },
  bold_12: {
    'font-size': '1rem',
    'font-weight': '700',
    'line-height': '1.2',
  },
  bold_10: {
    'font-size': '1rem',
    'font-weight': '700',
    'line-height': '1.2',
  },
  medium_14: {
    'font-size': '1.4rem',
    'font-weight': '500',
    'line-height': '1.4',
  },
  regular_14: {
    'font-size': '1.4rem',
    'font-weight': '400',
    'line-height': '1.4',
  },
  regular_12: {
    'font-size': '1.2rem',
    'font-weight': '400',
    'line-height': '1.4',
  },
};

const border = {
  inputBorder: {
    border: '1px solid #212121',
    'border-radius': '5px',
  },
};

const theme = {
  colors,
  font,
  border,
  flex,
};

export default theme;
