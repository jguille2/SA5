## buildSnapTranslations.js

Tool to build Snap! translation files

It's a nodejs script. Run "node buildSnapTranslations.js" to get help info.

written by Joan Guillén
This file is a contribution to Snap! comunity.
    
**This file is used to build Snap! translations**

  1. Building lang-en.js from a lang-xx.js file
    - Put lang-xx.js file in the script folder.
    - Be sure langFilesText.txt file is also in the script folder.
    - Run 'node buildSnapTranslations.js en xx'.
    - For sorting alphabeticaly, run 'node buildSnapTranslations.js en xx abc'.
    - Get lang-en.js in path_to_script/result/lang-en.js.

  2. Bulding all lang-xx.js files from lang-en.js (source) and keeping previous xx translations
    - Put lang-en.js file in the script folder. This is the strings translation source.
    - Be sure langFilesText.txt file is also in the script folder.
    - Put in the script folder all the lang-xx.js files where you want to keep previous translations.
    - Run 'node buildSnapTranslations.js all'.
    - Get all lang-xx.js files in path_to_script/result/.
