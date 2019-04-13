const replace = require('replace-in-file');



let files = [
    './src/**/*.md'
];

const regexStart = new RegExp(':::[ ]*card[^\n]*\n', 'gm');
const optionsStartTag = {
    files: files,
    from: regexStart,
    to: (match) => {
        console.log('start: '+match);
        let header = match.replace('card','')
            .replace(':::','')
            .trim();
        return `<Card header="${header}">\n\n`;
    },
};

const changes1 = replace.sync(optionsStartTag);

const regexEnd = new RegExp(':::[^\n]*\n', 'gm');
const optionsEndTag = {
    files: files,
    from: regexEnd,
    to: (match) => {
        console.log('end: '+match);
        return `\n</Card>\n`;
    },
};
const changes2 = replace.sync(optionsEndTag);


