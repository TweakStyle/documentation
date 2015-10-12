## Preprocessors support

SASS, LESS or Stylus are examples of Preprocessors for the CSS language.
When using one of those, the source code must be processed (i.e. built) into CSS before it can be used by browsers.

TweakStyle 0.8.0 introduces some support of Preprocessors and custom builds:
- _Source files automatically pined_
- _Live Update on save_ without having to reload preview

This is made possible through _Sourcemap support_ and _Watch for file change_

For now, TweakStyle does not embed any preprocessor compiler. To get this working, you’ll have to setup the compiler yourself.
Don't forget to enable sourcemaps and use watch mode (compile on save).
You should find easily how to setup those options in the documentation of the Preprocessor you use.