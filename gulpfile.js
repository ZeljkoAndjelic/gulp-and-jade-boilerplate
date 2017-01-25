// Plugins
var gulp       = require('gulp');
var jade       = require('gulp-jade');
var sass       = require('gulp-sass');
var livereload = require('gulp-livereload');
var uglify     = require('gulp-uglify');
var build      = require('gulp-build');

// Development Envirouments
var srcSass = './sass/*.scss';
var srcJade = './templates/**/*.jade';

// Production Envirouments
var distSass = './css/';
var distJade = './';

gulp.task('sass', function(){
	gulp.src(srcSass)
		.pipe(sass())
		.pipe(gulp.dest(distSass))
		.pipe(livereload());
});

gulp.task('jade', function(){
	gulp.src(srcJade)
		.pipe(jade({pretty : true}))
		.pipe(gulp.dest(distJade))
		.pipe(livereload());
});

gulp.task('watch', function(){
	gulp.watch(srcSass, ['sass']);
	gulp.watch(srcJade, ['jade']);
});

gulp.task('default', ['sass', 'jade', 'watch']);