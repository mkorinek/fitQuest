/* Metro is the React Native bundler. withNativeWind is a wrapper that        
  installs a CSS transformer — it's what actually runs Tailwind over your
  global.css at build time and pipes the result into the JS bundle. Without this  
  wrapper, the CSS file is just an unused file. */

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: "./global.css" }); 