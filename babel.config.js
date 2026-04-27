/* Babel needs to know JSX elements can accept className. NativeWind ships a  
  JSX transform via jsxImportSource: "nativewind". Without this, className gets
  silently dropped.  */

module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
    };
}; 