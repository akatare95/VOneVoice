module.exports = function(grunt) {
	var isWin = /^win/.test(process.platform);
	var uniqueRandomNum = ((new Date()).valueOf().toString()) + (Math.floor((Math.random() * 1000000) + 1).toString());
	//We will add the missing test configuration later when we implement unit tests for this project
	//Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		trimtrailingspaces: {
			options: {
				filter: 'isFile',
				encoding: 'utf8',
				failIfTrimmed: false
			},
			jsFiles: {
				src: ['config/**/*.js', 'controller/**/*.js', 'factory/**/*.js', 'directives/**/*.js', 'services/**/*.js']
			},
			partials: {
				src: ['partials/**/*.html']
			},
			cssFiles: {
				src: ['assets/scss/**/*.scss']
			}
		},
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'nested',
				sourceComments: true
			},
			dist: {
				files: {
					'temp/assets/css/scss.all.css': 'assets/scss/main.scss'
				}
			}
		},
		ngtemplates: {
			//The "common" key should match the application module name
			volte: {
				src: 'partials/**/*.html',
				dest: 'temp/assets/js/volte-templates.js',
				options: {
					htmlmin: {
						collapseBooleanAttributes: false,
						collapseWhitespace: false,
						removeAttributeQuotes: false,
						removeComments: true, // Only if you don't use comment directives!
						removeEmptyAttributes: false,
						removeRedundantAttributes: false,
						removeScriptTypeAttributes: false,
						removeStyleLinkTypeAttributes: false
					}
				}
			}
		},
		concat: {
			options: {
				separator: '\n'
			},
			jsFiles: {
				src: [
					'assets/js/plugins/underscore.min.js',
					'assets/js/plugins/bowser.js',
					'assets/js/plugins/d3.min.js',
					'assets/js/angular/angular.1.3.14.min.js',
					'assets/js/angular/ui-router.js',
					'assets/js/angular/ngDialog.min.js',
					'assets/js/angular/moment.min.js',
					'assets/js/angular/angular-animate.js',
					'assets/js/angular/ui-bootstrap-tpls-0.13.4.js',
					'assets/js/angular/ng-ftscroller.js',
					'assets/js/angular/uiBreadcrumbs.js',
					'assets/js/angular/angular-idle.min.js',
					'assets/js/angular/ng-upload.min.js',
					'assets/js/angular/angular-drag-and-drop-lists.min.js',
					'assets/js/angular/angular-ui-utils.min.js',
					'assets/js/angular/angular-tooltips.min.js',
					    'assets/js/angular/sitecatalyst/1.0/hbx_custom.js',
					    'assets/js/angular/sitecatalyst/1.0/hbx_default_header.js',
                        'assets/js/angular/sitecatalyst/1.0/sc_custom.js',
                        'assets/js/angular/sitecatalyst/1.0/visitorAPI.js',
                        'assets/js/angular/sitecatalyst/1.0/s_code.js',
                        'assets/js/angular/sitecatalyst/1.0/sc_default.js',
                        'assets/js/angular/sitecatalyst/1.0/sc_pagecode.js',
                        'assets/js/angular/sitecatalyst/1.0/analytics.js',
					'config/app.js',
					'config/router.js',
					'config/config.js',
					'config/auth.js',
					'<%= ngtemplates.volte.dest %>',
					'factory/*.js',
					'services/*.js',
					'services/**/*.js',
					'directives/**/*.js',
					'directives/*.js',
					'controller/**/*.js'
				],
				dest: 'build/volte/assets/js/<%= pkg.namelower %>.js'
			},
			cssFiles: {
				src: [
					'assets/css/angular-tooltips.css',
					'assets/css/bootstrap.min.css',
					'assets/css/ngdialog/**',
					'temp/assets/css/sprites.css',
					'temp/assets/css/scss.all.css',
					'assets/css/styles.css'
				], //Add my styles.css file at the end
				dest: 'build/volte/assets/css/<%= pkg.namelower %>.css'
			}
		},
		clean: {
			build: {
				src: ["build", "temp", "assets/images/spritesheet*.png"]
			}
		},
		copy: {
			partials: {
				files: [{
					//includes files within path and its sub-directories
					expand: true,
					src: [
						'partials/**'
					],
					dest: 'build/volte/'
				}]
			},
			images: {
				files: [{
					//includes files within path and its sub-directories
					expand: true,
					src: [
						'assets/images/**'
					],
					dest: 'build/volte/'
				}]
			},
			otherFiles: {
				files: [{
					expand: true,
					src: [
						'index.html',
						'server/**',
						'assets/fonts/**',
						'assets/js/modernizr/**',
						'assets/js/plugins/ie9.js',
						'assets/js/plugins/apmbrtm_b2b_onetalk.js'
					],
					dest: 'build/volte/'
				}]
			}
		},
		sprite: {
			all: {
				src: 'assets/sprite-images/**/*.png',
				dest: 'assets/images/spritesheet-' + uniqueRandomNum + '.png',
				imgPath: '../images/spritesheet-' + uniqueRandomNum + '.png',
				destCss: 'temp/assets/css/sprites.css'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: [{
					'build/volte/assets/js/<%= pkg.namelower %>.min.js': ['build/volte/assets/js/<%= pkg.namelower %>.js']
				}]
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1,
				restructuring: false,
				aggressiveMerging: false
			},
			target: {
				files: {
					'build/volte/assets/css/<%= pkg.namelower %>.min.css': ['build/volte/assets/css/<%= pkg.namelower %>.css']
				}
			}
		},
		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			scripts: {
				files: ['config/*.js', 'factory/*.js', 'services/*.js', 'services/**/*.js', 'directives/**/*.js', 'directives/*.js', 'controller/**/*.js'],
				tasks: ['trimtrailingspaces:jsFiles', 'concat:jsFiles', 'beep:2']
			},
			css: {
				files: ['assets/scss/**/*.scss', 'assets/css/**/*.css'],
				tasks: ['trimtrailingspaces:cssFiles', 'sass', 'concat:cssFiles', 'beep:2']
			},
			sprites: {
				files: ['assets/sprite-images/**/*.png'],
				tasks: ['sprite', 'concat:cssFiles', 'copy:images', 'beep:2']
			},
			partials: {
				files: ['partials/**/*.html'],
				tasks: ['trimtrailingspaces:partials', 'copy:partials', 'beep:2']
			},
			otherFiles: {
				files: ['index.html', 'assets/fonts/**', 'server/**', 'assets/js/modernizr/**', 'assets/js/plugins/ie9.js','assets/js/plugins/apmbrtm_b2b_onetalk.js'],
				tasks: ['copy:otherFiles', 'beep:2']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-trimtrailingspaces');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-sass');
	if (isWin) {
		//Default task(s).
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-beep');

		grunt.registerTask('default', [
			'trimtrailingspaces',
			'clean',
			//'ngtemplates',
			'sprite',
			'sass',
			'concat',
			'copy'
		]);
	} else {
		//Default task(s).
		grunt.registerTask('default', [
			'clean',
			'ngtemplates',
			'sprite',
			'sass',
			'concat',
			'uglify',
			'cssmin',
			'copy'
		]);
	}
};
