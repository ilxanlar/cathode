module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        stage: 0
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'lib'
        }]
      }
    },
    browserify: {
      examples: {
        files: [{
          dest: 'examples/js/build.js',
          src: ['src/**/*.js', 'examples/js/main.js']
        }],
        options: {
          transform: [
            [
              'babelify',
              {
                stage: 0,
                only: /src|examples/
              }
            ]
          ]
        }
      }
    },
    eslint: {
      target: ['src/**/*.js']
    },
    uglify: {
      examples: {
        files: {
          'examples/js/build.min.js': ['examples/js/build.js']
        }
      }
    },
    sass: {
      dest: {
        options: {
          style: 'expanded'
        },
        files: {
          'asset/style.css': 'style/style.scss'
        }
      }
    },
    autoprefixer: {
      options: {},
      style: {
        options: {
          // diff: 'style/css/diff'
        },
        src: 'asset/style.css',
        dest: 'asset/style.css'
      }
    },
    webfont: {
      icons: {
        src: 'src/svg/*.svg',
        dest: 'asset/',
        options: {
          hashes: false,
          types: ['eot', 'woff2', 'woff', 'ttf'],
          fontFilename: 'cathode-icons',
          font: 'cathode-icons',
          templateOptions: {
            baseClass: 'cathode-icon',
            classPrefix: 'cathode-icon-'
          },
          codepoints: {
            // iconName: 0xE001
          }
        }
      }
    },
    concat: {
      dist: {
        src: [
          'asset/style.css',
          'asset/cathode-icons.css'
        ],
        dest: 'asset/style.css'
      }
    },
    watch: {
      example: {
        files: ['./examples/js/main.js'],
        tasks: ['examples']
      },
      main: {
        files: ['./src/**/*.js'],
        tasks: ['build', 'examples']
      },
      style: {
        files: ['./style/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'concat']
      },
      icons: {
        files: ['./src/svg/*.svg'],
        tasks: ['webfont', 'concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('examples', ['browserify:examples', 'uglify:examples']);
  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('build', ['babel', 'webfont', 'sass', 'autoprefixer', 'concat']);
  grunt.registerTask('default', ['test', 'build']);
};
