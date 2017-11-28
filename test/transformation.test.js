import * as babylon from 'babylon';
import * as types from '@babel/types';
import generate from '@babel/generator';
import traverse from '@babel/traverse';
import {assert} from 'chai';
import {readFileSync} from 'fs';

import visitor from '../src';

function transform(code) {
  const ast = babylon.parse(code, {
    sourceType: 'module',
  });

  traverse(ast, visitor({ types }).visitor, null, {});

  return generate(ast).code;
}

describe('transforms', () => {

  it('should inline a constant', () => {

    const out = transform(`
      true;
      `)

    const expected = readFileSync('./test/fixture.js', 'utf8');

    assert.equal(out, expected);
  })

})
