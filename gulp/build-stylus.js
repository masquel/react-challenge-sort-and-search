'use strict';

module.exports = (gulp, plugins, config) => () => {
  return gulp.src(config.paths.stylus)
    .pipe(plugins.sourcemaps.init())
    .pipe(
    	plugins.stylus(
    		/*{
				use: [plugins.autoprefixerStylus({ browsers: 'last 50 versions' })]
			}*/
		)
	)
	.pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write())
	.pipe(plugins.rename({ suffix: '.min' }))
    .pipe(gulp.dest(`${config.paths.dist}/css`));
};
