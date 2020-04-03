const gulp = require('gulp');
const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();



//compile css to scss
function style(){
    //find my css file
    return gulp.src('./src/scss/**/*.scss')
    
    //pass that file to sass compiler
    .pipe(sass().on('error', sass.logError))

    //save compiled css
    .pipe(gulp.dest('./dist/assets/css/'))
    
    //stream changes to all browser
    .pipe(browserSync.stream());

}

function watch(){
    browserSync.init({
        server:{
            baseDir:'./dist'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./dist/*.html').on("change",browserSync.reload);
}

exports.style = style;
exports.watch = watch;