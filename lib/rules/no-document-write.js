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

      //
      // const d = document;
      // d.write();
      //
      "MemberExpression[property.name = 'write'],MemberExpression[property.name = 'writeln']"(node) {
        const methodName = node.property.name;
        /**
         * Reference to the variable which `document` object might be assigned.
         * In above example, d variable.
         */
        const varRef = context.getScope().resolve(node.object);
        const varDeclaration = varRef.resolved;

        // If the object is `document` object itself or any other
        // predefined global variables (e.g. `location`)
        if (!varDeclaration) {
          return;
        }

        // In case document object is assigned on declaration
        if (
          // document object is assigned on declaration
          varDeclaration.defs[0].node.init &&
          varDeclaration.defs[0].node.init.name === "document" &&
          (
            // ...and declared with const (== never reassigned)
            varDeclaration.defs[0].kind === "const" ||
            varDeclaration.references.every(ref => (
              // or declared with let/varm but all the references are read only
              // (== never reassigned)
              ref.isReadOnly() ||
              // except for declaration (declaration is also counted as a Reference)
              ref.init === true
            ))
          )
        ) {
          context.report({
            node: node,
            message: `document.${methodName}() is not allowed. Use .innerHTML or .appendChild() instead`,
          });
        }
      },
    };
  },
};
