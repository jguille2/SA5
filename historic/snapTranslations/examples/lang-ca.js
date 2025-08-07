/*

    lang-ca.js

    Catalan translation for SNAP!

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

SnapTranslator.dict.ca = {

    // Translation meta info - appering in the language menu

    'language_name': 'Català',
    'language_translator': 'Bernat Romagosa Carrasquer, Joan Guillén i Pelegay',
    'translator_e-mail': 'bernat@arduino.org, jguille2@xtec.cat',
    'last_changed': '2016-12-12',

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
    ' or before': ' o abans de',
    '%att of %spr': '%att de %spr',
    '%b and %b': '%b i %b',
    '%b or %b': '%b o %b',
    '%fun of %n': '%fun de %n',
    '%l contains %s': '%l conté %s',
    '%n mod %n': 'residu de dividir %n entre %n',
    '%s in front of %l': 'afegeix %s davant de %l',
    '%txtfun of %s': '%txtfun de %s',
    '\'\ndoes not exist in this context': '\'\nno existeix en aquest context',
    '(-90) left': '(-90) esquerra',
    '(0) up': '(0) amunt',
    '(180) down': '(180) avall',
    '(90) right': '(90) dreta',
    '(empty)': '(buit)',
    '(in a new window)': '(dins una nova finestra)',
    '(temporary)': '(temporal)',
    'About Snap': 'Sobre Snap',
    'About...': 'Sobre Snap!',
    'Account created.': 'Compte creat.',
    'An e-mail with your password\nhas been sent to the address provided': 'S\'ha enviat un correu electrònic\namb la contrasenya d\'accés.',
    'Animations': 'Animacions',
    'Any\n(unevaluated)': 'Qualsevol\n(sense evaluar)',
    'Any type': 'Qualsevol tipus',
    'Apply': 'Aplica',
    'April': 'abril',
    'Are you sure you want to delete': 'Segur que vols esborrar',
    'Are you sure you want to publish': 'Segur que vols compartir-ho?',
    'Are you sure you want to unpublish': 'Segur que vols deixar-ho de compartir?',
    'August': 'agost',
    'Back...': 'Enrere...',
    'Backgrounds': 'Fons',
    'Birth date:': 'Data de naixement:',
    'Block Editor': 'Editor de blocs',
    'Blocks': 'Blocs',
    'Blurred shadows': 'Ombres suavitzades',
    'Boolean\n(unevaluated)': 'Booleà\n(sense evaluar)',
    'Boolean (T/F)': 'Booleà (C/F)',
    'Boolean': 'Booleà',
    'Browser': 'Navegador',
    'Brush size': 'Gruix del pinzell',
    'Cache Inputs': 'Entrades a la Memòria Cau',
    'Cancel': 'Cancel·la',
    'Change Password': 'Canvia la contrasenya',
    'Change Password...': 'Canvia la contrassenya…',
    'Change block': 'Canvia el bloc',
    'Clicking sound': 'So de clic',
    'Cloud': 'Núvol',
    'Code mapping': 'Mapeig del codi',
    'Codification support': 'Suport pel mapeig de codi',
    'Command\n(C-shape)': 'Comanda\n(en forma de C)',
    'Command\n(inline)': 'Comanda\n(inserida)',
    'Command': 'Comanda',
    'Constrain proportions of shapes?\n(you can also hold shift)': 'Manté la proporció de les formes?\n(també es pot fer prement la tecla \"majúscules\")',
    'Contents': 'Continguts',
    'Contributors': 'Col·laboradors',
    'Control': 'Control',
    'Costume Editor': 'Editor de vestits',
    'Costumes': 'Vestits',
    'Create input name': 'Crea una ranura',
    'Credits...': 'Crèdits...',
    'December': 'desembre',
    'Default Value:': 'Valor predeterminat:',
    'Default': 'Per defecte',
    'Delete Custom Block': 'Esborra el bloc personalitzat',
    'Delete Project': 'Esborra un projecte',
    'Delete a variable': 'Esborra una variable',
    'Delete': 'Esborra',
    'Download source': 'Descarrega el codi font',
    'Dragging threshold...': 'Llindar per l\'arrossegament…',
    'Dynamic input labels': 'Etiquetes de camps d\'entrada dinàmics',
    'E-mail address of parent or guardian:': 'Adreça de correu electrònic del tutor o educador:',
    'E-mail address:': 'Adreça de correu electrònic:',
    'ERROR: INVALID PASSWORD': 'ERROR: CONTRASENYA NO VÀLIDA',
    'EXPERIMENTAL! check to enable\n live custom control structures': 'EXPERIMENTAL! marqueu per habilitar\nel control dinàmic d\'estructures personalitzades.',
    'EXPERIMENTAL! uncheck to disable live\ncustom control structures': 'EXPERIMENTAL! desmarqueu per deshabilitar\nel control dinàmic d\'estructures personalitzades.',
    'Edit input name': 'Edita la ranura',
    'Edit label fragment': 'Edita el fragment d\'etiqueta',
    'Empty': 'Buit',
    'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).': 'Introdueix el codi que correspon a la definició del bloc. Tria els teus\npropis noms (ignorant els que es mostren).',
    'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.': 'Introdueix el codi que correspon a la definició del bloc. Utilitza els noms\ndels paràmetres per mostrar-los i <body> per referenciar el codi generat per la definició del cos',
    'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.': 'Introdueix el codi que correspon a l\'operació del bloc (normalment només una funció). Utilitza <#n> per referenciar els paràmetres actuals tal com es mostren.',
    'Enter one option per line.Optionally use \"=\" as key/value delimiter\ne.g.\n   the answer=42': 'Escriviu cada opció en una línia.\nTambé podeu fer servir \"=\" com a separador entre\nclau i valor, per exemple resposta=42',
    'Eraser tool': 'Goma d\'esborrar',
    'Examples': 'Exemples',
    'Export Project As...': 'Exporta el Projecte com…',
    'Export all scripts as pic...': 'Exporta tots els programes com una imatge…',
    'Export blocks': 'Exporta blocs',
    'Export blocks...': 'Exporta els blocs...',
    'Export project as plain text...': 'Exporta el projecte...',
    'Export project...': 'Exporta el projecte...',
    'Export summary with drop-shadows...': 'Exporta el resum amb les imatges ombrejades…',
    'Export summary...': 'Exporta el resum...',
    'February': 'febrer',
    'Fetching project\nfrom the cloud...': 'Descarregant el projecte\ndes del núvol…',
    'Fill a region': 'Ompla l\'àrea',
    'Filled Ellipse\n(shift: circle)': 'El·lipse plena\n(majúscula: cercle)',
    'Filled Rectangle\n(shift: square)': 'Rectangle ple\n(majúscula: quadrat)',
    'First-Class Sprites': 'Objectes de primera classe',
    'Flat design': 'Disseny pla',
    'Flat line ends': 'Línies del llapis rectes',
    'For all Sprites': 'Per a tots els objectes',
    'Header mapping': 'Mapeig de la capçalera',
    'Hello!': 'Hola!',
    'Help': 'Ajuda',
    'Hmm...': 'Hmm...',
    'I have read and agree\nto the Terms of Service': 'He llegit i accepto\nles condicions d\'ús',
    'Import blocks': 'Importa blocs',
    'Import library': 'Importa una llibreria',
    'Import sound': 'Importa sons',
    'Import tools': 'Importa eines',
    'Import': 'Importa',
    'Import...': 'Importa...',
    'Inheritance support': 'Suport a l\'herència d\'objectes',
    'Input Names:': 'Noms d\'entrades:',
    'Input Slot Options': 'Opcions de la ranura',
    'Input name': 'Nom de la ranura',
    'Input sliders': 'Lliscadors d\'entrada',
    'January': 'gener',
    'JavaScript function ( %mult%s ) { %code }': 'JavaScript function ( %mult%s ) { %code }',
    'July': 'juliol',
    'June': 'juny',
    'Keyboard Editing': 'Edició per teclat',
    'Kind of': 'Espècie de',
    'Language...': 'Llengua...',
    'Libraries...': 'Llibreries...',
    'License': 'Llicència',
    'License...': 'Llicència...',
    'Line tool\n(shift: vertical/horizontal)': 'Línies\n(majúscula: vertical/horitzontal)',
    'List': 'Llista',
    'Lists': 'Llistes',
    'Live coding support': 'Suport per a la programació dinàmica',
    'Login...': 'Inicia la sessió...',
    'Logout': 'Surt',
    'Long form input dialog': 'Força el diàleg de selecció de tipus',
    'Looks': 'Aparença',
    'Make a block': 'Crea un bloc',
    'Make a variable': 'Crea una variable',
    'March': 'març',
    'May': 'maig',
    'Message name': 'Nom del missatge',
    'Modules...': 'Mòduls...',
    'Motion': 'Moviment',
    'Multiple inputs (value is list of inputs)': 'Entrades múltiples (el valor és una llista d\'entrades)',
    'Nested auto-wrapping': 'Engloba blocs interns',
    'New Project': 'Nou projecte',
    'New password:': 'Nova contrasenya:',
    'New': 'Nou',
    'No': 'No',
    'November': 'novembre',
    'Number': 'Nombre',
    'OK': 'D\'acord',
    'Object': 'Objecte',
    'October': 'octubre',
    'Ok': 'D\'acord',
    'Old password:': 'Contrasenya actual:',
    'Open un Project': 'Obre projecte',
    'Open': 'Obre',
    'Open...': 'Obre...',
    'Opening project...': 'Obrint el projecte…',
    'Operators': 'Operadors',
    'Other': 'Altres',
    'Paint Editor': 'Editor d\'imatges',
    'Paint a new costume': 'Pinta un nou vestit.',
    'Paintbrush tool\n(free draw)': 'Pinzell\n(dibuix lliure)',
    'Part of': 'Part de',
    'Parts': 'Parts',
    'Password:': 'Contrasenya:',
    'Pen': 'Llapis',
    'Persist linked sublist IDs': 'Desar mantenint les ID enllaçades a les subllistes',
    'Pipette tool\n(pick a color anywhere)': 'Capturador de color\n(captura el color de qualsevol lloc)',
    'Plain prototype labels': 'Etiquetes de prototip simples',
    'Play sound': 'Toca el so',
    'Play': 'Toca',
    'Predicate': 'Predicat',
    'Prefer empty slot drops': 'Dóna preferència a les ranures buides',
    'Prefer smooth animations': 'Suavitza les animacions',
    'Privacy...': 'Privacitat…',
    'Project Notes': 'Notes del projecte',
    'Project URLs': 'URL del projecte',
    'Project notes...': 'Notes del projecte...',
    'Rasterize SVGs': 'Transforma SVG en mapa de bits',
    'Reference manual': 'Manual de referència',
    'Remove unused blocks': 'Esborra blocs no utilitzats',
    'Repeat new password:': 'Torna a escriure la nova contrasenya:',
    'Replace the current project with a new one?': 'Vols substituir el projecte actual per un de nou?',
    'Reporter': 'Reportador',
    'Reset Password...': 'Recupera la contrasenya…',
    'Reset password': 'Recupera la contrasenya',
    'Retina display support': 'Suport per pantalles Retina',
    'SVG costumes are\nnot yet fully supported\nin every browser': 'els vestits SVG encara\no són suportatsper tots els navegadors',
    'Save As...': 'Anomena i desa...',
    'Save Project As...': 'Anomena i desa el projecte...',
    'Save Project': 'Desa el Projecte',
    'Save to disk': 'Desa al disc',
    'Save': 'Desa',
    'Saved!': 'Desat!',
    'Saving project\nto the cloud...': 'Desant el projecte\nal núvol…',
    'Script variable name': 'Nom de la variable de programa',
    'Scripts': 'Programes',
    'Select a costume from the media library': 'Trieu un vestit de la biblioteca',
    'Select a sound from the media library': 'Trieu un so de la biblioteca',
    'Select categories of additional blocks to add to this project.': 'Trieu conjunts de blocs addicionals per afegir a aquest projecte.',
    'Sensing': 'Sensors',
    'September': 'setembre',
    'Service:': 'Servei:',
    'Set the rotation center': 'Estableix el centre de rotació',
    'Share Project': 'Comparteix el Projecte',
    'Share': 'Comparteix',
    'Sign in': 'Inicia la sessió',
    'Sign up': 'Registra\'t',
    'Signup': 'Registra\'t',
    'Signup...': 'Registra\'t...',
    'Single input.': 'Entrada única.',
    'Slider maximum value': 'Valor màxim del lliscador...',
    'Slider minimum value': 'Valor mínim del lliscador...',
    'Snap! website': 'Web de Snap!',
    'Snap!Cloud': 'Núvol d\'Snap!',
    'Sound': 'So',
    'Sounds': 'Sons',
    'Sprite Nesting': 'Ancoratge d\'objectes',
    'Sprite': 'Objecte',
    'Stage height': 'Alçada de l\'escenari',
    'Stage selected:\nno motion primitives': 'Esteu a l\'Escenari:\nno hi ha primitives de moviment\ndisponibles',
    'Stage size': 'Mida de l\'escenari',
    'Stage size...': 'Mida de l\'escenari...',
    'Stage width': 'Amplada de l\'escenari',
    'Stage': 'Escenari',
    'Stop sound': 'Atura el so',
    'Stop': 'Atura',
    'Stroked Ellipse\n(shift: circle)': 'El·lipse traçada\n(majúscula: circumferència)',
    'Stroked Rectangle\n(shift: square)': 'Rectangle traçat\n(majúscula: quadrat)',
    'Switch back to user mode': 'Torna a mode d\'usuari',
    'Switch to dev mode': 'Canvia a mode desenvolupador',
    'Table lines': 'Línies de taules',
    'Table support': 'Edició de taules',
    'Table view': 'Vista de tabla',
    'Terms of Service...': 'Condicions d\'ús…',
    'Text': 'Text',
    'Thread safe scripts': 'Fil d\'execució segur',
    'Title text': 'Text del títol',
    'Translations': 'Traduccions',
    'Translators...': 'Traductors',
    'Turbo mode': 'Mode turbo',
    'Turtle': 'Tortuga',
    'Unshare Project': 'Deixa de compartir el Projecte',
    'Unshare': 'Deixa de compartir',
    'Untitled': 'Sense títol',
    'Unused blocks...': 'Blocs no utilitzats...',
    'Updating\nproject list...': 'Actualizant \nla llista de projectes…',
    'Upvar - make internal variable visible to caller': 'Variable interna visible des de l\'exterior',
    'User name must be four\ncharacters or longer': 'El nom d\'usuari ha de tenir\nalmenys 4 caràcters.',
    'User name:': 'Nom d\'usuari:',
    'Variable name': 'Nom de variable',
    'Variables': 'Variables',
    'Virtual keyboard': 'Teclat virtual',
    'Visible stepping': 'Monitoritzar pas a pas',
    'Yes': 'Sí',
    'You are not logged in': 'No esteu validats',
    'Zebra coloring': 'Coloració en zebra',
    'Zoom blocks': 'Canvia la mida dels blocs',
    'Zoom blocks...': 'Mida dels blocs...',
    'a variable of name \'': 'una variable de nom \'',
    'a': 'a',
    'abs': 'valor absolut',
    'acos': 'acos',
    'add %s to %l': 'afegeix %s a %l',
    'add a new Turtle sprite': 'afegeix un nou objecte',
    'add a new sprite': 'afegeix un nou objecte',
    'add comment here...': 'afegeix un comentari aquí...',
    'add comment': 'afegeix un comentari',
    'alert %mult%s': 'alerta: %mult%s',
    'all but first of %l': '%l sense el primer element',
    'all but this script': 'tot excepte aquest programa',
    'all': 'tot',
    'anchor': 'àncora',
    'answer': 'resposta',
    'any key': 'qualsevol tecla',
    'any message': 'qualsevol missatge',
    'any': 'qualsevol',
    'arrange scripts\nvertically': 'alinea els programes\nverticalment',
    'arrowDown': 'fletxa avall',
    'arrowDownOutline': 'contorn de fletxa avall',
    'arrowLeft': 'fletxa a l\'esquerra',
    'arrowLeftOutline': 'contorn de fletxa a l\'esquerra',
    'arrowRight': 'fletxa a la dreta',
    'arrowRightOutline': 'contorn de fletxa a la dreta',
    'arrowUp': 'fletxa amunt',
    'arrowUpOutline': 'contorn de fletxa amunt',
    'asin': 'asin',
    'ask %s and wait': 'pregunta %s i espera',
    'atan': 'atan',
    'b': 'b',
    'big (2x)': 'gran (2x)',
    'block deletion dialog text': 'Segur que vols esborrar la definició\nd\'aquest bloc?',
    'block variables': 'variables del bloc',
    'block variables...': 'variables del bloc…',
    'blocks': 'blocs',
    'brightness': 'brillantor',
    'broadcast %msg and wait': 'Envia a tots %msg i espera',
    'broadcast %msg': 'Envia a tots %msg',
    'brush': 'pinzell',
    'build': 'construeix',
    'c': 'c',
    'call %cmdRing w/continuation': 'crida %cmdRing amb continuació',
    'call %repRing %inputs': 'crida %repRing %inputs',
    'can rotate': 'pot girar',
    'ceiling': 'sostre',
    'center x': 'centre x',
    'center y': 'centre y',
    'change %eff effect by %n': 'augmenta l\'efecte %eff en %n',
    'change %var by %n': 'augmenta %var en %n',
    'change pen color by %n': 'augmenta en %n el color del llapis',
    'change pen shade by %n': 'augmenta en %n la intensitat del llapis',
    'change pen size by %n': 'augmenta en %n la mida del llapis',
    'change size by %n': 'augmenta %n la mida',
    'change tempo by %n': 'augmenta el tempo en %n',
    'change x by %n': 'suma %n a x',
    'change y by %n': 'suma %n a y',
    'check for alternative\nGUI design': 'marqueu per obtenir una\ninterfície gràfica alternativa',
    'check for block\nto text mapping features': 'marqueu per habilitar les funcionalitats\nde mapeig de blocs en codi',
    'check for flat ends of lines': 'marqueu per fer que els\nextrems de les línies del\nllapis siguin rectes',
    'check for higher contrast\ntable views': 'marqueu per obtenir un contrast més alt\n a la vista de taula',
    'check for higher resolution,\nuses more computing resources': 'marqueu per obtenir una resolució meś alta;\nimplicarà més consum de memòria..',
    'check for multi-column\nlist view support': 'marqueu per habilitar el suport\na la vista de llista amb multicolumnes',
    'check for smooth, predictable\nanimations across computers': 'marqueu per aconseguir unes animacions\nmés suaus i a velocitat previsible en màquines diferents',
    'check for sprite\ninheritance features': 'marqueu per habilitar les\nfuncionalitats relatives a l\'herència d\'objectes',
    'check to always show slot\ntypes in the input dialog': 'marqueu per a mostrar sempre\nel diàleg de selecció de tipus\nen afegir paràmetres als blocs\npersonalitzats',
    'check to cache inputs\nboosts recursion': 'marqueu per a desar les entrades\na la memòria cau (accelera la recursivitat)',
    'check to disallow\nscript reentrance': 'marqueu per no permetre\nla re-entrada als programes',
    'check to enable\nIDE animations': 'marqueu per habilitar\nles animacions de la interfície',
    'check to enable\ninput sliders for\nentry fields': 'marqueu per habilitar\nels lliscadors per als camps\nd\'entrada',
    'check to enable\nkeyboard editing support': 'marqueu per habilitar\nel suport a l\'edició per teclat',
    'check to enable\nproject data in URLs': 'marqueu per habilitar\nles dades del projecte a la URL',
    'check to enable\nsaving linked sublist identities': 'marqueu per habilitar\nl\'emmagatzament de les ID enllaçades a les subllistes.',
    'check to enable\nsprite composition': 'marqueu per habilitar\nl\'ancoratge d\'objectes',
    'check to enable\nvirtual keyboard support\nfor mobile devices': 'marqueu per habilitar\nel suport per al teclat virtual\nen dispositius mòbils',
    'check to enable alternating\ncolors for nested blocks': 'marqueu per habilitar la coloració\nalternada per a blocs imbricats',
    'check to enable auto-wrapping\ninside nested block stacks': 'marqueu per habilitar\nl\'englobament de blocs interns',
    'check to enable dynamic\nlabels for variadic inputs': 'marqueu per habilitar les\netiquetes dinàmiques en camps variables',
    'check to enable support\n for first-class sprite': 'marqueu per habilitar el suport\nals objectes de primera classe.',
    'check to hide (+) symbols\nin block prototype labels': 'marqueu per amagar el símbol (+)\nen les etiquetes de prototip\nde bloc (a l\'editor de blocs)',
    'check to prevent contents\nfrom being saved': 'activeu l\'opció per evitar que els continguts\nes desin',
    'check to prioritize\nscript execution': 'marqueu per activar el mode de\nprioritat en l\'execució de programes',
    'check to rasterize\nSVGs on import': 'marqueu per transformar els\nSVG a mapa de bits en importar',
    'check to turn\nblock clicking\nsound on': 'marqueu per habilitar\nel so de clic en clicar sobre\nels blocs',
    'check to turn on\n visible stepping (slow)': 'marqueu per monitoritzar la\nprogramació per pas a pas (alenteix)',
    'check to use blurred drop\nshadows and highlights': 'marqueu per utilitzar\nombres i realçats suavitzats',
    'children': 'fill',
    'circle': 'circumferència',
    'circleSolid': 'cercle',
    'clean up': 'neteja',
    'clear graphic effects': 'treu els efectes gràfics',
    'clear': 'neteja',
    'click or drag crosshairs to move the rotation center': 'clica o arrossega la creueta per moure el centre de rotació',
    'clicked': 'es cliqui',
    'clones': 'clons',
    'cloud': 'núvol',
    'cloudGradient': 'núvol amb gradient',
    'cloudOutline': 'contor de núvol',
    'code mapping...': 'mapejant el codi…',
    'code of %cmdRing': 'codi de %cmdRing',
    'code': 'codi',
    'collection': 'col·lecció',
    'color %clr is touching %clr ?': 'color %clr sobre %clr ?',
    'color': 'color',
    'comic': 'còmic',
    'command': 'comanda',
    'comment pic...': 'imatge del comentari…',
    'confetti': 'confeti',
    'console log %mult%s': 'log per consola: %mult%s',
    'cos': 'cos',
    'costume #': 'número de vestit',
    'costume name': 'nom del vestit',
    'costumes tab help': 'podeu importar una imatge des d\'un altre lloc Web o des del\nvostre ordinador arrossegant-la fins aquí',
    'could not connect to:': 'no es pot connectar a:',
    'cr': 'retorn de carro',
    'create a clone of %cln': 'crea un clon de %cln',
    'crosshairs': 'punt de mira',
    'current %dates': '%dates actual',
    'current module versions:': 'versions actuals dels mòduls',
    'current parent': 'pare actual actual',
    'd': 'd',
    'dangling?': 'penjat?',
    'date': 'dia',
    'day of week': 'dia de la setmana',
    'delete %ida of %l': 'esborra %ida de %l',
    'delete %shd': 'esborra %shd',
    'delete block definition...': 'esborra la definició d\'aquest bloc',
    'delete this clone': 'esborra aquest clon',
    'delete': 'esborra\'m',
    'delimiter': 'limitaodr',
    'demo (1.2x)': 'demostració (1.2x)',
    'detach all parts': 'desenganxa totes les parts',
    'detach from': 'desenganxa de',
    'development mode \ndebugging primitives:': 'mode de desenvolupament \nprimitives de depuració',
    'development mode': 'mode de desenvolupament',
    'direction': 'direcció',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones': 'canvia els menús contextuals\nprimitius de Morphic\nper menús més amigables',
    'disconnected.': 'desconnectats.',
    'distance to %dst': 'distància a %dst',
    'don\'t rotate': 'no gira',
    'down arrow': 'fletxa avall',
    'draggable': 'arrossegable',
    'dragging threshold': 'llindar per l\'arrossegament',
    'dropped': 'es deixi anar',
    'duplicate': 'duplica\'m',
    'e': 'e',
    'e^': 'e^',
    'edge': 'vora',
    'edit rotation point only...': 'edita només el centre de rotació…',
    'edit': 'edita',
    'edit...': 'edita...',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!': 'habilita els menús\ncontextuals de\nMorphic i inspectors,\nmode expert!',
    'entering development mode.\n\nerror catching is turned off,\nuse the browser\'s web console\nto see error messages.': 'entrant en mode desenvolupador.\n\ndeshabilitada la captura d\'errades,\nutilitzeu la consola del navegador\nper veure els errors.',
    'entering user mode': 'entrant en mode d\'usuari',
    'eraser': 'goma d\'esborrar',
    'expecting': 'esperant',
    'experimental -\nunder construction': 'Experimental -\nen construcció',
    'export project as cloud data...': 'exporta el projecte com a dades en el núvol…',
    'export project media only...': 'exporta només els sons i imatges del projecte…',
    'export project without media...': 'exporta el projecte sense sons ni imatges…',
    'export': 'exporta',
    'export...': 'exporta...',
    'f': 'f',
    'false': 'fals',
    'file menu import hint': 'Importa projectes, blocs,\nimatges o sons',
    'file': 'arxiu',
    'fill': 'omple',
    'filtered for %clr': 'filtrat per a %clr',
    'find blocks...': 'cerca blocs…',
    'find unused global custom blocks\nand remove their definitions': 'cerca els blocs personalitzats globals\nque no s\'utilitzan per poder esborrar-los',
    'fisheye': 'ull de peix',
    'flag': 'bandera',
    'flash': 'llamp',
    'flip ↔': 'invertir ↔',
    'flip ↕': 'invertir ↕',
    'floor': 'part entera',
    'for %upvar in %l %cl': 'per cada %upvar dins %l %cl',
    'for all sprites': 'per a tots els objectes',
    'for this sprite only': 'només per a aquest objecte',
    'forever %c': 'per sempre %c',
    'frames': 'frames',
    'fullScreen': 'pantalla sencera',
    'g': 'g',
    'gears': 'engranatge',
    'ghost': 'fantasma',
    'giant (8x)': 'gegant (8x)',
    'glide %n secs to x: %n y: %n': 'llisca en %n segons fins a x: %n y: %n',
    'go back %n layers': 'vés %n capes darrera',
    'go to %dst': 'vés a %dst',
    'go to front': 'vés al front',
    'go to x: %n y: %n': 'vés a x: %n y: %n',
    'grow': 'augmentar',
    'h': 'h',
    'header mapping...': 'mapejant la capçalera…',
    'header': 'capçalera',
    'hello': 'hola',
    'help': 'ajuda',
    'help...': 'ajuda...',
    'hide primitives': 'amaga els blocs primitius',
    'hide variable %var': 'amaga la variable %var',
    'hide': 'amaga',
    'hour': 'hora',
    'http:// %s': 'http:// %s',
    'huge (4x)': 'immens (4x)',
    'i': 'i',
    'if %b %c else %c': 'si %b llavors %c si no %c',
    'if %b %c': 'si %b llavors %c',
    'if on edge, bounce': 'rebota en tocar una vora',
    'import a sound from your computer\nby dragging it into here': 'podeu importar un so des del vostre ordinador\narrossegant-lo fins aquí',
    'import...': 'importa...',
    'input list:': 'llista d\'entrades:',
    'input names:': 'noms d\'entrades:',
    'input(s), but getting': 'com a entrada(s), però s\'ha rebut',
    'insert %s at %idx of %l': 'insereix %s a la posició %idx de %l',
    'is %s a %typ ?': 'és %s un %typ ?',
    'is %s identical to %s ?': 'és %s idèntic a %s ?',
    'item %idx of %l': 'element %idx de %l',
    'items': 'elements',
    'j': 'j',
    'join %words': 'unir %words',
    'jukebox': 'sons',
    'k': 'k',
    'key %key pressed?': 'tecla %key premuda?',
    'l': 'l',
    'large': 'gran',
    'last changed': 'el darrer modificat',
    'last': 'últim',
    'launch %cmdRing %inputs': 'llança %cmdRing %inputs',
    'left arrow': 'fletxa esquerra',
    'length of %l': 'longitud de %l',
    'length of %s': 'longitud de %s',
    'length: ': 'longitud: ',
    'letter %n of %s': 'lletra %n de %s',
    'letter': 'lletra',
    'line': 'línia',
    'list %exp': 'llista %exp',
    'list view...': 'vista en format de llista...',
    'list': 'llista',
    'ln': 'ln',
    'load the official library of\npowerful blocks': 'Carrega la llibreria\noficial de blocs avançats',
    'login': 'autenticació',
    'm': 'm',
    'make a block...': 'crea un bloc...',
    'make a copy\nand pick it up': 'crea una còpia\ni fes-la servir',
    'map %cmdRing to %codeKind %code': 'mapeja %cmdRing com a %codeKind %code',
    'map %codeListPart of %codeListKind to code %code': 'mapeja %codeListPart de %codeListKind no com a codi %code',
    'map %repRing over %l': 'mapeja %repRing sobre %l',
    'map String to code %code': 'mapeja un text com a codi %code',
    'message': 'missatge',
    'middle': 'mig',
    'minute': 'minut',
    'monstrous (10x)': 'monstruós (10x)',
    'month': 'mes',
    'mosaic': 'mosaic',
    'mouse down?': 'ratolí clicat?',
    'mouse x': 'ratolí x',
    'mouse y': 'ratolí y',
    'mouse-departed': 'el ratolí surti d\'',
    'mouse-entered': 'el ratolí toqui',
    'mouse-pointer': 'punter del ratolí',
    'move %n steps': 'mou-te %n passos',
    'move': 'mou',
    'my %get': 'atribut %get',
    'myself': 'mi mateix',
    'n': 'n',
    'name': 'nom',
    'negative': 'negatiu',
    'neighbors': 'veins',
    'new...': 'nou...',
    'next costume': 'següent vestit',
    'none': 'cap bloc',
    'normal (1x)': 'normal (1x)',
    'normal': 'normal',
    'normalScreen': 'pantalla normal',
    'normalStage': 'escenari normal',
    'not %b': 'no %b',
    'now connected.': 'heu entrat.',
    'number': 'nombre',
    'o': 'o',
    'octagon': 'octàgon',
    'only duplicate this block': 'duplica només aquest bloc',
    'only face left/right': 'només mira a esquerra/dreta',
    'open a new browser browser window\n with a summary of this project': 'Obre una finestra del navegador\namb un resum d\'aquest projecte',
    'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers': 'Obre una finestra del navegador\namb un resum del projecte i\namb totes les imatges ombrejades.\n No tots els navegadors suporten aquesta funcionalitat',
    'open a new window\nwith a picture of all scripts': 'obre una nova finestra\namb la imatge d\'aquests programes',
    'open a new window\nwith a picture of both\nthis script and its result': 'obre una finestra\n amb el programa i el resultat',
    'open a new window\nwith a picture of the stage': 'obre una nova finestra\namb una foto de l\'escenari',
    'open a new window\nwith a picture of this comment': 'obre una finestra\namb una imatge del comentari',
    'open a new window\nwith a picture of this script': 'obre una nova finestra\namb una imatge d\'aquest programa',
    'open in another dialog...': 'obriu en un altre formulari…',
    'open in dialog...': 'obre en una finestra...',
    'open shared project from cloud...': 'obre un projecte compartit en el núvol…',
    'options...': 'opcions…',
    'other clones': 'altres clons',
    'other scripts in sprite': 'els altres programes d\'aquest objecte',
    'other sprites': 'els altres objectes',
    'p': 'p',
    'paint a new sprite': 'Pinta un nou objecte',
    'paintbucket': 'pot de pintura',
    'parameters': 'paràmetres',
    'parent': 'pare',
    'parent...': 'pare…',
    'parts': 'parts',
    'password has been changed.': 's\'ha canviat la contrasenya.',
    'password must be six\ncharacters or longer': 'la contrasenya ha de tenir\nalmenys sis caràcters.',
    'passwords do\nnot match': 'les contrasenyes\nno coincideixen.',
    'pause all %pause': 'pausa-ho tot %pause',
    'pause': 'pausa',
    'pen down': 'baixa el llapis',
    'pen trails': 'dibuix sobre l\'escenari',
    'pen up': 'puja el llapis',
    'pen': 'llapis',
    'pic...': 'exporta com a imatge...',
    'pick random %n to %n': 'nombre a l\'atzar entre %n i %n',
    'pipette': 'pipeta',
    'pixelate': 'pixelat',
    'play note %n for %n beats': 'toca la nota %n durant %n temps',
    'play sound %snd until done': 'toca el so %snd fins que acabi',
    'play sound %snd': 'toca el so %snd',
    'please agree to\nthe TOS': 's\'han d\'acceptarles condicions d\'ús.',
    'please fill out\nthis field': 's\'ha d\'omplir aquest camp.',
    'please provide a valid\nemail address': 's\'ha de introduir un correu vàlid.',
    'point in direction %dir': 'apunta en direcció %dir',
    'point towards %dst': 'apunta cap a %dst',
    'pointRight': 'punter',
    'poster': 'póster',
    'predicate': 'predicat',
    'presentation (1.4x)': 'presentació (1.4x)',
    'pressed': 'es premi',
    'processes': 'processos',
    'q': 'q',
    'r': 'r',
    'read-only': 'només de lectura',
    'rectangle': 'rectangle',
    'rectangleSolid': 'rectàngle sòlid',
    'redo the last undone block drop in this pane': 'refés l\'últim moviment\nde blocs desfet',
    'redrop': 'refés',
    'relabel...': 'blocs similars...',
    'remove block variables...': 'resborra les variables del bloc…',
    'rename background': 'canvia el nom del fons',
    'rename costume': 'canvia el nom del vestit',
    'rename sound': 'canvia el nom del so',
    'rename': 'canvia de nom',
    'rename...': 'canvia el nom...',
    'repeat %n %c': 'repeteix %n vegades %c',
    'repeat until %b %c': 'repeteix fins %b %c',
    'replace item %idx of %l with %s': 'substitueix l\'element %idx de %l per %s',
    'report %s': 'retorna %s',
    'reporter': 'reportador',
    'reset columns': 'reinicialitza les columnes',
    'reset timer': 'reinicia el cronòmetre',
    'rest for %n beats': 'fes silenci durant %n temps',
    'right arrow': 'fletxa dreta',
    'ringify': 'encapsula\'m',
    'robot': 'robot',
    'rotation x': 'rotació x',
    'rotation y': 'rotació y',
    'round %n': 'arrodoneix %n',
    'run %cmdRing %inputs': 'executa %cmdRing %inputs',
    'run %cmdRing w/continuation': 'executa %cmdRing amb continuació',
    's': 's',
    'saturation': 'saturació',
    'save %imgsource as costume named %s': 'desa %imgsource com a vestit amb nom %s',
    'save project data as XML\nto your downloads folder': 'Exporta el projecte en un arxiu\nen format XML',
    'saved.': 'desat.',
    'say %s for %n secs': 'digues %s durant %n segons',
    'say %s': 'digues %s',
    'screenshot': 'captura de pantalla',
    'script pic with result...': 'imatge del programa i del resultat…',
    'script pic...': 'mostra la meva imatge...',
    'script variables %scriptVars': 'variables de programa %scriptVars',
    'scripts pic...': 'exporta com a imatge...',
    'second': 'segon',
    'select': 'selecciona',
    'self': 'un mateix',
    'set %eff effect to %n': 'fixa l\'efecte %eff a %n',
    'set %var to %s': 'assigna a %var el valor %s',
    'set pen color to %clr': 'fixa el color del llapis a %clr',
    'set pen color to %n': 'fixa el color del llapis a %n',
    'set pen shade to %n': 'fixa la intensitat del llapis a %n',
    'set pen size to %n': 'fixa la mida del llapis en %n',
    'set size to %n %': 'fixa la mida a %n %',
    'set tempo to %n bpm': 'fixa el tempo a %n',
    'set turbo mode to %b': 'posa el mode turbo a %b',
    'set x to %n': 'assigna el valor %n a x',
    'set y to %n': 'assigna el valor %n a y',
    'settings menu prefer empty slots hint': 'marqueu per a fer que les ranures\nbuides tinguin preferència sobre les plenes\na l\'hora de deixar-hi caure peces',
    'shared.': 'compartit.',
    'sharing\nproject...': 'compartint\nel projecte…',
    'show a picture of all scripts\nand block definitions': 'mostra una imatge de tots els programes\ni les definicions de blocs',
    'show all': 'mostra\'ls tots',
    'show global custom block definitions as XML\nin a new browser window': 'exporta els blocs personalitzats que triis\nen un arxiu en format XML',
    'show primitives': 'mostra els blocs primitius',
    'show project data as XML\nin a new browser window': 'mostra tot el projecte en format XML\nen una altra finestra del navegador',
    'show table %l': 'mostra la taula %l',
    'show variable %var': 'mostra la variable %var',
    'show': 'mostra',
    'shrink': 'disminuir',
    'sin': 'sin',
    'size': 'mida',
    'slider max...': 'valor màxim del lliscador...',
    'slider min...': 'valor mínim del lliscador...',
    'slider': 'lliscador',
    'smallStage': 'escenari petit',
    'space': 'espai',
    'specify the distance the hand has to move\nbefore it picks up an object': 'especifica a què distància\ns\'han d\'arrossegar els blocs\nper a que es moguin',
    'speechBubble': 'bafarada',
    'speechBubbleOutline': 'contorn de bafarada',
    'split %s by %delim': 'divideix %s per %delim',
    'sprite': 'objecte',
    'sqrt': 'arrel quadrada',
    'square': 'quadrat',
    'stack size': 'mida de la pila',
    'stage image': 'imatge de l\'escenari',
    'stage': 'escenari',
    'stamp': 'estampa',
    'stay signed in on this computer\nuntil logging out': 'mantenir-me autenticat en aquest ordinador\nfins que em desconnecti',
    'stop %stopChoices': 'atura %stopChoices',
    'stop %stopOthersChoices': 'atura %stopOthersChoices',
    'stop all sounds': 'atura tots els sons',
    'storage': 'emmagatzament',
    'store this project\nin the downloads folder\n(in supporting browsers)': 'desa aquest projecte\na la carpeta de descàrregues\n(en navegadors que ho suportin)',
    'switch to costume %cst': 'canvia el vestit a %cst',
    't': 't',
    'tab': 'tabulador',
    'table view...': 'vista en format de taula...',
    'tan': 'tan',
    'tempo': 'tempo',
    'text': 'text',
    'there are currently no unused\nglobal custom blocks in this project': 'no hi ha cap bloc\npersonalitzat no utilitzat\nen aquest projecte',
    'thing': 'cosa',
    'think %s for %n secs': 'pensa %s durant %n segons',
    'think %s': 'pensa %s',
    'this block': 'aquest block',
    'this project doesn\'t have any\ncustom global blocks yet': 'aquest projecte encara no\nté cap bloc personalitzat',
    'this script': 'aquest programa',
    'time in milliseconds': 'temps (milisegons)',
    'timer': 'cronòmetre',
    'tip': 'punta',
    'touching %clr ?': 'tocant el color %clr ?',
    'touching %col ?': 'tocant %col ?',
    'transient': 'no persistent',
    'true': 'cert',
    'turbo mode?': 'mode turbo?',
    'turn %clockwise %n degrees': 'gira %clockwise %n graus',
    'turn %counterclockwise %n degrees': 'gira %counterclockwise %n graus',
    'turn all pen trails and stamps\ninto a new background for the stage': 'crea un nou fons d\'escenari\namb la imatge dibuixada',
    'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite': 'crea un nou vestit per l\'actual objecte\namb la imatge dibuixada',
    'turn pen trails into new background...': 'crea un nou fons amb la imatge dibuixada…',
    'turn pen trails into new costume...': 'crea un nou vestit amb la imatge dibuixada…',
    'turnLeft': 'girant a l\'esquerra',
    'turnRight': 'girant a la dreta',
    'turtle': 'tortuga',
    'turtleOutline': 'contorn de la tortuga',
    'type of %s': 'tipus de %s',
    'u': 'u',
    'uncheck for default\nGUI design': 'desmarqueu per obtenir la\ninterfície gràfica per defecte',
    'uncheck for greater speed\nat variable frame rates': 'desmarqueu per augmentar la velocitat de\nles animacions fins la màxima capacitat d\'aquesta màquina',
    'uncheck for less contrast\nmulti-column list views': 'desmarqueu per a tenir un baix contrast\na la vista de llista amb multicolumnes',
    'uncheck for lower resolution,\nsaves computing resources': 'desmarqueu per obtenir una resolució més baixa;\nimplicarà menys consum de memòria.',
    'uncheck for round ends of lines': 'desmarqueu per fer que\nels extrems de les línies\ndel llapis siguin arrodonides',
    'uncheck for smooth\nscaling of vector costumes': 'desmarqueu per atenuar\nescalant les imatges vectorials',
    'uncheck to allow\nscript reentrance': 'desmarqueu per permetre\nla re-entrada als programes',
    'uncheck to allow dropped\nreporters to kick out others': 'desmarqueu per a fer que les ranures\nbuides tinguin la mateixa preferència que les\nplenes a l\'hora de deixar-hi caure peces',
    'uncheck to always show (+) symbols\nin block prototype labels': 'desmarqueu per mostrar sempre el\nsímbol (+) en les etiquetes de prototip\nde bloc (a l\'editor de blocs)',
    'uncheck to confine auto-wrapping\nto top-level block stacks': 'desmarqueu per restringir\nl\'englobament de blocs a les piles senceres',
    'uncheck to disable\nIDE animations': 'desmarqueu per deshabilitar\nles animacions de la interfície',
    'uncheck to disable\nblock to text mapping features': 'demarqueu per deshabilitar les\nfuncionalitats de mapeig de blocs en codi',
    'uncheck to disable\ninput sliders for\nentry fields': 'desmarqueu per deshabilitar\nels lliscadors per als camps\nd\'entrada',
    'uncheck to disable\nkeyboard editing support': 'desmarqueu per deshabilitar\nel suport a l\'edició per teclat',
    'uncheck to disable\nmulti-column list views': 'desmarqueu per a deshabilitar\nla vista de llista amb multicolumnes',
    'uncheck to disable\nproject data in URLs': 'desmarqueu per deshabilitar\nles dades del projecte a la URL',
    'uncheck to disable\nsaving linked sublist identities': 'desmarqueu per deshabilitar\nl\'emmagatzament de les ID enllaçades a les subllistes.',
    'uncheck to disable\nsprite composition': 'desmarqueu per deshabilitar\nl\'ancoratge d\'objectes',
    'uncheck to disable\nsprite inheritance features': 'desmarqueu per deshabilitar les\nfuncionalitats relatives a l\'herència d\'objectes',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices': 'desmarqueu per inhabilitar\nel suport per al teclat virtual\nen dispositius mòbils',
    'uncheck to disable alternating\ncolors for nested block': 'desmarqueu per deshabilitar la coloració\nalternada per a blocs imbricats',
    'uncheck to disable dynamic\nlabels for variadic inputs': 'desmarqueu per desactivar les\netiquetes dinàmiques en camps variables',
    'uncheck to disable support\nfor first-class sprites': 'desmarqueu per deshabilitar el suport\nals objectes de primera classe.',
    'uncheck to run scripts\nat normal speed': 'desmarqueu per executar\nels programes a la velocitat\nnormal',
    'uncheck to save contents\nin the project': 'desactiveu l\'opció per desar els continguts\nen el projecte',
    'uncheck to stop caching\ninputs (for debugging the evaluator)': 'desmarqueu per no desar les entrades\na la memòria cau (per depurar l\'avaluador)',
    'uncheck to turn\nblock clicking\nsound off': 'desmarqueu per deshabilitar\nel so de clic en clicar sobre\nels blocs',
    'uncheck to turn off\nvisible stepping': 'desmarqueu per deshabilitar\nla monitorització pas a pas',
    'uncheck to use solid drop\nshadows and highlights': 'desmarqueu per utilitzar\nombres i realçats sòlids',
    'uncheck to use the input\ndialog in short form': 'desmarqueu per a no mostrar\nautomàticament el diàleg de selecció\nde tipus en afegir paràmetres\nals blocs personalitzats',
    'undo the last\nblock drop\nin this pane': 'desfés l\'últim moviment\nde blocs',
    'undo': 'desfés',
    'undrop': 'desfés',
    'unicode %n as letter': 'lletra amb valor Unicode %n',
    'unicode of %s': 'valor Unicode de %s',
    'unringify': 'des-encapsula\'m',
    'unshared.': 'no compartit.',
    'unsharing\nproject...': 'deixant de compartir\nel projecte…',
    'untitled': 'Sense títol',
    'unused block(s) removed': 'bloc(s) personalitzats no utilitzats esborrats',
    'up arrow': 'fletxa amunt',
    'url...': 'URL…',
    'v': 'v',
    'variables': 'variables',
    'w': 'w',
    'wait %n secs': 'espera %n segons',
    'wait until %b': 'espera fins %b',
    'wardrobe': 'vestits',
    'warp %c': 'executa de cop %c',
    'what\'s your name?': 'Com et dius?',
    'when %b': 'quan %b',
    'when %greenflag clicked': 'Quan la %greenflag es premi',
    'when %keyHat key pressed': 'Quan la tecla %keyHat es premi',
    'when I am %interaction': 'Quan %interaction aquest personatge',
    'when I receive %msgHat': 'Quan rebi %msgHat',
    'when I start as a clone': 'quan una còpia meva comenci',
    'whirl': 'remolí',
    'whitespace': 'espai en blanc',
    'with inputs': 'amb entrades',
    'world': 'món',
    'x position': 'posició x',
    'x': 'x',
    'y position': 'posició y',
    'y': 'y',
    'year': 'any',
    'year:': 'any:',
    'your own': 'els teus propis',
    'z': 'z',
};