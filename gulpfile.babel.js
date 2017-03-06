'use strict'

import gulp from 'gulp'
import yargs from 'yargs'
import path from 'path'
import template from 'gulp-template'
import rename from 'gulp-rename'
import _ from 'lodash'

const isNameValid = (name) => {
  // ensure camelCase name
  return name === _.camelCase(name)
}

const generate = (sourcePath, generatorPath) => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1)
  }
  const name = yargs.argv.name
  const parentPath = yargs.argv.parent || ''
  const destPath = path.join(generatorPath, parentPath, name)

  if (!isNameValid(name)) {
    throw new Error('name must be camelCase')
  }

  return gulp.src(sourcePath)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name)
    }))
    .pipe(gulp.dest(destPath))
}

const root = 'app'

const paths = {
  templates: {
    component: path.join(__dirname, 'component/**/*.**')
  },

  components: path.join(root, 'components')
}

gulp.task('component', () => {
  return generate(paths.templates.component, paths.components)
})
