const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const cleanCSS = require('gulp-clean-css');

function run() {
    const plugins = [
        
        tailwindcss,
        autoprefixer,

    ];

    return gulp.src('./src/style/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./src/dest'))
        .pipe(cleanCSS())
        .pipe(rename(function(path){
            return {
                dirname: '',
                basename: path.basename + ('-min'),
                extname: '.css'
            }
        }))
        .pipe(gulp.dest('./dist/style'))
        .pipe(gulp.dest('./dev'))
}

/** Tâche Gulp permettant de : 
- compiler tailwindcss en css natif
- minifier ce css natif
- l'exporter dans /dist
- l'exporter dans /dev
 */

gulp.task('run', () => {
    gulp.watch('./src/lib-components/*.vue', run )

/** Pour minifier seulement à partir de /dest */

gulp.task('minifyOnly', () => {
    return gulp.src('./src/dest/*.css')
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/style'))

})

})