# Building SA5 app

## node_modules

In github repo, we have **node_modules_gnu32**. Just rename the right folder to **node_modules**

Building process:

  * npm installed
  *     sudo npm install -g node-pre-gyp
  *     sudo npm install -g nw-gyp
  * Into sa5 folder...
  *     npm install nw //It takes a while
  * Note nw.js version. Last documented is 0.12.3
  *     npm install serialport --runtime=node-webkit --target=0.12.3 //Setup nw version. Tested with 2.0.6 version
  *     npm install firmata --runtime=node-webkit --target=0.12.3 //Setup nw version. Tested with 0.8.1 version
  * Hack serialport like https://github.com/voodootikigod/node-serialport/issues/664
  * Then we have node_modules folder with nw, serialport and firmata
  

## Scripts, img and launcher

  * We have **bin** folder with scripts, html, images and package.json
  * and **SA5** to launch the app. Make SA5 executable
      chmod +x SA5.sh
