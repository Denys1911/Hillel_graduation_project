# Hillel_graduation_project
------------------------------------

    Gulp manual:

  1. First of all, to work with gulp you need it to be installed globally on your pc. 
     To do this, run this command in console (cmd/powershell/bash): npm install --global gulp-cli.
     If you dont have npm, install node.js on your pc, here is a link from where to download: https://nodejs.org/en/
  2. After this, open folder with our project and run command: npm i. It will install all required packages.
  3. Finally, enter command 'gulp' in console. That is basically all. After this command, your project will open in
     browser, and after any changes in html, scss and js files gulp will automatically rebuild project and refresh
     browser.
  4. To stop gulp, run command CTRL + C in console and after that answer 'Y'.
  5. To note, that you must use gulp while developing because otherwise, you won't see changes. We connect files to
   html from 'build', not from 'assets'.
 
    If you want to create new js file (module) and connect it to the project, you need:
  1. Open gulpfile.js.
  2. Find 'js' task in gulp (line 34).
  3. Add source of required js file (separated by commas) inside gulp.src in this task.
 
    About project structure:
 1. In folder 'build' we collect all minified css and js, which are connected directly to html
 2. Js and css from folder 'assets' are for developing, they WON'T be connected to html.
 3. All required libraries are connected directly to html from node_modules.
 4. IMPORTANT: don't try to change files from 'build' folder, they will be automatically overwritten by gulp.
 5. IMPORTANT: if you connect images, fonts, etc in scss, remember, you need to provide correct sources to them, 
 because the final css file, which will be connected to html, is situated in 'build' folder. Sources must begin
  with: 
 '../../assets/.......'