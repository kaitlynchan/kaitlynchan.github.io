var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify')

gulp.task('test', function(done){ //call the callback function to signal that task has finished (in case of async code)
  console.log('done');
  done();
});

gulp.task('uglify', () => {
  return gulp.src('index.js')//source file to pipe in
    .pipe(rename('uglify.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
});

gulp.task('html', () => {
  return gulp.src('index.hbs') //compiles index.hbs template to html
    .pipe(handlebars({}, {
      batch: ['./partials'] //pulls in directory and pushes into handlebars func
    }))
    .pipe(rename({
      extname: '.html' //rename all piped files into an html file
    }))
    .pipe(gulp.dest('./')) //piping into current directory
});


gulp.task('default', gulp.series(gulp.parallel('html', 'uglify'), 'test'));
 //does tasks html and uglify in parallel, then the log (task declaration order matters)
