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
      url: "https://github.com/phanect/eslint-plugin-no-document-write",
    },
  },

  create(context) {
    return {
      "MemberExpression[object.name = 'document'][property.name = 'write'],MemberExpression[object.name = 'document'][property.name = 'writeln']"(node) {
        context.report({
          node,
          message: `document.${node.property.name}() is not allowed. Use .innerHTML or .appendChild() instead`,
        });
      },
    };
  },
};
