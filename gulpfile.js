// Plugins
var gulp       	= require('gulp');
var jade       	= require('gulp-jade');
var sass       	= require('gulp-sass');
var livereload 	= require('gulp-livereload');
var uglify     	= require('gulp-uglify');
var build      	= require('gulp-build');
var cleanCss   	= require('gulp-clean-css');
var rename 		= require('gulp-rename');

// Development Envirouments
var srcSass 		= './dist/sass/*.scss';
var srcJade 		= './dist/templates/**/*.jade';
var srcJS			= './dist/js/*.js';
var srcCSS	 		= './app/css/*.css';

// Production Envirouments
var distSass 		= './app/css/';
var distJade 		= './app/';
var distJS	 		= './app/js/';
var distMinCSS	 	= './app/css/';

gulp.task('sass', function(){
	gulp.src(srcSass)
		.pipe(sass())
		.pipe(gulp.dest(distSass));
});

gulp.task('minify-css', function(){
	gulp.src(srcCSS)
	.pipe(cleanCss({compatibility : 'ie8'}))
	.pipe(rename({
		basename : 'main',
		suffix : '.min',
		extname : '.css'
	}))
	.pipe(gulp.dest(distMinCSS));
});

gulp.task('jade', function(){
	gulp.src(srcJade)
		.pipe(jade({pretty : true}))
		.pipe(gulp.dest(distJade));
});

gulp.task('js', function(){
	gulp.src(srcJS)
		.pipe(uglify())
		.pipe(gulp.dest(distJS));
});

gulp.task('watch', function(){
	gulp.watch(srcSass, ['sass']);
	gulp.watch(srcJade, ['jade']);
	gulp.watch(srcJS, ['js']);
});

gulp.task('default', ['sass', 'minify-css', 'jade', 'js', 'watch']);