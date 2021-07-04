/**
 * @file Disallow document.write() and document.writeln().
 * @author Jumpei Ogawa
 */
"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow `document.write()` and `document.writeln()`",
      category: "Best Practices",
      url: "https://github.com/phanect/eslint-plugin-no-document-write",
    },
  },

  create(context) {
    return {
      "CallExpression > MemberExpression.callee[object.name = 'document'][property.name = 'write']"(node) {
        context.report({
          node: node.parent,
          message: "document.write() is not allowed. Use .innerHTML or .appendChild() instead",
        });
      },
      "CallExpression > MemberExpression.callee[object.name = 'document'][property.name = 'writeln']"(node) {
        context.report({
          node: node.parent,
          message: "document.writeln() is not allowed. Use .innerHTML or .appendChild() instead",
        });
      },
    };
  },
};
