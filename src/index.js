// @flow

import {parse} from "babylon"
import {JSFuck} from "jsfuck";
import generate from '@babel/generator';

type ast = Object

function toString(n: ast): string {
  return generate(n).code;
}

export default function (babel) {
  const { types: t } = babel;

  return {

    visitor: {
      Program: {
        exit(path) {
          const input = toString(path.node);
          const encoded = JSFuck.encode(input);

          const newProgram = parse(encoded).program;

          path.replaceWith(newProgram);
          path.stop();
        },
      }
    }

  };
}
