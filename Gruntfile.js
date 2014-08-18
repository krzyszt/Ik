module.exports = function(grunt){
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     
     /**
         * JSHint
         *
         * Validate the source code files to ensure they follow our coding convention and
         * don"t contain any common errors.
         */
     jshint: {
        all:[
           "Gruntfile.js",
           "app/**/*.js"
           
        ],
        some: [
           "app/*.js"
        ]
     }
     
  }); 
  
  grunt.loadNpmTasks("grunt-contrib-jshint");
  
  grunt.registerTask("default",["jshint:all"]);
  
  grunt.registerTask("jshint-some",["jshint:some"]);
};