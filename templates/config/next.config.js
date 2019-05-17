const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');


module.exports = withPlugins([
  [withCSS],
  [withFonts],
  [withImages],
]);
