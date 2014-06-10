# grunt-node-sql-generate

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install node-sql-generate-grunt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('node_sql_generate');
```

## The "node_sql_generate" task

### Overview
In your project's Gruntfile, add a section named `node_sql_generate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    node_sql_generate : {
      default_options : {
        options : {
          dsn : 'mysql://mysql:mysql@localhost:3306/test',
          dialect : 'mysql',
          outputFile : 'tmp/table.js'
        }
      },
    },
});
```

### Options

#### options.dsn
Type: `String``

The DSN to use to connect to the database

#### options.dialect
Type: `String`

Either "mssql", "mysql" or "pg"

#### options.outputFile
Type: `String`

Filename to write to, or the number 1 to write to stdout

### Usage Examples

Please look in the Gruntfile.js of this project itself and check the possible configuration flags at 
https://github.com/tmont/node-sql-generate#user-content---help


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
