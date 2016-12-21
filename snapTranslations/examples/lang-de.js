/*

    lang-de.js

    German translation for SNAP!

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

SnapTranslator.dict.de = {

    // Translation meta info - appering in the language menu

    'language_name': 'Deutsch',
    'language_translator': 'Jens Mönig',
    'translator_e-mail': 'jens@moenig.org',
    'last_changed': '2016-11-22',

    //

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
    ' or before': ' or before',
    '%att of %spr': '%att von %spr',
    '%b and %b': '%b und %b',
    '%b or %b': '%b oder %b',
    '%fun of %n': '%fun von %n',
    '%l contains %s': '%l enthält %s',
    '%n mod %n': '%n modulo %n',
    '%s in front of %l': '%s am Anfang von %l',
    '%txtfun of %s': '%txtfun of %s',
    '\'\ndoes not exist in this context': '\'\ndoes not exist in this context',
    '(-90) left': '(-90) links',
    '(0) up': '(0) oben',
    '(180) down': '(180) unten',
    '(90) right': '(90) rechts',
    '(empty)': '(leer)',
    '(in a new window)': '(in a new window)',
    '(temporary)': '(temporary)',
    'About Snap': 'Über Snap',
    'About...': 'Über Snap!...',
    'Account created.': 'Account created.',
    'An e-mail with your password\nhas been sent to the address provided': 'An e-mail with your password\nhas been sent to the address provided',
    'Animations': 'Animationen',
    'Any\n(unevaluated)': 'Beliebig\n(zitiert)',
    'Any type': 'Beliebig',
    'Apply': 'Anwenden',
    'April': 'April',
    'Are you sure you want to delete': 'Wirklich löschen?',
    'Are you sure you want to publish': 'Are you sure you want to publish',
    'Are you sure you want to unpublish': 'Are you sure you want to unpublish',
    'August': 'August',
    'Back...': 'Zurück...',
    'Backgrounds': 'Hintergründe',
    'Birth date:': 'Birth date:',
    'Block Editor': 'Blockeditor',
    'Blocks': 'Bausteine',
    'Blurred shadows': 'Weiche Schatten',
    'Boolean\n(unevaluated)': 'Boolsch\n(zitiert)',
    'Boolean (T/F)': 'Boolsch (W/F)',
    'Boolean': 'Boole',
    'Browser': 'Browser',
    'Brush size': 'Brush size',
    'Cache Inputs': 'Cache Inputs',
    'Cancel': 'Abbrechen',
    'Change Password': 'Change Password',
    'Change Password...': 'Change Password...',
    'Change block': 'Block verändern',
    'Clicking sound': 'Akustisches Klicken',
    'Cloud': 'Cloud',
    'Code mapping': 'Code mapping',
    'Codification support': 'Codification support',
    'Command\n(C-shape)': 'Befehl\n(C-Form)',
    'Command\n(inline)': 'Befehl',
    'Command': 'Befehl',
    'Constrain proportions of shapes?\n(you can also hold shift)': 'Constrain proportions of shapes?\n(you can also hold shift)',
    'Contents': 'Inhalt',
    'Contributors': 'Mitwirkende',
    'Control': 'Steuerung',
    'Costume Editor': 'Kostümeditor',
    'Costumes': 'Kostüme',
    'Create input name': 'Eingabe erstellen',
    'Credits...': 'Mitwirkende...',
    'December': 'December',
    'Default Value:': 'Standardwert:',
    'Default': 'Normal',
    'Delete Custom Block': 'Block Löschen',
    'Delete Project': 'Projekt löschen',
    'Delete a variable': 'Variable löschen',
    'Delete': 'Löschen',
    'Download source': 'Quellcode runterladen',
    'Dragging threshold...': 'Dragging threshold...',
    'Dynamic input labels': 'Eingabenbeschriftung',
    'E-mail address of parent or guardian:': 'E-mail address of parent or guardian:',
    'E-mail address:': 'E-mail address:',
    'ERROR: INVALID PASSWORD': 'ERROR: INVALID PASSWORD',
    'EXPERIMENTAL! check to enable\n live custom control structures': 'EXPERIMENTAL! check to enable\n live custom control structures',
    'EXPERIMENTAL! uncheck to disable live\ncustom control structures': 'EXPERIMENTAL! uncheck to disable live\ncustom control structures',
    'Edit input name': 'Eingabe bearbeiten',
    'Edit label fragment': 'Beschriftung bearbeiten',
    'Empty': 'Leer',
    'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).': 'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).',
    'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.': 'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.',
    'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.': 'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.',
    'Enter one option per line.Optionally use \"=\" as key/value delimiter\ne.g.\n   the answer=42': 'Enter one option per line.Optionally use \"=\" as key/value delimiter\ne.g.\n   the answer=42',
    'Eraser tool': 'Eraser tool',
    'Examples': 'Examples',
    'Export Project As...': 'Export Project As...',
    'Export all scripts as pic...': 'Export all scripts as pic...',
    'Export blocks': 'Blöcke exportieren',
    'Export blocks...': 'Blöcke exportieren...',
    'Export project as plain text...': 'Projekt als normalen Text exportieren...',
    'Export project...': 'Projekt exportieren...',
    'Export summary with drop-shadows...': 'Export summary with drop-shadows...',
    'Export summary...': 'Zusammenfassung exportieren...',
    'February': 'February',
    'Fetching project\nfrom the cloud...': 'Fetching project\nfrom the cloud...',
    'Fill a region': 'Fill a region',
    'Filled Ellipse\n(shift: circle)': 'Filled Ellipse\n(shift: circle)',
    'Filled Rectangle\n(shift: square)': 'Filled Rectangle\n(shift: square)',
    'First-Class Sprites': 'First-Class Sprites',
    'Flat design': 'Helles Design',
    'Flat line ends': 'Flache Pinselstriche',
    'For all Sprites': 'Allen gemeinsam',
    'Header mapping': 'Header mapping',
    'Hello!': 'Hallo!',
    'Help': 'Hilfe',
    'Hmm...': 'Hmm...',
    'I have read and agree\nto the Terms of Service': 'I have read and agree\nto the Terms of Service',
    'Import blocks': 'Blöcke importieren',
    'Import library': 'Modul laden',
    'Import sound': 'Import sound',
    'Import tools': 'Tools laden',
    'Import': 'Import',
    'Import...': 'Importieren...',
    'Inheritance support': 'Prototypische Vererbung',
    'Input Names:': 'Eingaben:',
    'Input Slot Options': 'Input Slot Options',
    'Input name': 'Eingabe',
    'Input sliders': 'Eingabeschieber',
    'January': 'January',
    'JavaScript function ( %mult%s ) { %code }': 'JavaScript function ( %mult%s ) { %code }',
    'July': 'July',
    'June': 'June',
    'Keyboard Editing': 'Tastaturunterstützung',
    'Kind of': 'Eine Art',
    'Language...': 'Sprache...',
    'Libraries...': 'Module...',
    'License': 'Lizenz',
    'License...': 'Lizenz...',
    'Line tool\n(shift: vertical/horizontal)': 'Line tool\n(shift: vertical/horizontal)',
    'List': 'Liste',
    'Lists': 'Listen',
    'Live coding support': 'Live coding support',
    'Login...': 'Anmelden...',
    'Logout': 'Logout',
    'Long form input dialog': 'Ausführlicher Input-Dialog',
    'Looks': 'Aussehen',
    'Make a block': 'Neuer Block',
    'Make a variable': 'Neue Variable',
    'March': 'March',
    'May': 'May',
    'Message name': 'Nachricht',
    'Modules...': 'Komponenten...',
    'Motion': 'Bewegung',
    'Multiple inputs (value is list of inputs)': 'Mehrere Eingaben (als Liste)',
    'Nested auto-wrapping': 'Automatisches Umklammern',
    'New Project': 'Neues Projekt',
    'New password:': 'New password:',
    'New': 'Neu',
    'No': 'Nein',
    'November': 'November',
    'Number': 'Zahl',
    'OK': 'OK',
    'Object': 'Objekt',
    'October': 'October',
    'Ok': 'OK',
    'Old password:': 'Old password:',
    'Open un Project': 'Open un Project',
    'Open': 'Open',
    'Open...': 'Öffnen...',
    'Opening project...': 'Opening project...',
    'Operators': 'Operatoren',
    'Other': 'Andere',
    'Paint Editor': 'Paint Editor',
    'Paint a new costume': 'Paint a new costume',
    'Paintbrush tool\n(free draw)': 'Paintbrush tool\n(free draw)',
    'Part of': 'Ein Teil von',
    'Parts': 'Teile',
    'Password:': 'Password:',
    'Pen': 'Stift',
    'Persist linked sublist IDs': 'Persist linked sublist IDs',
    'Pipette tool\n(pick a color anywhere)': 'Pipette tool\n(pick a color anywhere)',
    'Plain prototype labels': 'Einfache Prototyp-Beschriftung',
    'Play sound': 'Klang\nabspielen',
    'Play': 'Los',
    'Predicate': 'Prädikat',
    'Prefer empty slot drops': 'Leere Platzhalter bevorzugen',
    'Prefer smooth animations': 'Fixe Framerate',
    'Privacy...': 'Privacy...',
    'Project Notes': 'Projektanmerkungen',
    'Project URLs': 'Project URLs',
    'Project notes...': 'Projektanmerkungen...',
    'Rasterize SVGs': 'Rasterize SVGs',
    'Reference manual': 'Handbuch lesen',
    'Remove unused blocks': 'Ungebrauchte Blöcke entfernen',
    'Repeat new password:': 'Repeat new password:',
    'Replace the current project with a new one?': 'Das aktuelle Projekt durch ein neues ersetzen?',
    'Reporter': 'Funktion',
    'Reset Password...': 'Reset Password...',
    'Reset password': 'Reset password',
    'Retina display support': 'Retina display support',
    'SVG costumes are\nnot yet fully supported\nin every browser': 'SVG costumes are\nnot yet fully supported\nin every browser',
    'Save As...': 'Sichern als...',
    'Save Project As...': 'Projekt Sichern Als...',
    'Save Project': 'Save Project',
    'Save to disk': 'Abpeichern',
    'Save': 'Sichern',
    'Saved!': 'Gesichert!',
    'Saving project\nto the cloud...': 'Saving project\nto the cloud...',
    'Script variable name': 'Skriptvariablenname',
    'Scripts': 'Skripte',
    'Select a costume from the media library': 'Select a costume from the media library',
    'Select a sound from the media library': 'Select a sound from the media library',
    'Select categories of additional blocks to add to this project.': 'Select categories of additional blocks to add to this project.',
    'Sensing': 'Fühlen',
    'September': 'September',
    'Service:': 'Service:',
    'Set the rotation center': 'Set the rotation center',
    'Share Project': 'Share Project',
    'Share': 'Share',
    'Sign in': 'Sign in',
    'Sign up': 'Sign up',
    'Signup': 'Signup',
    'Signup...': 'Benutzerkonto einrichten...',
    'Single input.': 'Einzeleingabe.',
    'Slider maximum value': 'Maximalwert des Reglers',
    'Slider minimum value': 'Minimalwert des Reglers',
    'Snap! website': 'Snap! Webseite',
    'Snap!Cloud': 'Snap!Cloud',
    'Sound': 'Klang',
    'Sounds': 'Klänge',
    'Sprite Nesting': 'Sprite Nesting',
    'Sprite': 'Objekt',
    'Stage height': 'Bühnenhöhe',
    'Stage selected:\nno motion primitives': 'Bühne ausgewählt:\nkeine Standardbewegungsblöcke\nvorhanden',
    'Stage size': 'Bühnengröße',
    'Stage size...': 'Bühnengröße...',
    'Stage width': 'Bühnenbreite',
    'Stage': 'Bühne',
    'Stop sound': 'Klang\nanhalten',
    'Stop': 'Halt',
    'Stroked Ellipse\n(shift: circle)': 'Stroked Ellipse\n(shift: circle)',
    'Stroked Rectangle\n(shift: square)': 'Stroked Rectangle\n(shift: square)',
    'Switch back to user mode': 'zurück zum Benutzermodus',
    'Switch to dev mode': 'zum Hackermodus wechseln',
    'Table lines': 'Tabellen mit Linien',
    'Table support': 'Tabellenunterstützung',
    'Table view': 'Table view',
    'Terms of Service...': 'Terms of Service...',
    'Text': 'Text',
    'Thread safe scripts': 'Threadsicherheit',
    'Title text': 'Beschriftung',
    'Translations': 'Übersetzungen',
    'Translators...': 'Übersetzer',
    'Turbo mode': 'Turbomodus',
    'Turtle': 'Richtungszeiger',
    'Unshare Project': 'Unshare Project',
    'Unshare': 'Unshare',
    'Untitled': 'Unbenannt',
    'Unused blocks...': 'Ungebrauchte Blöcke...',
    'Updating\nproject list...': 'Updating\nproject list...',
    'Upvar - make internal variable visible to caller': 'Interne Variable außen sichtbar machen',
    'User name must be four\ncharacters or longer': 'User name must be four\ncharacters or longer',
    'User name:': 'User name:',
    'Variable name': 'Variablenname',
    'Variables': 'Variablen',
    'Virtual keyboard': 'Virtuelle Tastatur',
    'Visible stepping': 'Programmausführung verfolgen',
    'Yes': 'Ja',
    'You are not logged in': 'You are not logged in',
    'Zebra coloring': 'Zebrafarben',
    'Zoom blocks': 'Blöcke vergrößern',
    'Zoom blocks...': 'Blöcke vergrößern...',
    'a variable of name \'': 'a variable of name \'',
    'a': 'a',
    'abs': 'Betrag',
    'acos': 'acos',
    'add %s to %l': 'füge %s zu %l hinzu',
    'add a new Turtle sprite': 'add a new Turtle sprite',
    'add a new sprite': 'ein neues Objekt\nhinzufügen',
    'add comment here...': 'Anmerkung hier hinzufügen',
    'add comment': 'Anmerkung hinzufügen',
    'alert %mult%s': 'Pop-up: %mult%s',
    'all but first of %l': 'alles außer dem ersten von %l',
    'all but this script': 'alles außer diesem Skript',
    'all': 'alles',
    'anchor': 'Verankerung',
    'answer': 'Antwort',
    'any key': 'beliebige Taste',
    'any message': 'eine beliebige Nachricht',
    'any': 'beliebig',
    'arrange scripts\nvertically': 'Skripte der Reihe nach\nanordnen',
    'arrowDown': 'arrowDown',
    'arrowDownOutline': 'arrowDownOutline',
    'arrowLeft': 'arrowLeft',
    'arrowLeftOutline': 'arrowLeftOutline',
    'arrowRight': 'arrowRight',
    'arrowRightOutline': 'arrowRightOutline',
    'arrowUp': 'arrowUp',
    'arrowUpOutline': 'arrowUpOutline',
    'asin': 'asin',
    'ask %s and wait': 'frage %s und warte',
    'atan': 'atan',
    'b': 'b',
    'big (2x)': 'groß (2x)',
    'block deletion dialog text': 'Soll dieser Block mit allen seinen Exemplare\nwirklich gelöscht werden?',
    'block variables': 'block variables',
    'block variables...': 'block variables...',
    'blocks': 'Blöcke',
    'brightness': 'Helligeit',
    'broadcast %msg and wait': 'sende %msg an alle und warte',
    'broadcast %msg': 'sende %msg an alle',
    'brush': 'brush',
    'build': 'baue',
    'c': 'c',
    'call %cmdRing w/continuation': 'rufe %cmdRing mit Continuation auf',
    'call %repRing %inputs': 'rufe %repRing auf %inputs',
    'can rotate': 'frei drehbar',
    'ceiling': 'Aufgerundet',
    'center x': 'Mittelpunkt x',
    'center y': 'Mittelpunkt y',
    'change %eff effect by %n': 'ändere %eff -Effekt um %n',
    'change %var by %n': 'ändere %var um %n',
    'change pen color by %n': 'ändere Stiftfarbe um %n',
    'change pen shade by %n': 'ändere Farbstärke um %n',
    'change pen size by %n': 'ändere Stiftdicke um %n',
    'change size by %n': 'ändere Größe um %n',
    'change tempo by %n': 'ändere Tempo um %n',
    'change x by %n': 'ändere x um %n',
    'change y by %n': 'ändere y um %n',
    'check for alternative\nGUI design': 'check for alternative\nGUI design',
    'check for block\nto text mapping features': 'check for block\nto text mapping features',
    'check for flat ends of lines': 'einschalten für flache\nPinselstrichenden',
    'check for higher contrast\ntable views': 'check for higher contrast\ntable views',
    'check for higher resolution,\nuses more computing resources': 'check for higher resolution,\nuses more computing resources',
    'check for multi-column\nlist view support': 'check for multi-column\nlist view support',
    'check for smooth, predictable\nanimations across computers': 'einschalten, damit Animationen\nüberall gleich laufen',
    'check for sprite\ninheritance features': 'check for sprite\ninheritance features',
    'check to always show slot\ntypes in the input dialog': 'einschalten, um immer die Datentypen\nim Input-Dialog zu sehen',
    'check to cache inputs\nboosts recursion': 'check to cache inputs\nboosts recursion',
    'check to disallow\nscript reentrance': 'verhindert, dass unvollendete\nSkripte erneut gestartet werden',
    'check to enable\nIDE animations': 'einschalten um IDE-\nAnimationen zu erlauben',
    'check to enable\ninput sliders for\nentry fields': 'einschalten um Schieber\nin Eingabefeldern zu aktivieren',
    'check to enable\nkeyboard editing support': 'check to enable\nkeyboard editing support',
    'check to enable\nproject data in URLs': 'check to enable\nproject data in URLs',
    'check to enable\nsaving linked sublist identities': 'check to enable\nsaving linked sublist identities',
    'check to enable\nsprite composition': 'check to enable\nsprite composition',
    'check to enable\nvirtual keyboard support\nfor mobile devices': 'einschalten um die virtuelle\nTastatur auf mobilen Geräten\nzu ermöglichen',
    'check to enable alternating\ncolors for nested blocks': 'einschalten ür abwechselnde Farbnuancen\nin Blöcken',
    'check to enable auto-wrapping\ninside nested block stacks': 'check to enable auto-wrapping\ninside nested block stacks',
    'check to enable dynamic\nlabels for variadic inputs': 'einschalten um Mehrfacheingabefelder\nautomatisch zu beschriften',
    'check to enable support\n for first-class sprite': 'check to enable support\n for first-class sprite',
    'check to hide (+) symbols\nin block prototype labels': 'einschalten, um (+) Zeichen\nim Blockeditor immer anzuzeigen',
    'check to prevent contents\nfrom being saved': 'einschalten, um das Speichern des Inhalts\nim Projekt zu verhindern',
    'check to prioritize\nscript execution': 'einschalten, um Skripte\nzu priorisieren',
    'check to rasterize\nSVGs on import': 'check to rasterize\nSVGs on import',
    'check to turn\nblock clicking\nsound on': 'einschalten um akustisches\nKlicken zu aktivieren',
    'check to turn on\n visible stepping (slow)': 'check to turn on\n visible stepping (slow)',
    'check to use blurred drop\nshadows and highlights': 'einschalten für harte Schatten\nund Beleuchtung',
    'children': 'Abkömmlinge',
    'circle': 'circle',
    'circleSolid': 'circleSolid',
    'clean up': 'Aufräumen',
    'clear graphic effects': 'schalte Grafikeffekte aus',
    'clear': 'wische',
    'click or drag crosshairs to move the rotation center': 'Fadenkreuz anklicken oder bewegen um den Drehpunkt zu setzen',
    'clicked': 'angeklickt',
    'clones': 'Klone',
    'cloud': 'cloud',
    'cloudGradient': 'cloudGradient',
    'cloudOutline': 'cloudOutline',
    'code mapping...': 'code mapping...',
    'code of %cmdRing': 'code of %cmdRing',
    'code': 'code',
    'collection': 'collection',
    'color %clr is touching %clr ?': 'Farbe %clr berührt %clr ?',
    'color': 'Farbe',
    'comic': 'Moire',
    'command': 'Befehlsblock',
    'comment pic...': 'comment pic...',
    'confetti': 'Farbverschiebung',
    'console log %mult%s': 'schreibe in die Konsole: %mult%s',
    'cos': 'cos',
    'costume #': 'Kostüm Nr.',
    'costume name': 'costume name',
    'costumes tab help': 'Bilder durch hereinziehen von einer anderen\nWebseite or vom Computer importieren',
    'could not connect to:': 'could not connect to:',
    'cr': 'Wagenrücklauf',
    'create a clone of %cln': 'klone %cln',
    'crosshairs': 'crosshairs',
    'current %dates': 'current %dates',
    'current module versions:': 'Komponenten-Versionen',
    'current parent': 'current parent',
    'd': 'd',
    'dangling?': 'Baumeln?',
    'date': 'date',
    'day of week': 'day of week',
    'delete %ida of %l': 'entferne %ida aus %l',
    'delete %shd': 'delete %shd',
    'delete block definition...': 'Blockdefinition löschen',
    'delete this clone': 'entferne diesen Klon',
    'delete': 'Löschen',
    'delimiter': 'delimiter',
    'demo (1.2x)': 'Demo (1.2x)',
    'detach all parts': 'Alle Teile abtrennen',
    'detach from': 'Abtrennen von',
    'development mode \ndebugging primitives:': 'Hackermodus \nDebugging-Blöcke',
    'development mode': 'Hackermodus',
    'direction': 'Richtung',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones': 'verlässt Morphic',
    'disconnected.': 'disconnected.',
    'distance to %dst': 'Entfernung von %dst',
    'don\'t rotate': 'nicht drehbar',
    'down arrow': 'Pfeil nach unten',
    'draggable': 'greifbar',
    'dragging threshold': 'dragging threshold',
    'dropped': 'abgestellt',
    'duplicate': 'Duplizieren',
    'e': 'e',
    'e^': 'e^',
    'edge': 'Kante',
    'edit rotation point only...': 'edit rotation point only...',
    'edit': 'Bearbeiten',
    'edit...': 'Bearbeiten...',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!': 'ermöglicht Morphic Funktionen',
    'entering development mode.\n\nerror catching is turned off,\nuse the browser\'s web console\nto see error messages.': 'entering development mode.\n\nerror catching is turned off,\nuse the browser\'s web console\nto see error messages.',
    'entering user mode': 'entering user mode',
    'eraser': 'eraser',
    'expecting': 'expecting',
    'experimental -\nunder construction': 'experimental -\nunder construction',
    'export project as cloud data...': 'export project as cloud data...',
    'export project media only...': 'export project media only...',
    'export project without media...': 'export project without media...',
    'export': 'Exportieren',
    'export...': 'Exportieren...',
    'f': 'f',
    'false': 'falsch',
    'file menu import hint': 'lädt ein exportiertes Projekt,\neine Bibliothek mit Blöcken\nein Kostüm oder einen Klang',
    'file': 'file',
    'fill': 'male aus',
    'filtered for %clr': 'nach %clr gefiltert',
    'find blocks...': 'find blocks...',
    'find unused global custom blocks\nand remove their definitions': 'nicht verwendete Blöcke finden\nund entfernen',
    'fisheye': 'Fischauge',
    'flag': 'flag',
    'flash': 'flash',
    'flip ↔': 'flip ↔',
    'flip ↕': 'flip ↕',
    'floor': 'Abgerundet',
    'for %upvar in %l %cl': 'for %upvar in %l %cl',
    'for all sprites': 'für alle',
    'for this sprite only': 'nur für dieses Objekt',
    'forever %c': 'fortlaufend %c',
    'frames': 'Rahmenzähler',
    'fullScreen': 'fullScreen',
    'g': 'g',
    'gears': 'gears',
    'ghost': 'Durchsichtigkeit',
    'giant (8x)': 'gigantisch (8x)',
    'glide %n secs to x: %n y: %n': 'gleite %n Sek. zu x: %n y: %n',
    'go back %n layers': 'gehe %n Ebenen zurück',
    'go to %dst': 'gehe zu %dst',
    'go to front': 'komme nach vorn',
    'go to x: %n y: %n': 'gehe zu x: %n y: %n',
    'grow': 'grow',
    'h': 'h',
    'header mapping...': 'header mapping...',
    'header': 'header',
    'hello': 'Hallo',
    'help': 'Hilfe',
    'help...': 'Hilfe...',
    'hide primitives': 'Basisblöcke ausblenden',
    'hide variable %var': 'verstecke Variable %var',
    'hide': 'verstecken',
    'hour': 'hour',
    'http:// %s': 'http:// %s',
    'huge (4x)': 'riesig (4x)',
    'i': 'i',
    'if %b %c else %c': 'falls %b %c sonst %c',
    'if %b %c': 'falls %b %c',
    'if on edge, bounce': 'pralle vom Rand ab',
    'import a sound from your computer\nby dragging it into here': 'Klänge durch hereinziehen importieren',
    'import...': 'Importieren...',
    'input list:': 'Eingabeliste:',
    'input names:': 'Eingaben:',
    'input(s), but getting': 'input(s), but getting',
    'insert %s at %idx of %l': 'füge %s als %idx in %l ein',
    'is %s a %typ ?': 'ist %s ein(e) %typ ?',
    'is %s identical to %s ?': 'ist %s identisch mit %s ?',
    'item %idx of %l': 'Element %idx von %l',
    'items': 'Elemente',
    'j': 'j',
    'join %words': 'verbinde %words',
    'jukebox': 'jukebox',
    'k': 'k',
    'key %key pressed?': 'Taste %key gedrückt?',
    'l': 'l',
    'large': 'groß',
    'last changed': 'last changed',
    'last': 'letztes',
    'launch %cmdRing %inputs': 'starte %cmdRing %inputs',
    'left arrow': 'Pfeil nach links',
    'length of %l': 'Länge von %l',
    'length of %s': 'Länge von %s',
    'length: ': 'Länge: ',
    'letter %n of %s': 'Zeichen %n von %s',
    'letter': 'Buchstabe',
    'line': 'Zeilenvorschub',
    'list %exp': 'Liste %exp',
    'list view...': 'Listenansicht...',
    'list': 'Liste',
    'ln': 'ln',
    'load the official library of\npowerful blocks': 'das offizielle Modul mit\nmächtigen Blöcken laden',
    'login': 'login',
    'm': 'm',
    'make a block...': 'Neuen Block bauen...',
    'make a copy\nand pick it up': 'eine Kopie aufnehmen',
    'map %cmdRing to %codeKind %code': 'map %cmdRing to %codeKind %code',
    'map %codeListPart of %codeListKind to code %code': 'map %codeListPart of %codeListKind to code %code',
    'map %repRing over %l': 'map %repRing over %l',
    'map String to code %code': 'map String to code %code',
    'message': 'Nachricht',
    'middle': 'middle',
    'minute': 'minute',
    'monstrous (10x)': 'ungeheuerlich (10x)',
    'month': 'month',
    'mosaic': 'Mosaik',
    'mouse down?': 'Maustaste gedrückt?',
    'mouse x': 'Maus x-Position',
    'mouse y': 'Maus y-Position',
    'mouse-departed': 'vom Mauszeiger verlassen',
    'mouse-entered': 'vom Mauszeiger betreten',
    'mouse-pointer': 'Mauszeiger',
    'move %n steps': 'gehe %n Schritte',
    'move': 'Verschieben',
    'my %get': 'Attribut %get',
    'myself': 'mich',
    'n': 'n',
    'name': 'Name',
    'negative': 'Farbumkehr',
    'neighbors': 'Nachbarn',
    'new...': 'Neu...',
    'next costume': 'nächstes Kostüm',
    'none': 'nichts',
    'normal (1x)': 'normal (1x)',
    'normal': 'normal',
    'normalScreen': 'normalScreen',
    'normalStage': 'normalStage',
    'not %b': 'nicht %b',
    'now connected.': 'now connected.',
    'number': 'Zahl',
    'o': 'o',
    'octagon': 'octagon',
    'only duplicate this block': 'nur diesen Block duplizieren',
    'only face left/right': 'kann sich nur nach\nlinks/rechts drehen',
    'open a new browser browser window\n with a summary of this project': 'eine Zusammenfassung diese Projects\nin einem neuen Browserfensteranzeigen',
    'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers': 'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers',
    'open a new window\nwith a picture of all scripts': 'ein neues Browserfenster mit einem\nBild aller Skripte öffnen',
    'open a new window\nwith a picture of both\nthis script and its result': 'open a new window\nwith a picture of both\nthis script and its result',
    'open a new window\nwith a picture of the stage': 'ein neues Browserfenster mit einem\nBild der Bühne öffnen',
    'open a new window\nwith a picture of this comment': 'open a new window\nwith a picture of this comment',
    'open a new window\nwith a picture of this script': 'ein neues Browserfenster mit einem\nBild dieses Skripts öffnen',
    'open in another dialog...': 'open in another dialog...',
    'open in dialog...': 'in neuem Fenster öffnen',
    'open shared project from cloud...': 'open shared project from cloud...',
    'options...': 'options...',
    'other clones': 'andere Klone',
    'other scripts in sprite': 'andere Skripte in diesem Objekt',
    'other sprites': 'andere Objekte',
    'p': 'p',
    'paint a new sprite': 'paint a new sprite',
    'paintbucket': 'paintbucket',
    'parameters': 'parameters',
    'parent': 'Vorfahr',
    'parent...': 'parent...',
    'parts': 'Teile',
    'password has been changed.': 'password has been changed.',
    'password must be six\ncharacters or longer': 'password must be six\ncharacters or longer',
    'passwords do\nnot match': 'passwords do\nnot match',
    'pause all %pause': 'pausiere alles %pause',
    'pause': 'pause',
    'pen down': 'Stift runter',
    'pen trails': 'Malspuren',
    'pen up': 'Stift hoch',
    'pen': 'pen',
    'pic...': 'Bild exportieren...',
    'pick random %n to %n': 'Zufallszahl von %n bis %n',
    'pipette': 'pipette',
    'pixelate': 'Pixel',
    'play note %n for %n beats': 'spiele Note %n für %n Schläge',
    'play sound %snd until done': 'spiele Klang %snd ganz',
    'play sound %snd': 'spiele Klang %snd',
    'please agree to\nthe TOS': 'please agree to\nthe TOS',
    'please fill out\nthis field': 'please fill out\nthis field',
    'please provide a valid\nemail address': 'please provide a valid\nemail address',
    'point in direction %dir': 'zeige Richtung %dir',
    'point towards %dst': 'zeige auf %dst',
    'pointRight': 'pointRight',
    'poster': 'poster',
    'predicate': 'Prädikat',
    'presentation (1.4x)': 'Präsentation (1.4x)',
    'pressed': 'gedrückt',
    'processes': 'processes',
    'q': 'q',
    'r': 'r',
    'read-only': 'read-only',
    'rectangle': 'rectangle',
    'rectangleSolid': 'rectangleSolid',
    'redo the last undone block drop in this pane': 'redo the last undone block drop in this pane',
    'redrop': 'Wiederherstellen',
    'relabel...': 'Umbenennen...',
    'remove block variables...': 'remove block variables...',
    'rename background': 'rename background',
    'rename costume': 'Kostüm umbenennen',
    'rename sound': 'Klang umbenennen',
    'rename': 'Umbenennen',
    'rename...': 'Umbenennen...',
    'repeat %n %c': 'wiederhole %n mal %c',
    'repeat until %b %c': 'wiederhole bis %b %c',
    'replace item %idx of %l with %s': 'ersetze Element %idx in %l durch %s',
    'report %s': 'berichte %s',
    'reporter': 'Funktionsblock',
    'reset columns': 'Spaltenbreiten zurücksetzen',
    'reset timer': 'starte Stoppuhr neu',
    'rest for %n beats': 'spiele Pause für %n Schläge',
    'right arrow': 'Pfeil nach rechts',
    'ringify': 'Umringen',
    'robot': 'robot',
    'rotation x': 'Drehpunkt x',
    'rotation y': 'Drehpunkt y',
    'round %n': '%n gerundet',
    'run %cmdRing %inputs': 'führe %cmdRing aus %inputs',
    'run %cmdRing w/continuation': 'führe %cmdRing mit Continuation aus',
    's': 's',
    'saturation': 'Sättigung',
    'save %imgsource as costume named %s': 'save %imgsource as costume named %s',
    'save project data as XML\nto your downloads folder': 'save project data as XML\nto your downloads folder',
    'saved.': 'saved.',
    'say %s for %n secs': 'sage %s für %n Sek.',
    'say %s': 'sage %s',
    'screenshot': 'screenshot',
    'script pic with result...': 'script pic with result...',
    'script pic...': 'Skriptbild...',
    'script variables %scriptVars': 'Skriptvariablen %scriptVars',
    'scripts pic...': 'Bild aller Scripte...',
    'second': 'second',
    'select': 'auswählen',
    'self': 'selbst',
    'set %eff effect to %n': 'setze %eff -Effekt auf %n',
    'set %var to %s': 'setze %var auf %s',
    'set pen color to %clr': 'setze Stiftfarbe auf %clr',
    'set pen color to %n': 'setze Stiftfarbe auf %n',
    'set pen shade to %n': 'setze Farbstärke auf %n',
    'set pen size to %n': 'setze Stiftdicke auf %n',
    'set size to %n %': 'setze Größe auf %n %',
    'set tempo to %n bpm': 'setze Tempo auf %n Schläge/Min.',
    'set turbo mode to %b': 'setze Turbomodus auf %b',
    'set x to %n': 'setze x auf %n',
    'set y to %n': 'setze y auf %n',
    'settings menu prefer empty slots hint': 'einschalten um leere Platzhalter\nbeim Platzieren von Blöckenzu bevorzugen',
    'shared.': 'shared.',
    'sharing\nproject...': 'sharing\nproject...',
    'show a picture of all scripts\nand block definitions': 'show a picture of all scripts\nand block definitions',
    'show all': 'Alles zeigen',
    'show global custom block definitions as XML\nin a new browser window': 'zeigt globale Benutzerblockdefinitionen\nals XML im Browser an',
    'show primitives': 'Basisblöcke anzeigen',
    'show project data as XML\nin a new browser window': 'zeigt das Projekt als XML\nin einem neuen Browserfenster an',
    'show table %l': 'show table %l',
    'show variable %var': 'zeige Variable %var',
    'show': 'anzeigen',
    'shrink': 'shrink',
    'sin': 'sin',
    'size': 'Größe',
    'slider max...': 'Maximalwert...',
    'slider min...': 'Minimalwert...',
    'slider': 'Regler',
    'smallStage': 'smallStage',
    'space': 'Leertaste',
    'specify the distance the hand has to move\nbefore it picks up an object': 'specify the distance the hand has to move\nbefore it picks up an object',
    'speechBubble': 'speechBubble',
    'speechBubbleOutline': 'speechBubbleOutline',
    'split %s by %delim': 'trenne %s nach %delim',
    'sprite': 'Objekt',
    'sqrt': 'Wurzel',
    'square': 'square',
    'stack size': 'Stapelgröße',
    'stage image': 'stage image',
    'stage': 'Bühne',
    'stamp': 'stemple',
    'stay signed in on this computer\nuntil logging out': 'stay signed in on this computer\nuntil logging out',
    'stop %stopChoices': 'stoppe %stopChoices',
    'stop %stopOthersChoices': 'stoppe %stopOthersChoices',
    'stop all sounds': 'stoppe alle Klänge',
    'storage': 'storage',
    'store this project\nin the downloads folder\n(in supporting browsers)': 'dieses Projekt herunterladen\nund lokal speichern\n(nicht von allen Browsern untersützt)',
    'switch to costume %cst': 'ziehe Kostüm %cst an',
    't': 't',
    'tab': 'Tabulator',
    'table view...': 'tabellarische Ansicht...',
    'tan': 'tan',
    'tempo': 'Tempo',
    'text': 'Text',
    'there are currently no unused\nglobal custom blocks in this project': 'momentan keine nicht verwendeten\nBlöcke in diesem Projekt',
    'thing': 'etwas',
    'think %s for %n secs': 'denke %s für %n Sek.',
    'think %s': 'denke %s',
    'this block': 'diesen Block',
    'this project doesn\'t have any\ncustom global blocks yet': 'in diesem Projekt gibt es noch keine\nglobalen Blöcke',
    'this script': 'dieses Skript',
    'time in milliseconds': 'time in milliseconds',
    'timer': 'Stoppuhr',
    'tip': 'tip',
    'touching %clr ?': 'berühre %clr ?',
    'touching %col ?': 'berühre %col ?',
    'transient': 'nicht persistent',
    'true': 'wahr',
    'turbo mode?': 'Turbomodus?',
    'turn %clockwise %n degrees': 'drehe %clockwise %n Grad',
    'turn %counterclockwise %n degrees': 'drehe %counterclockwise %n Grad',
    'turn all pen trails and stamps\ninto a new background for the stage': 'turn all pen trails and stamps\ninto a new background for the stage',
    'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite': 'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite',
    'turn pen trails into new background...': 'turn pen trails into new background...',
    'turn pen trails into new costume...': 'turn pen trails into new costume...',
    'turnLeft': 'turnLeft',
    'turnRight': 'turnRight',
    'turtle': 'turtle',
    'turtleOutline': 'turtleOutline',
    'type of %s': 'Typ von %s',
    'u': 'u',
    'uncheck for default\nGUI design': 'uncheck for default\nGUI design',
    'uncheck for greater speed\nat variable frame rates': 'ausschalten, um Animationen \ndynamischer auszuführen',
    'uncheck for less contrast\nmulti-column list views': 'uncheck for less contrast\nmulti-column list views',
    'uncheck for lower resolution,\nsaves computing resources': 'uncheck for lower resolution,\nsaves computing resources',
    'uncheck for round ends of lines': 'auschalten für runde\nPinselstrichenden',
    'uncheck for smooth\nscaling of vector costumes': 'uncheck for smooth\nscaling of vector costumes',
    'uncheck to allow\nscript reentrance': 'verhindert, dass unvollendete\nSkripte erneut gestartet werden',
    'uncheck to allow dropped\nreporters to kick out others': 'ausschalten um das \"Rauskicken\"\nvon platzierten Blöcken\nzu ermöglichen',
    'uncheck to always show (+) symbols\nin block prototype labels': 'ausschalten, um (+) Zeichen\nim Blockeditor zu verbergen',
    'uncheck to confine auto-wrapping\nto top-level block stacks': 'uncheck to confine auto-wrapping\nto top-level block stacks',
    'uncheck to disable\nIDE animations': 'ausschalten um IDE-\nAnimationen zu verhindern',
    'uncheck to disable\nblock to text mapping features': 'uncheck to disable\nblock to text mapping features',
    'uncheck to disable\ninput sliders for\nentry fields': 'ausschalten um Schieber\nin Eingabefeldern zu verhindern',
    'uncheck to disable\nkeyboard editing support': 'uncheck to disable\nkeyboard editing support',
    'uncheck to disable\nmulti-column list views': 'uncheck to disable\nmulti-column list views',
    'uncheck to disable\nproject data in URLs': 'uncheck to disable\nproject data in URLs',
    'uncheck to disable\nsaving linked sublist identities': 'uncheck to disable\nsaving linked sublist identities',
    'uncheck to disable\nsprite composition': 'uncheck to disable\nsprite composition',
    'uncheck to disable\nsprite inheritance features': 'uncheck to disable\nsprite inheritance features',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices': 'ausschalten um die virtuelle\nTastatur auf mobilen Geräten\nzu sperren',
    'uncheck to disable alternating\ncolors for nested block': 'ausschalten verhindert abwechselnde\nFarbnuancen in Blöcken',
    'uncheck to disable dynamic\nlabels for variadic inputs': 'ausschalten verhindert Beschriftung\nvon Mehrfacheingaben',
    'uncheck to disable support\nfor first-class sprites': 'uncheck to disable support\nfor first-class sprites',
    'uncheck to run scripts\nat normal speed': 'ausschalten, um Skripte\nnormal auszuführen',
    'uncheck to save contents\nin the project': 'ausschalten, um den Inhalt\nim Projekt zu speichern',
    'uncheck to stop caching\ninputs (for debugging the evaluator)': 'uncheck to stop caching\ninputs (for debugging the evaluator)',
    'uncheck to turn\nblock clicking\nsound off': 'ausschalten um akustisches\nKlicken zu deaktivieren',
    'uncheck to turn off\nvisible stepping': 'uncheck to turn off\nvisible stepping',
    'uncheck to use solid drop\nshadows and highlights': 'abschalten für harte Schatten\nund Beleuchtung',
    'uncheck to use the input\ndialog in short form': 'ausschalten für kurzen\nInput-Dialog',
    'undo the last\nblock drop\nin this pane': 'Setzen des letzten Blocks\nwiderrufen',
    'undo': 'undo',
    'undrop': 'Rückgängig',
    'unicode %n as letter': 'Unicode %n als Buchstabe',
    'unicode of %s': 'Unicode Wert von %s',
    'unringify': 'Entringen',
    'unshared.': 'unshared.',
    'unsharing\nproject...': 'unsharing\nproject...',
    'untitled': 'Unbenannt',
    'unused block(s) removed': 'ungebrauchte Blöcke entfernt',
    'up arrow': 'Pfeil nach oben',
    'url...': 'url...',
    'v': 'v',
    'variables': 'variables',
    'w': 'w',
    'wait %n secs': 'warte %n Sek.',
    'wait until %b': 'warte bis %b',
    'wardrobe': 'wardrobe',
    'warp %c': 'Warp %c',
    'what\'s your name?': 'Wie heißt Du?',
    'when %b': 'Wenn %b',
    'when %greenflag clicked': 'Wenn %greenflag angeklickt',
    'when %keyHat key pressed': 'Wenn Taste %keyHat gedrückt',
    'when I am %interaction': 'Wenn ich %interaction werde',
    'when I receive %msgHat': 'Wenn ich %msgHat empfange',
    'when I start as a clone': 'Wenn ich geklont werde',
    'whirl': 'Wirbel',
    'whitespace': 'Leerraum',
    'with inputs': 'mit Eingaben',
    'world': 'Welt',
    'x position': 'x-Position',
    'x': 'x',
    'y position': 'y-Position',
    'y': 'y',
    'year': 'year',
    'year:': 'year:',
    'your own': 'eigene',
    'z': 'z',
};