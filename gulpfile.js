const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const cleanCSS = require('gulp-clean-css');


// Création de la tache Gulp, qui chargera tous les plugins de postcss
function taskPostcss() {

    const plugins = [
        
        tailwindcss,
        autoprefixer,

    ];
    // on précise bien pour ne pas avoir de boucle, les enfants DIRECT de style/
    return gulp.src('./src/style/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./src/dest'));

}

// Création d'une tache Gulp, qui surveille les changement des fichiers css, et envoie a postcss
gulp.task('watch', () => {
    gulp.watch('./src/style/**/*.css', taskPostcss)
});

gulp.task('minify', () => {
    return gulp.src('./src/dest/*css')
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/style'))

})