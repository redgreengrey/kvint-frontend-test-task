const defaultTheme = require('antd/dist/default-theme');
const merge = require('lodash/merge');

const COLOR_BLACK = '#0e0e0e';
const COLOR_PRIMARY_DISABLED = '#707070';
const COLOR_SECONDARY_DISABLED = '#B5B5B5';
const COLOR_PRIMARY_ACTIVE = '#01C8F8';
const COLOR_SECONDARY_ACTIVE = '#0F213C';

module.exports = merge(defaultTheme, {
  black: COLOR_BLACK,
  smokie: COLOR_PRIMARY_DISABLED,
  stormcloud: COLOR_SECONDARY_DISABLED,
  primary: COLOR_PRIMARY_ACTIVE,
  secondary: COLOR_SECONDARY_ACTIVE,
});
