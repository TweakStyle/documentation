## Preprocessors support

SASS, LESS or Stylus are examples of Preprocessors for the CSS language.
When using one of thoose, the source code must be processed (I.E. built) into CSS before it can be used by browsers.

TweakStyle 0.8.X introduce a partial support of Preprocessors and custom builds through __Sourcemap support__ and __Watch for file change__.
With a few external tools and setup, you can get __Source files automatically pined__ for all Preprocessors and __Live Update on save__ without having to reload preview, for all CSS Preprocessors and custom builds.

For now, TweakStyle does not embed any preprocessor compiler. You'll have to setup the compiler yourself, with the following options:
- Enable sourcemap
- Use watch mode (compile on save)

You should find how to setup thoose options in the documentation of your Preprocessor