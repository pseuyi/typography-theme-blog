// @flow
import type {OptionsType} from 'Types';
import gray from 'gray-percentage';
import CodePlugin from 'typography-plugin-code';

const theme: OptionsType = {
  title: 'blog',
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  scale: 2.5,
  googleFonts: [
    {
      name: 'Lora',
      styles: ['400', '400i'],
    },
    {
      name: 'Roboto',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Arial', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Arial', 'Helvetica Neue', 'sans-serif'],
  headerColor: 'black',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({adjustFontSizeTo, scale, rhythm}, options) => ({
    h1: scale(5 / 5),
    h2: scale(3 / 5),
    h3: scale(1 / 5),
    h4: scale(0 / 5),
    h5: scale(-1 / 8),
    h6: {
      ...scale(-2 / 8),
      fontFamily: options.bodyFontFamily.join(','),
      fontWeight: options.bodyWeight,
      textTransform: 'uppercase',
    },
    a: {
      padding: `0 ${rhythm(1 / 6)}`,
    },
    'a:visited': {
      color: 'darkblue',
      padding: `0 ${rhythm(1 / 6)}`,
    },
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid`,
      borderColor: gray(93),
      padding: `${rhythm(2 / 3)} ${rhythm(1 / 3)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(54, 204),
      fontWeight: options.bodyWeight,
      fontStyle: 'normal',
    },
    div: scale(2 / 5),
  }),
};

theme.plugins = [new CodePlugin()];

export default theme;
