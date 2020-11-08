/* eslint-env browser */
"use strict";

document.write("tetete");
document.writeln("tototo");

const x = 1;

// Following is not covered
if (x === 1) {
  const d = document;
  d.write("mmm");
  d.writeln("tototo");

  console.log("tetete");

  document.write();
}
