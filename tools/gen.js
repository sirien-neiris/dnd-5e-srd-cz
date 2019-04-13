const fs = require('fs');
const replace = require('replace-in-file');


const config = require('../gen/config.js');

const args = process.argv;

const namespace = args[2];
const namespaceSettings = config.namespaces.find(settings => settings.name === namespace);
let replaceFiles = [];

if (namespaceSettings !== undefined) {
    console.log(`Zahajuji generování namespace ${namespace}`);
    let files = fs.readdirSync(namespaceSettings.templatesFolder);

    files.forEach(file => {
        let dir = namespaceSettings.distFolder.replace('./src/', './tmp/');
        let dist = dir + '/generated-' + file;
        replaceFiles.push(dist);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.copyFileSync(
            namespaceSettings.templatesFolder + '/' + file,
            dist
        );
        console.log(` - Vytvářím soubor v tmp složce ${dist}`);
    });

    snipetsFiles = fs.readdirSync(namespaceSettings.snipetsFolder);

    console.log(` - Začínám nahrazovat snipety: ${snipetsFiles.length}`);
    snipetsFiles.forEach(file => {
        const regex = new RegExp('<snipet:' + file.replace('.md', '') + '>', 'g');
        replace.sync({
            files: replaceFiles,
            from: regex,
            to: fs.readFileSync(namespaceSettings.snipetsFolder + '/' + file),
        });
        console.log(`    - Nahrayuji snipet ${file}`);
    });

    replaceFiles.forEach(file => {
        let to = file.replace('./tmp/', './src/');
        fs.copyFileSync(
            file,
            to
        );
        console.log(` - Kopíruji soubor z tmp složky ${file} do ${to}`);
        fs.unlinkSync(file);
        console.log(` - Mažu soubor v tmp složce ${file}`);
    });
} else {
    console.log(`Nebyl zadán platný namespace pro generování obsahu`);
}



