'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.watch(config.paths.stylus, gulp.series('build-stylus'));
  gulp.watch(config.paths.js, gulp.series('build-js'));
  gulp.watch(config.paths.html, gulp.series('copy'));
};
