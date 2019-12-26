# Hillel_graduation_project
------------------------------------
    Gulp manual

1. First of all, to work with gulp you need it to be installed globally on your pc. 
 To do this, run this command in console (cmd/powershell/bash): npm install --global gulp-cli.
 If you dont have npm, install node.js on your pc, here is a link from where to download: https://nodejs.org/en/
2. After this, open folder with our project and run command: npm i. It will install all required packages.
3. Finally, enter command 'gulp' in console. That is basically all. After this command, your project will open in
 browser, and after any changes in html, scss and js files gulp will automatically rebuild project and refresh browser.
 
If you want to create new js file (module) and connect in to the project, you need:
  1. Open gulpfile.js.
  2. Find 'js' task in gulp (line 53).
  3. Add source of required js file (separated by commas) inside gulp.src in this task.
 
If you want to add new library and you need to connect css and js files from this library to the project, you need:
  1. Open gulpfile.js
  2. Find 'css-libs' task in gulp (line 34) and add source of required css files (separated by commas) inside gulp.src
  in this task.
  3. Same with js files. 'js-libs' task located on line 43.
  4. IMPORTANT: connect js and css files in correct order, it is the same as if you are connecting them in your html.
 
About gulp build files:
 1. In folder assets/js/dist we have main.min.js with all js code, which is written by us and
 libs.min.js with all js libs code.
 2. In folder assets/scss/vendors we have _libs.scss file with all styles from libraries.
 3. And, finally, in assets/css we have main.min.css with all styles for the projects.
 4. IMPORTANT: dont try to change all this files, they will be automatically be overwritten by gulp.
 5. To the project we connect only main.min.css, libs.min.js and main.min.js.
