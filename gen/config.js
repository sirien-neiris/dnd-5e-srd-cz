let config = {
    namespaces: [
        {
            name: 'grimoar-jmen',
            applySnippets: [
                { snippet: 'kouzla', headerOffset: 0 },
            ],
            template: [
                './gen/templates/grimoar-jmen.md',
            ],
            distFolder: './src/grimoar',
        },
        {
            name: 'grimoar-moci',
            applySnippets: [
                { snippet: 'kouzla', headerOffset: 1 },
            ],
            template: [
                './gen/templates/grimoar-moci.md',
            ],
            distFolder: './src/grimoar',
        },
        {
            name: 'soupis-carodej',
            applySnippets: [
                { snippet: 'povolani', headerOffset: 0 },
                { snippet: 'kouzla', headerOffset: 0 },
            ],
            template: [
                './gen/templates/carodej.md',
            ],
            distFolder: './src/soupis',
        },
    ],
    snippets: {
        kouzla: './gen/snippets/kouzla',
        povolani: './gen/snippets/povolani',
    }
};

module.exports = config;