module.exports = {
  extends: ['stylelint-config-html/vue', './stylelint.config.order.cjs'],
  plugins: ['stylelint-order', '@stylistic/stylelint-plugin'],
  overrides: [
    {
      files: ['**/*.{css,pcss}'],
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    // Avoid errors
    'no-descending-specificity': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-duplicate-names': true,
    'keyframe-block-no-duplicate-selectors': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,

    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,

    'function-calc-no-unspaced-operator': true,
    'keyframe-declaration-no-important': true,
    'media-query-no-invalid': true,
    'named-grid-areas-no-invalid': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'string-no-newline': true,

    'no-irregular-whitespace': true,

    'custom-property-no-missing-var-function': true,
    'font-family-no-missing-generic-family-keyword': true,

    'function-linear-gradient-no-nonstandard-direction': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'selector-anb-no-unmatchable': true,

    'annotation-no-unknown': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['starting-style'],
      },
    ],
    'function-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'media-feature-name-value-no-unknown': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    'unit-no-unknown': true,

    // Enforce conventions
    'at-rule-no-vendor-prefix': true,
    'color-named': 'never',
    'declaration-no-important': true,
    'function-disallowed-list': ['rgba', 'hsl', 'hsla'],
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    'function-name-case': 'lower',
    'selector-type-case': 'lower',
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
      },
    ],

    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'inside-block'],
        ignore: ['after-comment', 'blockless-after-blockless'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'inside-block'],
        ignore: ['after-comment'],
      },
    ],

    'number-max-precision': 2,
    'selector-max-compound-selectors': 2,
    'selector-max-id': 0,
    'selector-max-universal': 2,

    'color-function-notation': 'modern',
    'font-weight-notation': [
      'numeric',
      {
        ignore: ['relative'],
      },
    ],
    'import-notation': 'string',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'selector-not-notation': 'simple',
    'selector-pseudo-element-colon-notation': 'double',

    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',

    '@stylistic/function-comma-newline-after': 'always-multi-line',
    '@stylistic/function-comma-newline-before': 'never-multi-line',
    '@stylistic/function-comma-space-after': 'always-single-line',
    '@stylistic/function-comma-space-before': 'never',
    '@stylistic/function-max-empty-lines': 0,
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
    '@stylistic/function-whitespace-after': 'always',

    '@stylistic/number-leading-zero': 'always',
    '@stylistic/number-no-trailing-zeros': true,

    '@stylistic/string-quotes': 'double',
    '@stylistic/unit-case': 'lower',

    '@stylistic/value-list-comma-newline-after': 'always-multi-line',
    '@stylistic/value-list-comma-newline-before': 'never-multi-line',
    '@stylistic/value-list-comma-space-after': 'always-single-line',
    '@stylistic/value-list-comma-space-before': 'never',
    '@stylistic/value-list-max-empty-lines': 0,

    '@stylistic/property-case': 'lower',

    '@stylistic/declaration-bang-space-after': 'never',
    '@stylistic/declaration-bang-space-before': 'always',
    '@stylistic/declaration-colon-newline-after': 'always-multi-line',
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/declaration-colon-space-before': 'never',

    '@stylistic/declaration-block-semicolon-newline-after': 'always',
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
    '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
    '@stylistic/declaration-block-semicolon-space-before': 'never',
    '@stylistic/declaration-block-trailing-semicolon': 'always',

    '@stylistic/block-closing-brace-empty-line-before': 'never',
    '@stylistic/block-closing-brace-newline-after': 'always',
    '@stylistic/block-closing-brace-newline-before': 'always',
    '@stylistic/block-closing-brace-space-after': 'always-single-line',
    '@stylistic/block-closing-brace-space-before': 'always-single-line',
    '@stylistic/block-opening-brace-newline-after': 'always',
    '@stylistic/block-opening-brace-space-after': 'always-single-line',
    '@stylistic/block-opening-brace-space-before': 'always',

    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-operator-space-before': 'never',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-combinator-space-before': 'always',
    '@stylistic/selector-descendant-combinator-no-non-space': true,
    '@stylistic/selector-max-empty-lines': 0,
    '@stylistic/selector-pseudo-class-case': 'lower',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/selector-pseudo-element-case': 'lower',

    '@stylistic/selector-list-comma-newline-after': 'always',
    '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
    '@stylistic/selector-list-comma-space-after': 'always-single-line',
    '@stylistic/selector-list-comma-space-before': 'never',

    '@stylistic/media-feature-colon-space-after': 'always',
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-name-case': 'lower',
    '@stylistic/media-feature-parentheses-space-inside': 'never',
    '@stylistic/media-feature-range-operator-space-after': 'always',
    '@stylistic/media-feature-range-operator-space-before': 'always',

    '@stylistic/media-query-list-comma-newline-after': 'always-multi-line',
    '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
    '@stylistic/media-query-list-comma-space-after': 'always-single-line',
    '@stylistic/media-query-list-comma-space-before': 'never-single-line',

    '@stylistic/at-rule-name-case': 'lower',
    '@stylistic/at-rule-name-space-after': 'always',
    '@stylistic/at-rule-semicolon-newline-after': 'always',

    '@stylistic/indentation': 2,
    '@stylistic/max-empty-lines': 2,
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': true,
  },
};
