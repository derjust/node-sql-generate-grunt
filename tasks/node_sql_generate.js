/*
 * grunt-node-sql-generate
 * https://github.com/derjust/node-sql-generate-grunt
 *
 * Copyright (c) 2014 Sebastian Just
 * Licensed under the MIT license.
 */
'use strict';

var sqlGenerate = require('sql-generate');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('node_sql_generate', ' Model generation by table structure ', function () {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        dsn : ' postgres : //user:password@host:5432/database',
        dialect : 'pg',
        outputFile : 'tmp/table.js',
        indent : '\t',
        database : '',
        schema : '',
        camelize : false,
        eol : '\n',
        mode : '0644',
        encoding : 'utf8',
        prepend : '',
        append : '',
        modularize : false,
        omitComments : false,
        includeSchema : false,
      });

    sqlGenerate(options, function (err) {
      if (err) {
        grunt.log.writeln('error', err);
		done(false);
      } else {
        // Print a success message.
        grunt.log.writeln('File "' + options.outputFile + '" created.');
		done();
      }

    });
  });
};
