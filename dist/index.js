"use strict";

function testBabel(name, color) {
  return "Ol\xE1, ".concat(name, ". Sua cor preferida \xE9: ").concat(color);
}

console.log(testBabel("Arthur", "verde")); 
