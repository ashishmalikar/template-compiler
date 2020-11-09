import {createCompilerCreator} from './compilers/createCompileCreator';

import baseCompile from './compilers/baseCompile';

import baseOptions from './shared/baseOptions'

// console.log('Base Options: ', baseOptions)

let createCompiler = createCompilerCreator(baseCompile);

export default createCompiler(baseOptions);