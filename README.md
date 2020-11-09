# Template Compiler

Compile templates to javascript function to further use in virtual dom.

~~~ javascript
  let template = `<template>\n\t<div>\n\n\t</div>\n</template>`

    let ast = compiler.compile(defaultTemplate);

    let code = compiler.compileToFunctions(defaultTemplate);

    console.log('Code', code);
~~~