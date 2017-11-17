var gulp = require('gulp');
//var	contact = require('gulp-concat'),
//	uglify = require('gulp-uglify'),
var	stylus = require('gulp-stylus');
var	nib = require('nib');
var plumber = require('gulp-plumber');
var	browserSync = require('browser-sync');

// var sourcemaps = require('gulp-sourcemaps');
var pathStyles = [
	"src/stylus/*.styl",
	"src/stylus/responsive.styl",
	"src/stylus/variables.styl"
];
var pathsStylesToWatch = [
    "src/stylus/base.styl",
	"src/stylus/responsive.styl"
];

var taskStylusSelf = function(){
	return gulp.src(pathStyles)
		.pipe(plumber())
		.pipe(stylus({
			use: nib(),
			compress: true
		}))
		.pipe(gulp.dest("./public/centralfile/00000004/es-PE/css_files/"));
}
gulp.task("styles", function(){
	return  taskStylusSelf();
})

// gulp.task("watch", function(){
// 	gulp.watch(pathsStylesToWatch, function(){
// 		taskStylusSelf();
// 	})

// 	gulp.watch("./public/*.*").on("change", browserSync.reload);
// 	gulp.watch("./public/**/*.*").on("change", browserSync.reload);
// });

gulp.task("ServerBrowserSync", function(){
	browserSync.init({
		port:8089,
		browser: "chrome",
		server: {
			baseDir: "public",
			index: "idakoos-tshirt.html"
		}
	});
});
// gulp.task("build", ["styles"]);
// gulp.task("server", ["ServerBrowserSync", "watch"]);

gulp.task('default', ['watch']);

gulp.task('watch', function(){
	gulp.watch(pathStyles, ['styles']);

});