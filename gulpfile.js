'use strict';

const path = require('path');
const gulp = require('gulp');
const env = require('gulp-env');
const mocha = require('gulp-mocha');
const exec = require('child_process').exec;
const sequence = require('gulp-sequence');


const runCommand = (command)=>{
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      //cb(err);
    });
    cb();
  }
};

gulp.task('build', (cb)=>{
    runCommand('cd client')(()=>{
        return runCommand('ng build')(cb)
    });
});
