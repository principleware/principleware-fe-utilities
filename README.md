# principleware-fe-utilities
A set of javascirpt/typescript utilties

## Dependencies

This project does not depend on any third libraries. 

## Install 

### Source Option

To use it, clone this repo and install it as follows 

> yarn add https://github.com/principleware/principleware-fe-utilities.git

Note that in latest Angular CLI (> 1.5), you may need to explicitly
include the used external source files (outside the source directory
of your application) in *tsconfig.json*. To avoid such trouble, you
may pick up the *Package Option*.

### Package Option

The *package* branch consists of the built version, which is compatible with the 
[Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx). 

> yarn add https://github.com/principleware/principleware-fe-utilities.git#package

The benefit of this option is having no worry about the use in Angular
CLI > 1.5. However, the monolithic package may introduce unused
functions into your application; eliminating those unused code is up to the compiler.

## Development and Test

The instructions in the section only apply to the master branch. To
run tests in the library, simply run the following command

> npm test

To generate documentation, run 

> gulp doc


## Documentation

[Visit documents](https://principleware.github.io/principleware-fe-utilities)
