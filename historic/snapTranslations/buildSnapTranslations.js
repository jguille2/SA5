/*

    buildSnapTranslations.js

    Tool to build Snap! translation files

	It's a nodejs script. Run "node buildSnapTranslations.js" to get help info.

    written by Joan Guillén

    Copyright (C) 2016 by Joan Guillén

    This file is a contribution to Snap! comunity.

    It is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
// Run script without args to get help
if (!process.argv[2]) {
	console.log("\n\\\\\nThis file is used to build Snap! translations\n\\\\\n");
	console.log("1. Building lang-en.js from a lang-xx.js file\n");
	console.log("    -Put lang-xx.js file in the script folder.\n");
	console.log("    -Be sure langFilesText.txt file is also in the script folder.\n");
	console.log("    -Run 'node buildSnapTranslations.js en xx'.\n");
	console.log("    -For sorting alphabeticaly, runn 'node buildSnapTranslations.js en xx abc'.\n");
	console.log("    -Get lang-en.js in path_to_script/result/lang-en.js.\n");
	console.log("2. Bulding all lang-xx.js files from lang-en.js (source) and keeping previous xx translations\n");
	console.log("    -Put lang-en.js file in the script folder. This is the strings translation source.\n");
	console.log("    -Be sure langFilesText.txt file is also in the script folder.\n");
	console.log("    -Put in the script folder all the lang-xx.js files where you want to keep previous translations.\n");
	console.log("    -Run 'node buildSnapTranslations.js all'.\n");
	console.log("    -Get all lang-xx.js files in path_to_script/result/.\n");
} else {
// Run script with args
	// node-modules needed
	var file = require("fs");
	var vm = require('vm');
	// config params
	var resultFolder = "result";
	var langEn = {code: 'en', name: 'English'};
	var langs = [{code: 'ar', name: 'Arabic'}, {code:'bg', name:'Bulgarian'}, {code: 'bn', name: 'Bangla'}, {code: 'ca', name: 'Catalan'}, {code: 'cs', name: 'Czech'}, {code: 'de', name: 'German'}, {code: 'dk', name: 'Danish'}, {code: 'el', name: 'Greek'}, {code: 'eo', name: 'Esperanto'}, {code: 'es', name: 'Spanish'}, {code: 'et', name: 'Estonian'}, {code: 'fi', name: 'Finnish'}, {code: 'fr', name: 'French'}, {code: 'gl', name: 'Galician'}, {code: 'hr', name: 'Croatian'}, {code: 'hu', name: 'Hungarian'}, {code: 'ia', name: 'Interlingua'}, {code: 'id', name: 'Indonesian'}, {code: 'it', name: 'Italian'}, {code: 'ja', name: 'Japanese'}, {code: 'ja_HIRA', name: 'Japanese Hiragana'}, {code:'kn', name: 'Kannada'}, {code: 'ko', name: 'Korean'}, {code: 'ml', name: 'Malayalam'}, {code: 'nl', name: 'Dutch'}, {code: 'no', name: 'Norwegian'}, {code: 'pl', name: 'Polskie'}, {code: 'pt', name: 'Portuguese'}, {code: 'pt_BR', name: 'Brazilian Portuguese'}, {code: 'ro', name: 'Romanian'}, {code: 'ru', name: 'Russian'}, {code: 'si', name: 'Slovenian'}, {code: 'sv', name: 'Swedish'}, {code: 'ta', name: 'Tamil'}, {code: 'te', name: 'Telugu'}, {code: 'tr', name: 'Turkish'}, {code: 'zh_TW', name: 'Traditional Chinese'}, {code: 'zh_CN', name: 'Simplified Chinese'}];
	var header1 = "/*\n\n    ";
	var header2 = " translation for SNAP!\n\n";
	// Requirements: permissions to write into script folder and langFileText with headers-info code 
	try {
    	file.mkdirSync("./" + resultFolder);
    } catch(e) {
    	if ( e.code != 'EEXIST' ) {
			console.log("Result folder can't be created!");
			process.exit();
		}
    }
	try {
    	var langFilesText = file.readFileSync("langFilesText.txt", "UTF-8");
    } catch(e) {
    	console.log("Can't find required langFilesText.txt file in script folder!");
		process.exit();
    }
	// Reading args
	switch(process.argv[2]) {

		//case en - Building lang-en.js file from another lang-xx.js
    	case "en":
			if (!process.argv[3]) {
				console.log("Second code lang (source file) required!");
				process.exit();
			}
			var srcFile = "lang-" + process.argv[3] + ".js";
        	try {
				var transSrc = file.readFileSync(srcFile);
			} catch(e) {
				console.log(srcFile + " not founded");
				process.exit();
			}
			var fileOnlyName = "lang-en.js";
			var fileName = "./" + resultFolder +"/" + fileOnlyName;
			var langHeader = 'lang-' + langEn.code + '.js\n\n    ' + langEn.name;
			file.writeFileSync(fileName, header1 + langHeader + header2 + langFilesText);
			SnapTranslator = {};
			SnapTranslator.dict = {};
			vm.runInThisContext(transSrc);
			var transStr = ['','','',''];
			for (var strCode in SnapTranslator.dict[process.argv[3]]) {
				if (strCode == 'language_name') {
					transStr[0] = [strCode, SnapTranslator.dict[process.argv[3]][strCode]];
				} else if (strCode == 'language_translator') {
					transStr[1] = [strCode, SnapTranslator.dict[process.argv[3]][strCode]];
				} else if (strCode == 'translator_e-mail') {
					transStr[2] = [strCode, SnapTranslator.dict[process.argv[3]][strCode]];
				} else if (strCode == 'last_changed') {
					transStr[3] = [strCode, SnapTranslator.dict[process.argv[3]][strCode]];
				} else {
			    	transStr.push([strCode, SnapTranslator.dict[process.argv[3]][strCode]]);
				}
			}
			if (process.argv[4] && process.argv[4] == 'abc') {
				var transHeadStr = transStr.splice(0,4);
				transStr.sort();
				transStr = transHeadStr.concat(transStr);
			}
			
			file.appendFileSync(fileName, "SnapTranslator.dict.en = {\n");
			file.appendFileSync(fileName, "\n    // Translation meta info - appering in the language menu\n\n");
			for (i=0;i<transStr.length;i++) {
				if (i == 4) {
					file.appendFileSync(fileName, "\n    //\n\n");
				}
				file.appendFileSync(fileName,"    '" + JSON.stringify(transStr[i][0]).replace(/'/g,"\\'").substring(1).slice(0,-1) + "': '" + JSON.stringify(transStr[i][0]).replace(/'/g,"\\'").substring(1).slice(0,-1) + "',\n");
			}
			file.appendFileSync(fileName,"};");
        	break;

		// case all - Build all language files from lang-en.js template
    	case "all":
			try {
				var transSrc = file.readFileSync("lang-en.js");
			} catch(e) {
				console.log("lang-en.js is required and has not founded in script folder");
				process.exit();
			}
			SnapTranslator = {};
			SnapTranslator.dict = {};
			vm.runInThisContext(transSrc);
			var arrayStr = ['','','',''];
			for (var strCode in SnapTranslator.dict.en) {
				if (strCode == 'language_name') {
					arrayStr[0] = [strCode, SnapTranslator.dict.en[strCode]];
				} else if (strCode == 'language_translator') {
					arrayStr[1] = [strCode, SnapTranslator.dict.en[strCode]];
				} else if (strCode == 'translator_e-mail') {
					arrayStr[2] = [strCode, SnapTranslator.dict.en[strCode]];
				} else if (strCode == 'last_changed') {
					arrayStr[3] = [strCode, SnapTranslator.dict.en[strCode]];
				} else {
			    	arrayStr.push([strCode, SnapTranslator.dict.en[strCode]]);
				}
			}
        	for (i=0;i<langs.length;i++) {
				var fileOnlyName = "lang-" + langs[i].code + ".js";
				var fileName = "./" + resultFolder +"/" + fileOnlyName;
				var langHeader = 'lang-' + langs[i].code + '.js\n\n    ' + langs[i].name;
				file.writeFileSync(fileName, header1 + langHeader + header2 + langFilesText);
				file.appendFileSync(fileName,"SnapTranslator.dict." + langs[i].code + " = {\n");
				file.appendFileSync(fileName, "\n    // Translation meta info - appering in the language menu\n\n");
				if (file.existsSync(fileOnlyName)) {
					var transOld = file.readFileSync(fileOnlyName);
					vm.runInThisContext(transOld);
					for (j=0;j<arrayStr.length;j++) {
						if (j == 4) {
							file.appendFileSync(fileName, "\n    //\n\n");
						}
						if (SnapTranslator.dict[langs[i]['code']][arrayStr[j][0]]) {
							file.appendFileSync(fileName,"    '" + JSON.stringify(arrayStr[j][0]).replace(/'/g,"\\'").substring(1).slice(0,-1) + "': '" + JSON.stringify(SnapTranslator.dict[langs[i].code][arrayStr[j][0]]).replace(/'/g,"\\'").substring(1).slice(0,-1) + "',\n");
						} else {
							file.appendFileSync(fileName,"    '" + JSON.stringify(arrayStr[j][0]).replace(/'/g,"\\'").substring(1).slice(0,-1) + "': '" + JSON.stringify(arrayStr[j][1]).replace(/'/g,"\\'").substring(1).slice(0,-1) + "',\n");
						}
					}
				} else {
					for (j=0;j<arrayStr.length;j++) {
						if (j == 4) {
							file.appendFileSync(fileName, "\n    //\n\n");
						}
						file.appendFileSync(fileName,"    '" + JSON.stringify(arrayStr[j][0]).replace(/'/g,"\\'").substring(1).slice(0,-1) + "': '" + JSON.stringify(arrayStr[j][1]).replace(/'/g,"\\'").substring(1).slice(0,-1) + "',\n");
					}
				}
				file.appendFileSync(fileName,"};");
			}
        	break;
    	default:
        	console.log(process.argv[2] + "is not a valid argument");
			process.exit();
	}
	console.log("\nDone!");
}

