module.exports = function(grunt) {

    grunt.initConfig({        
        bower: {
            install: {
                options: {
                    targetDir: './lib',
                    layout: 'byType',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false
                  }
            }
        },
        watch: {
            bower: {
                files: ['**/*.*'],
                tasks: ['bower:install'],
                options: {
                  interrupt: true,
                }
            }              
        },
    });

    
    
    grunt.loadNpmTasks('grunt-bower-task');    
    grunt.registerTask('default', ['bower:install']);  
    
}