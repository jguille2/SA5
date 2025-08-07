/*

    lang-en.js

    English translation for SNAP!

    written by Jens Mönig

    Copyright (C) 2016 by Jens Mönig

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
*/

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

/*global SnapTranslator*/

SnapTranslator.dict.en = {

    // Translation meta info - appering in the language menu

    'language_name': 'language_name',
    'language_translator': 'language_translator',
    'translator_e-mail': 'translator_e-mail',
    'last_changed': 'last_changed',

    //

    ' or before': ' or before',
    '%att of %spr': '%att of %spr',
    '%b and %b': '%b and %b',
    '%b or %b': '%b or %b',
    '%fun of %n': '%fun of %n',
    '%l contains %s': '%l contains %s',
    '%n mod %n': '%n mod %n',
    '%s in front of %l': '%s in front of %l',
    '%txtfun of %s': '%txtfun of %s',
    '\'\ndoes not exist in this context': '\'\ndoes not exist in this context',
    '(-90) left': '(-90) left',
    '(0) up': '(0) up',
    '(180) down': '(180) down',
    '(90) right': '(90) right',
    '(empty)': '(empty)',
    '(in a new window)': '(in a new window)',
    '(temporary)': '(temporary)',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'About Snap': 'About Snap',
    'About...': 'About...',
    'Account created.': 'Account created.',
    'An e-mail with your password\nhas been sent to the address provided': 'An e-mail with your password\nhas been sent to the address provided',
    'Animations': 'Animations',
    'Any\n(unevaluated)': 'Any\n(unevaluated)',
    'Any type': 'Any type',
    'Apply': 'Apply',
    'April': 'April',
    'Are you sure you want to delete': 'Are you sure you want to delete',
    'Are you sure you want to publish': 'Are you sure you want to publish',
    'Are you sure you want to unpublish': 'Are you sure you want to unpublish',
    'August': 'August',
    'Back...': 'Back...',
    'Backgrounds': 'Backgrounds',
    'Birth date:': 'Birth date:',
    'Block Editor': 'Block Editor',
    'Blocks': 'Blocks',
    'Blurred shadows': 'Blurred shadows',
    'Boolean\n(unevaluated)': 'Boolean\n(unevaluated)',
    'Boolean (T/F)': 'Boolean (T/F)',
    'Boolean': 'Boolean',
    'Browser': 'Browser',
    'Brush size': 'Brush size',
    'Cache Inputs': 'Cache Inputs',
    'Cancel': 'Cancel',
    'Change Password': 'Change Password',
    'Change Password...': 'Change Password...',
    'Change block': 'Change block',
    'Clicking sound': 'Clicking sound',
    'Cloud': 'Cloud',
    'Code mapping': 'Code mapping',
    'Codification support': 'Codification support',
    'Command\n(C-shape)': 'Command\n(C-shape)',
    'Command\n(inline)': 'Command\n(inline)',
    'Command': 'Command',
    'Constrain proportions of shapes?\n(you can also hold shift)': 'Constrain proportions of shapes?\n(you can also hold shift)',
    'Contents': 'Contents',
    'Contributors': 'Contributors',
    'Control': 'Control',
    'Costume Editor': 'Costume Editor',
    'Costumes': 'Costumes',
    'Create input name': 'Create input name',
    'Credits...': 'Credits...',
    'December': 'December',
    'Default Value:': 'Default Value:',
    'Default': 'Default',
    'Delete Custom Block': 'Delete Custom Block',
    'Delete Project': 'Delete Project',
    'Delete a variable': 'Delete a variable',
    'Delete': 'Delete',
    'Download source': 'Download source',
    'Dragging threshold...': 'Dragging threshold...',
    'Dynamic input labels': 'Dynamic input labels',
    'E-mail address of parent or guardian:': 'E-mail address of parent or guardian:',
    'E-mail address:': 'E-mail address:',
    'ERROR: INVALID PASSWORD': 'ERROR: INVALID PASSWORD',
    'EXPERIMENTAL! check to enable\n live custom control structures': 'EXPERIMENTAL! check to enable\n live custom control structures',
    'EXPERIMENTAL! uncheck to disable live\ncustom control structures': 'EXPERIMENTAL! uncheck to disable live\ncustom control structures',
    'Edit input name': 'Edit input name',
    'Edit label fragment': 'Edit label fragment',
    'Empty': 'Empty',
    'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).': 'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).',
    'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.': 'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.',
    'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.': 'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.',
    'Enter one option per line.Optionally use \"=\" as key/value delimiter\ne.g.\n   the answer=42': 'Enter one option per line.Optionally use \"=\" as key/value delimiter\ne.g.\n   the answer=42',
    'Eraser tool': 'Eraser tool',
    'Examples': 'Examples',
    'Export Project As...': 'Export Project As...',
    'Export all scripts as pic...': 'Export all scripts as pic...',
    'Export blocks': 'Export blocks',
    'Export blocks...': 'Export blocks...',
    'Export project as plain text...': 'Export project as plain text...',
    'Export project...': 'Export project...',
    'Export summary with drop-shadows...': 'Export summary with drop-shadows...',
    'Export summary...': 'Export summary...',
    'February': 'February',
    'Fetching project\nfrom the cloud...': 'Fetching project\nfrom the cloud...',
    'Fill a region': 'Fill a region',
    'Filled Ellipse\n(shift: circle)': 'Filled Ellipse\n(shift: circle)',
    'Filled Rectangle\n(shift: square)': 'Filled Rectangle\n(shift: square)',
    'First-Class Sprites': 'First-Class Sprites',
    'Flat design': 'Flat design',
    'Flat line ends': 'Flat line ends',
    'For all Sprites': 'For all Sprites',
    'Header mapping': 'Header mapping',
    'Hello!': 'Hello!',
    'Help': 'Help',
    'Hmm...': 'Hmm...',
    'I have read and agree\nto the Terms of Service': 'I have read and agree\nto the Terms of Service',
    'Import blocks': 'Import blocks',
    'Import library': 'Import library',
    'Import sound': 'Import sound',
    'Import tools': 'Import tools',
    'Import': 'Import',
    'Import...': 'Import...',
    'Inheritance support': 'Inheritance support',
    'Input Names:': 'Input Names:',
    'Input Slot Options': 'Input Slot Options',
    'Input name': 'Input name',
    'Input sliders': 'Input sliders',
    'January': 'January',
    'JavaScript function ( %mult%s ) { %code }': 'JavaScript function ( %mult%s ) { %code }',
    'July': 'July',
    'June': 'June',
    'Keyboard Editing': 'Keyboard Editing',
    'Kind of': 'Kind of',
    'Language...': 'Language...',
    'Libraries...': 'Libraries...',
    'License': 'License',
    'License...': 'License...',
    'Line tool\n(shift: vertical/horizontal)': 'Line tool\n(shift: vertical/horizontal)',
    'List': 'List',
    'Lists': 'Lists',
    'Live coding support': 'Live coding support',
    'Login...': 'Login...',
    'Logout': 'Logout',
    'Long form input dialog': 'Long form input dialog',
    'Looks': 'Looks',
    'Make a block': 'Make a block',
    'Make a variable': 'Make a variable',
    'March': 'March',
    'May': 'May',
    'Message name': 'Message name',
    'Modules...': 'Modules...',
    'Motion': 'Motion',
    'Multiple inputs (value is list of inputs)': 'Multiple inputs (value is list of inputs)',
    'Nested auto-wrapping': 'Nested auto-wrapping',
    'New Project': 'New Project',
    'New password:': 'New password:',
    'New': 'New',
    'No': 'No',
    'November': 'November',
    'Number': 'Number',
    'OK': 'OK',
    'Object': 'Object',
    'October': 'October',
    'Ok': 'Ok',
    'Old password:': 'Old password:',
    'Open un Project': 'Open un Project',
    'Open': 'Open',
    'Open...': 'Open...',
    'Opening project...': 'Opening project...',
    'Operators': 'Operators',
    'Other': 'Other',
    'Paint Editor': 'Paint Editor',
    'Paint a new costume': 'Paint a new costume',
    'Paintbrush tool\n(free draw)': 'Paintbrush tool\n(free draw)',
    'Part of': 'Part of',
    'Parts': 'Parts',
    'Password:': 'Password:',
    'Pen': 'Pen',
    'Persist linked sublist IDs': 'Persist linked sublist IDs',
    'Pipette tool\n(pick a color anywhere)': 'Pipette tool\n(pick a color anywhere)',
    'Plain prototype labels': 'Plain prototype labels',
    'Play sound': 'Play sound',
    'Play': 'Play',
    'Predicate': 'Predicate',
    'Prefer empty slot drops': 'Prefer empty slot drops',
    'Prefer smooth animations': 'Prefer smooth animations',
    'Privacy...': 'Privacy...',
    'Project Notes': 'Project Notes',
    'Project URLs': 'Project URLs',
    'Project notes...': 'Project notes...',
    'Rasterize SVGs': 'Rasterize SVGs',
    'Reference manual': 'Reference manual',
    'Remove unused blocks': 'Remove unused blocks',
    'Repeat new password:': 'Repeat new password:',
    'Replace the current project with a new one?': 'Replace the current project with a new one?',
    'Reporter': 'Reporter',
    'Reset Password...': 'Reset Password...',
    'Reset password': 'Reset password',
    'Retina display support': 'Retina display support',
    'SVG costumes are\nnot yet fully supported\nin every browser': 'SVG costumes are\nnot yet fully supported\nin every browser',
    'Save As...': 'Save As...',
    'Save Project As...': 'Save Project As...',
    'Save Project': 'Save Project',
    'Save to disk': 'Save to disk',
    'Save': 'Save',
    'Saved!': 'Saved!',
    'Saving project\nto the cloud...': 'Saving project\nto the cloud...',
    'Script variable name': 'Script variable name',
    'Scripts': 'Scripts',
    'Select a costume from the media library': 'Select a costume from the media library',
    'Select a sound from the media library': 'Select a sound from the media library',
    'Select categories of additional blocks to add to this project.': 'Select categories of additional blocks to add to this project.',
    'Sensing': 'Sensing',
    'September': 'September',
    'Service:': 'Service:',
    'Set the rotation center': 'Set the rotation center',
    'Share Project': 'Share Project',
    'Share': 'Share',
    'Sign in': 'Sign in',
    'Sign up': 'Sign up',
    'Signup': 'Signup',
    'Signup...': 'Signup...',
    'Single input.': 'Single input.',
    'Slider maximum value': 'Slider maximum value',
    'Slider minimum value': 'Slider minimum value',
    'Snap! website': 'Snap! website',
    'Snap!Cloud': 'Snap!Cloud',
    'Sound': 'Sound',
    'Sounds': 'Sounds',
    'Sprite Nesting': 'Sprite Nesting',
    'Sprite': 'Sprite',
    'Stage height': 'Stage height',
    'Stage selected:\nno motion primitives': 'Stage selected:\nno motion primitives',
    'Stage size': 'Stage size',
    'Stage size...': 'Stage size...',
    'Stage width': 'Stage width',
    'Stage': 'Stage',
    'Stop sound': 'Stop sound',
    'Stop': 'Stop',
    'Stroked Ellipse\n(shift: circle)': 'Stroked Ellipse\n(shift: circle)',
    'Stroked Rectangle\n(shift: square)': 'Stroked Rectangle\n(shift: square)',
    'Switch back to user mode': 'Switch back to user mode',
    'Switch to dev mode': 'Switch to dev mode',
    'Table lines': 'Table lines',
    'Table support': 'Table support',
    'Table view': 'Table view',
    'Terms of Service...': 'Terms of Service...',
    'Text': 'Text',
    'Thread safe scripts': 'Thread safe scripts',
    'Title text': 'Title text',
    'Translations': 'Translations',
    'Translators...': 'Translators...',
    'Turbo mode': 'Turbo mode',
    'Turtle': 'Turtle',
    'Unshare Project': 'Unshare Project',
    'Unshare': 'Unshare',
    'Untitled': 'Untitled',
    'Unused blocks...': 'Unused blocks...',
    'Updating\nproject list...': 'Updating\nproject list...',
    'Upvar - make internal variable visible to caller': 'Upvar - make internal variable visible to caller',
    'User name must be four\ncharacters or longer': 'User name must be four\ncharacters or longer',
    'User name:': 'User name:',
    'Variable name': 'Variable name',
    'Variables': 'Variables',
    'Virtual keyboard': 'Virtual keyboard',
    'Visible stepping': 'Visible stepping',
    'Yes': 'Yes',
    'You are not logged in': 'You are not logged in',
    'Zebra coloring': 'Zebra coloring',
    'Zoom blocks': 'Zoom blocks',
    'Zoom blocks...': 'Zoom blocks...',
    'a variable of name \'': 'a variable of name \'',
    'a': 'a',
    'abs': 'abs',
    'acos': 'acos',
    'add %s to %l': 'add %s to %l',
    'add a new Turtle sprite': 'add a new Turtle sprite',
    'add a new sprite': 'add a new sprite',
    'add comment here...': 'add comment here...',
    'add comment': 'add comment',
    'alert %mult%s': 'alert %mult%s',
    'all but first of %l': 'all but first of %l',
    'all but this script': 'all but this script',
    'all': 'all',
    'anchor': 'anchor',
    'answer': 'answer',
    'any key': 'any key',
    'any message': 'any message',
    'any': 'any',
    'arrange scripts\nvertically': 'arrange scripts\nvertically',
    'arrowDown': 'arrowDown',
    'arrowDownOutline': 'arrowDownOutline',
    'arrowLeft': 'arrowLeft',
    'arrowLeftOutline': 'arrowLeftOutline',
    'arrowRight': 'arrowRight',
    'arrowRightOutline': 'arrowRightOutline',
    'arrowUp': 'arrowUp',
    'arrowUpOutline': 'arrowUpOutline',
    'asin': 'asin',
    'ask %s and wait': 'ask %s and wait',
    'atan': 'atan',
    'b': 'b',
    'big (2x)': 'big (2x)',
    'block deletion dialog text': 'block deletion dialog text',
    'block variables': 'block variables',
    'block variables...': 'block variables...',
    'blocks': 'blocks',
    'brightness': 'brightness',
    'broadcast %msg and wait': 'broadcast %msg and wait',
    'broadcast %msg': 'broadcast %msg',
    'brush': 'brush',
    'build': 'build',
    'c': 'c',
    'call %cmdRing w/continuation': 'call %cmdRing w/continuation',
    'call %repRing %inputs': 'call %repRing %inputs',
    'can rotate': 'can rotate',
    'ceiling': 'ceiling',
    'center x': 'center x',
    'center y': 'center y',
    'change %eff effect by %n': 'change %eff effect by %n',
    'change %var by %n': 'change %var by %n',
    'change pen color by %n': 'change pen color by %n',
    'change pen shade by %n': 'change pen shade by %n',
    'change pen size by %n': 'change pen size by %n',
    'change size by %n': 'change size by %n',
    'change tempo by %n': 'change tempo by %n',
    'change x by %n': 'change x by %n',
    'change y by %n': 'change y by %n',
    'check for alternative\nGUI design': 'check for alternative\nGUI design',
    'check for block\nto text mapping features': 'check for block\nto text mapping features',
    'check for flat ends of lines': 'check for flat ends of lines',
    'check for higher contrast\ntable views': 'check for higher contrast\ntable views',
    'check for higher resolution,\nuses more computing resources': 'check for higher resolution,\nuses more computing resources',
    'check for multi-column\nlist view support': 'check for multi-column\nlist view support',
    'check for smooth, predictable\nanimations across computers': 'check for smooth, predictable\nanimations across computers',
    'check for sprite\ninheritance features': 'check for sprite\ninheritance features',
    'check to always show slot\ntypes in the input dialog': 'check to always show slot\ntypes in the input dialog',
    'check to cache inputs\nboosts recursion': 'check to cache inputs\nboosts recursion',
    'check to disallow\nscript reentrance': 'check to disallow\nscript reentrance',
    'check to enable\nIDE animations': 'check to enable\nIDE animations',
    'check to enable\ninput sliders for\nentry fields': 'check to enable\ninput sliders for\nentry fields',
    'check to enable\nkeyboard editing support': 'check to enable\nkeyboard editing support',
    'check to enable\nproject data in URLs': 'check to enable\nproject data in URLs',
    'check to enable\nsaving linked sublist identities': 'check to enable\nsaving linked sublist identities',
    'check to enable\nsprite composition': 'check to enable\nsprite composition',
    'check to enable\nvirtual keyboard support\nfor mobile devices': 'check to enable\nvirtual keyboard support\nfor mobile devices',
    'check to enable alternating\ncolors for nested blocks': 'check to enable alternating\ncolors for nested blocks',
    'check to enable auto-wrapping\ninside nested block stacks': 'check to enable auto-wrapping\ninside nested block stacks',
    'check to enable dynamic\nlabels for variadic inputs': 'check to enable dynamic\nlabels for variadic inputs',
    'check to enable support\n for first-class sprite': 'check to enable support\n for first-class sprite',
    'check to hide (+) symbols\nin block prototype labels': 'check to hide (+) symbols\nin block prototype labels',
    'check to prevent contents\nfrom being saved': 'check to prevent contents\nfrom being saved',
    'check to prioritize\nscript execution': 'check to prioritize\nscript execution',
    'check to rasterize\nSVGs on import': 'check to rasterize\nSVGs on import',
    'check to turn\nblock clicking\nsound on': 'check to turn\nblock clicking\nsound on',
    'check to turn on\n visible stepping (slow)': 'check to turn on\n visible stepping (slow)',
    'check to use blurred drop\nshadows and highlights': 'check to use blurred drop\nshadows and highlights',
    'children': 'children',
    'circle': 'circle',
    'circleSolid': 'circleSolid',
    'clean up': 'clean up',
    'clear graphic effects': 'clear graphic effects',
    'clear': 'clear',
    'click or drag crosshairs to move the rotation center': 'click or drag crosshairs to move the rotation center',
    'clicked': 'clicked',
    'clones': 'clones',
    'cloud': 'cloud',
    'cloudGradient': 'cloudGradient',
    'cloudOutline': 'cloudOutline',
    'code mapping...': 'code mapping...',
    'code of %cmdRing': 'code of %cmdRing',
    'code': 'code',
    'collection': 'collection',
    'color %clr is touching %clr ?': 'color %clr is touching %clr ?',
    'color': 'color',
    'comic': 'comic',
    'command': 'command',
    'comment pic...': 'comment pic...',
    'confetti': 'confetti',
    'console log %mult%s': 'console log %mult%s',
    'cos': 'cos',
    'costume #': 'costume #',
    'costume name': 'costume name',
    'costumes tab help': 'costumes tab help',
    'could not connect to:': 'could not connect to:',
    'cr': 'cr',
    'create a clone of %cln': 'create a clone of %cln',
    'crosshairs': 'crosshairs',
    'current %dates': 'current %dates',
    'current module versions:': 'current module versions:',
    'current parent': 'current parent',
    'd': 'd',
    'dangling?': 'dangling?',
    'date': 'date',
    'day of week': 'day of week',
    'delete %ida of %l': 'delete %ida of %l',
    'delete %shd': 'delete %shd',
    'delete block definition...': 'delete block definition...',
    'delete this clone': 'delete this clone',
    'delete': 'delete',
    'delimiter': 'delimiter',
    'demo (1.2x)': 'demo (1.2x)',
    'detach all parts': 'detach all parts',
    'detach from': 'detach from',
    'development mode \ndebugging primitives:': 'development mode \ndebugging primitives:',
    'development mode': 'development mode',
    'direction': 'direction',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones': 'disable deep-Morphic\ncontext menus\nand show user-friendly ones',
    'disconnected.': 'disconnected.',
    'distance to %dst': 'distance to %dst',
    'don\'t rotate': 'don\'t rotate',
    'down arrow': 'down arrow',
    'draggable': 'draggable',
    'dragging threshold': 'dragging threshold',
    'dropped': 'dropped',
    'duplicate': 'duplicate',
    'e': 'e',
    'e^': 'e^',
    'edge': 'edge',
    'edit rotation point only...': 'edit rotation point only...',
    'edit': 'edit',
    'edit...': 'edit...',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!': 'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!',
    'entering development mode.\n\nerror catching is turned off,\nuse the browser\'s web console\nto see error messages.': 'entering development mode.\n\nerror catching is turned off,\nuse the browser\'s web console\nto see error messages.',
    'entering user mode': 'entering user mode',
    'eraser': 'eraser',
    'expecting': 'expecting',
    'experimental -\nunder construction': 'experimental -\nunder construction',
    'export project as cloud data...': 'export project as cloud data...',
    'export project media only...': 'export project media only...',
    'export project without media...': 'export project without media...',
    'export': 'export',
    'export...': 'export...',
    'f': 'f',
    'false': 'false',
    'file menu import hint': 'file menu import hint',
    'file': 'file',
    'fill': 'fill',
    'filtered for %clr': 'filtered for %clr',
    'find blocks...': 'find blocks...',
    'find unused global custom blocks\nand remove their definitions': 'find unused global custom blocks\nand remove their definitions',
    'fisheye': 'fisheye',
    'flag': 'flag',
    'flash': 'flash',
    'flip ↔': 'flip ↔',
    'flip ↕': 'flip ↕',
    'floor': 'floor',
    'for %upvar in %l %cl': 'for %upvar in %l %cl',
    'for all sprites': 'for all sprites',
    'for this sprite only': 'for this sprite only',
    'forever %c': 'forever %c',
    'frames': 'frames',
    'fullScreen': 'fullScreen',
    'g': 'g',
    'gears': 'gears',
    'ghost': 'ghost',
    'giant (8x)': 'giant (8x)',
    'glide %n secs to x: %n y: %n': 'glide %n secs to x: %n y: %n',
    'go back %n layers': 'go back %n layers',
    'go to %dst': 'go to %dst',
    'go to front': 'go to front',
    'go to x: %n y: %n': 'go to x: %n y: %n',
    'grow': 'grow',
    'h': 'h',
    'header mapping...': 'header mapping...',
    'header': 'header',
    'hello': 'hello',
    'help': 'help',
    'help...': 'help...',
    'hide primitives': 'hide primitives',
    'hide variable %var': 'hide variable %var',
    'hide': 'hide',
    'hour': 'hour',
    'http:// %s': 'http:// %s',
    'huge (4x)': 'huge (4x)',
    'i': 'i',
    'if %b %c else %c': 'if %b %c else %c',
    'if %b %c': 'if %b %c',
    'if on edge, bounce': 'if on edge, bounce',
    'import a sound from your computer\nby dragging it into here': 'import a sound from your computer\nby dragging it into here',
    'import...': 'import...',
    'input list:': 'input list:',
    'input names:': 'input names:',
    'input(s), but getting': 'input(s), but getting',
    'insert %s at %idx of %l': 'insert %s at %idx of %l',
    'is %s a %typ ?': 'is %s a %typ ?',
    'is %s identical to %s ?': 'is %s identical to %s ?',
    'item %idx of %l': 'item %idx of %l',
    'items': 'items',
    'j': 'j',
    'join %words': 'join %words',
    'jukebox': 'jukebox',
    'k': 'k',
    'key %key pressed?': 'key %key pressed?',
    'l': 'l',
    'large': 'large',
    'last changed': 'last changed',
    'last': 'last',
    'launch %cmdRing %inputs': 'launch %cmdRing %inputs',
    'left arrow': 'left arrow',
    'length of %l': 'length of %l',
    'length of %s': 'length of %s',
    'length: ': 'length: ',
    'letter %n of %s': 'letter %n of %s',
    'letter': 'letter',
    'line': 'line',
    'list %exp': 'list %exp',
    'list view...': 'list view...',
    'list': 'list',
    'ln': 'ln',
    'load the official library of\npowerful blocks': 'load the official library of\npowerful blocks',
    'login': 'login',
    'm': 'm',
    'make a block...': 'make a block...',
    'make a copy\nand pick it up': 'make a copy\nand pick it up',
    'map %cmdRing to %codeKind %code': 'map %cmdRing to %codeKind %code',
    'map %codeListPart of %codeListKind to code %code': 'map %codeListPart of %codeListKind to code %code',
    'map %repRing over %l': 'map %repRing over %l',
    'map String to code %code': 'map String to code %code',
    'message': 'message',
    'middle': 'middle',
    'minute': 'minute',
    'monstrous (10x)': 'monstrous (10x)',
    'month': 'month',
    'mosaic': 'mosaic',
    'mouse down?': 'mouse down?',
    'mouse x': 'mouse x',
    'mouse y': 'mouse y',
    'mouse-departed': 'mouse-departed',
    'mouse-entered': 'mouse-entered',
    'mouse-pointer': 'mouse-pointer',
    'move %n steps': 'move %n steps',
    'move': 'move',
    'my %get': 'my %get',
    'myself': 'myself',
    'n': 'n',
    'name': 'name',
    'negative': 'negative',
    'neighbors': 'neighbors',
    'new...': 'new...',
    'next costume': 'next costume',
    'none': 'none',
    'normal (1x)': 'normal (1x)',
    'normal': 'normal',
    'normalScreen': 'normalScreen',
    'normalStage': 'normalStage',
    'not %b': 'not %b',
    'now connected.': 'now connected.',
    'number': 'number',
    'o': 'o',
    'octagon': 'octagon',
    'only duplicate this block': 'only duplicate this block',
    'only face left/right': 'only face left/right',
    'open a new browser browser window\n with a summary of this project': 'open a new browser browser window\n with a summary of this project',
    'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers': 'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers',
    'open a new window\nwith a picture of all scripts': 'open a new window\nwith a picture of all scripts',
    'open a new window\nwith a picture of both\nthis script and its result': 'open a new window\nwith a picture of both\nthis script and its result',
    'open a new window\nwith a picture of the stage': 'open a new window\nwith a picture of the stage',
    'open a new window\nwith a picture of this comment': 'open a new window\nwith a picture of this comment',
    'open a new window\nwith a picture of this script': 'open a new window\nwith a picture of this script',
    'open in another dialog...': 'open in another dialog...',
    'open in dialog...': 'open in dialog...',
    'open shared project from cloud...': 'open shared project from cloud...',
    'options...': 'options...',
    'other clones': 'other clones',
    'other scripts in sprite': 'other scripts in sprite',
    'other sprites': 'other sprites',
    'p': 'p',
    'paint a new sprite': 'paint a new sprite',
    'paintbucket': 'paintbucket',
    'parameters': 'parameters',
    'parent': 'parent',
    'parent...': 'parent...',
    'parts': 'parts',
    'password has been changed.': 'password has been changed.',
    'password must be six\ncharacters or longer': 'password must be six\ncharacters or longer',
    'passwords do\nnot match': 'passwords do\nnot match',
    'pause all %pause': 'pause all %pause',
    'pause': 'pause',
    'pen down': 'pen down',
    'pen trails': 'pen trails',
    'pen up': 'pen up',
    'pen': 'pen',
    'pic...': 'pic...',
    'pick random %n to %n': 'pick random %n to %n',
    'pipette': 'pipette',
    'pixelate': 'pixelate',
    'play note %n for %n beats': 'play note %n for %n beats',
    'play sound %snd until done': 'play sound %snd until done',
    'play sound %snd': 'play sound %snd',
    'please agree to\nthe TOS': 'please agree to\nthe TOS',
    'please fill out\nthis field': 'please fill out\nthis field',
    'please provide a valid\nemail address': 'please provide a valid\nemail address',
    'point in direction %dir': 'point in direction %dir',
    'point towards %dst': 'point towards %dst',
    'pointRight': 'pointRight',
    'poster': 'poster',
    'predicate': 'predicate',
    'presentation (1.4x)': 'presentation (1.4x)',
    'pressed': 'pressed',
    'processes': 'processes',
    'q': 'q',
    'r': 'r',
    'read-only': 'read-only',
    'rectangle': 'rectangle',
    'rectangleSolid': 'rectangleSolid',
    'redo the last undone block drop in this pane': 'redo the last undone block drop in this pane',
    'redrop': 'redrop',
    'relabel...': 'relabel...',
    'remove block variables...': 'remove block variables...',
    'rename background': 'rename background',
    'rename costume': 'rename costume',
    'rename sound': 'rename sound',
    'rename': 'rename',
    'rename...': 'rename...',
    'repeat %n %c': 'repeat %n %c',
    'repeat until %b %c': 'repeat until %b %c',
    'replace item %idx of %l with %s': 'replace item %idx of %l with %s',
    'report %s': 'report %s',
    'reporter': 'reporter',
    'reset columns': 'reset columns',
    'reset timer': 'reset timer',
    'rest for %n beats': 'rest for %n beats',
    'right arrow': 'right arrow',
    'ringify': 'ringify',
    'robot': 'robot',
    'rotation x': 'rotation x',
    'rotation y': 'rotation y',
    'round %n': 'round %n',
    'run %cmdRing %inputs': 'run %cmdRing %inputs',
    'run %cmdRing w/continuation': 'run %cmdRing w/continuation',
    's': 's',
    'saturation': 'saturation',
    'save %imgsource as costume named %s': 'save %imgsource as costume named %s',
    'save project data as XML\nto your downloads folder': 'save project data as XML\nto your downloads folder',
    'saved.': 'saved.',
    'say %s for %n secs': 'say %s for %n secs',
    'say %s': 'say %s',
    'screenshot': 'screenshot',
    'script pic with result...': 'script pic with result...',
    'script pic...': 'script pic...',
    'script variables %scriptVars': 'script variables %scriptVars',
    'scripts pic...': 'scripts pic...',
    'second': 'second',
    'select': 'select',
    'self': 'self',
    'set %eff effect to %n': 'set %eff effect to %n',
    'set %var to %s': 'set %var to %s',
    'set pen color to %clr': 'set pen color to %clr',
    'set pen color to %n': 'set pen color to %n',
    'set pen shade to %n': 'set pen shade to %n',
    'set pen size to %n': 'set pen size to %n',
    'set size to %n %': 'set size to %n %',
    'set tempo to %n bpm': 'set tempo to %n bpm',
    'set turbo mode to %b': 'set turbo mode to %b',
    'set x to %n': 'set x to %n',
    'set y to %n': 'set y to %n',
    'settings menu prefer empty slots hint': 'settings menu prefer empty slots hint',
    'shared.': 'shared.',
    'sharing\nproject...': 'sharing\nproject...',
    'show a picture of all scripts\nand block definitions': 'show a picture of all scripts\nand block definitions',
    'show all': 'show all',
    'show global custom block definitions as XML\nin a new browser window': 'show global custom block definitions as XML\nin a new browser window',
    'show primitives': 'show primitives',
    'show project data as XML\nin a new browser window': 'show project data as XML\nin a new browser window',
    'show table %l': 'show table %l',
    'show variable %var': 'show variable %var',
    'show': 'show',
    'shrink': 'shrink',
    'sin': 'sin',
    'size': 'size',
    'slider max...': 'slider max...',
    'slider min...': 'slider min...',
    'slider': 'slider',
    'smallStage': 'smallStage',
    'space': 'space',
    'specify the distance the hand has to move\nbefore it picks up an object': 'specify the distance the hand has to move\nbefore it picks up an object',
    'speechBubble': 'speechBubble',
    'speechBubbleOutline': 'speechBubbleOutline',
    'split %s by %delim': 'split %s by %delim',
    'sprite': 'sprite',
    'sqrt': 'sqrt',
    'square': 'square',
    'stack size': 'stack size',
    'stage image': 'stage image',
    'stage': 'stage',
    'stamp': 'stamp',
    'stay signed in on this computer\nuntil logging out': 'stay signed in on this computer\nuntil logging out',
    'stop %stopChoices': 'stop %stopChoices',
    'stop %stopOthersChoices': 'stop %stopOthersChoices',
    'stop all sounds': 'stop all sounds',
    'storage': 'storage',
    'store this project\nin the downloads folder\n(in supporting browsers)': 'store this project\nin the downloads folder\n(in supporting browsers)',
    'switch to costume %cst': 'switch to costume %cst',
    't': 't',
    'tab': 'tab',
    'table view...': 'table view...',
    'tan': 'tan',
    'tempo': 'tempo',
    'text': 'text',
    'there are currently no unused\nglobal custom blocks in this project': 'there are currently no unused\nglobal custom blocks in this project',
    'thing': 'thing',
    'think %s for %n secs': 'think %s for %n secs',
    'think %s': 'think %s',
    'this block': 'this block',
    'this project doesn\'t have any\ncustom global blocks yet': 'this project doesn\'t have any\ncustom global blocks yet',
    'this script': 'this script',
    'time in milliseconds': 'time in milliseconds',
    'timer': 'timer',
    'tip': 'tip',
    'touching %clr ?': 'touching %clr ?',
    'touching %col ?': 'touching %col ?',
    'transient': 'transient',
    'true': 'true',
    'turbo mode?': 'turbo mode?',
    'turn %clockwise %n degrees': 'turn %clockwise %n degrees',
    'turn %counterclockwise %n degrees': 'turn %counterclockwise %n degrees',
    'turn all pen trails and stamps\ninto a new background for the stage': 'turn all pen trails and stamps\ninto a new background for the stage',
    'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite': 'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite',
    'turn pen trails into new background...': 'turn pen trails into new background...',
    'turn pen trails into new costume...': 'turn pen trails into new costume...',
    'turnLeft': 'turnLeft',
    'turnRight': 'turnRight',
    'turtle': 'turtle',
    'turtleOutline': 'turtleOutline',
    'type of %s': 'type of %s',
    'u': 'u',
    'uncheck for default\nGUI design': 'uncheck for default\nGUI design',
    'uncheck for greater speed\nat variable frame rates': 'uncheck for greater speed\nat variable frame rates',
    'uncheck for less contrast\nmulti-column list views': 'uncheck for less contrast\nmulti-column list views',
    'uncheck for lower resolution,\nsaves computing resources': 'uncheck for lower resolution,\nsaves computing resources',
    'uncheck for round ends of lines': 'uncheck for round ends of lines',
    'uncheck for smooth\nscaling of vector costumes': 'uncheck for smooth\nscaling of vector costumes',
    'uncheck to allow\nscript reentrance': 'uncheck to allow\nscript reentrance',
    'uncheck to allow dropped\nreporters to kick out others': 'uncheck to allow dropped\nreporters to kick out others',
    'uncheck to always show (+) symbols\nin block prototype labels': 'uncheck to always show (+) symbols\nin block prototype labels',
    'uncheck to confine auto-wrapping\nto top-level block stacks': 'uncheck to confine auto-wrapping\nto top-level block stacks',
    'uncheck to disable\nIDE animations': 'uncheck to disable\nIDE animations',
    'uncheck to disable\nblock to text mapping features': 'uncheck to disable\nblock to text mapping features',
    'uncheck to disable\ninput sliders for\nentry fields': 'uncheck to disable\ninput sliders for\nentry fields',
    'uncheck to disable\nkeyboard editing support': 'uncheck to disable\nkeyboard editing support',
    'uncheck to disable\nmulti-column list views': 'uncheck to disable\nmulti-column list views',
    'uncheck to disable\nproject data in URLs': 'uncheck to disable\nproject data in URLs',
    'uncheck to disable\nsaving linked sublist identities': 'uncheck to disable\nsaving linked sublist identities',
    'uncheck to disable\nsprite composition': 'uncheck to disable\nsprite composition',
    'uncheck to disable\nsprite inheritance features': 'uncheck to disable\nsprite inheritance features',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices': 'uncheck to disable\nvirtual keyboard support\nfor mobile devices',
    'uncheck to disable alternating\ncolors for nested block': 'uncheck to disable alternating\ncolors for nested block',
    'uncheck to disable dynamic\nlabels for variadic inputs': 'uncheck to disable dynamic\nlabels for variadic inputs',
    'uncheck to disable support\nfor first-class sprites': 'uncheck to disable support\nfor first-class sprites',
    'uncheck to run scripts\nat normal speed': 'uncheck to run scripts\nat normal speed',
    'uncheck to save contents\nin the project': 'uncheck to save contents\nin the project',
    'uncheck to stop caching\ninputs (for debugging the evaluator)': 'uncheck to stop caching\ninputs (for debugging the evaluator)',
    'uncheck to turn\nblock clicking\nsound off': 'uncheck to turn\nblock clicking\nsound off',
    'uncheck to turn off\nvisible stepping': 'uncheck to turn off\nvisible stepping',
    'uncheck to use solid drop\nshadows and highlights': 'uncheck to use solid drop\nshadows and highlights',
    'uncheck to use the input\ndialog in short form': 'uncheck to use the input\ndialog in short form',
    'undo the last\nblock drop\nin this pane': 'undo the last\nblock drop\nin this pane',
    'undo': 'undo',
    'undrop': 'undrop',
    'unicode %n as letter': 'unicode %n as letter',
    'unicode of %s': 'unicode of %s',
    'unringify': 'unringify',
    'unshared.': 'unshared.',
    'unsharing\nproject...': 'unsharing\nproject...',
    'untitled': 'untitled',
    'unused block(s) removed': 'unused block(s) removed',
    'up arrow': 'up arrow',
    'url...': 'url...',
    'v': 'v',
    'variables': 'variables',
    'w': 'w',
    'wait %n secs': 'wait %n secs',
    'wait until %b': 'wait until %b',
    'wardrobe': 'wardrobe',
    'warp %c': 'warp %c',
    'what\'s your name?': 'what\'s your name?',
    'when %b': 'when %b',
    'when %greenflag clicked': 'when %greenflag clicked',
    'when %keyHat key pressed': 'when %keyHat key pressed',
    'when I am %interaction': 'when I am %interaction',
    'when I receive %msgHat': 'when I receive %msgHat',
    'when I start as a clone': 'when I start as a clone',
    'whirl': 'whirl',
    'whitespace': 'whitespace',
    'with inputs': 'with inputs',
    'world': 'world',
    'x position': 'x position',
    'x': 'x',
    'y position': 'y position',
    'y': 'y',
    'year': 'year',
    'year:': 'year:',
    'your own': 'your own',
    'z': 'z',
};