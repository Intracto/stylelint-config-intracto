module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended"
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "color-named": "never",
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "stylelint-commands"]
      }
    ],
    "comment-whitespace-inside": "always",
    "function-url-quotes": "always",
    "no-unknown-animations": true,
    "selector-pseudo-element-colon-notation": "double",
    "shorthand-property-no-redundant-values": true,
    "color-hex-length": "short"
  }
};
