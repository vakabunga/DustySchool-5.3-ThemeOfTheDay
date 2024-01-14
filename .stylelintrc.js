const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  extends: ['@shopify/stylelint-plugin'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
    'selector-class-pattern': /[a-z_\-]+/,
  },
};
