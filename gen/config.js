let config = {
    namespaces: [
        {
            name: 'grimoar-jmen',
            applySnippets: [
                { snippet: 'kouzla', headerOffset: 2 },
            ],
            template: [
                './gen/templates/grimoar-jmen.md',
            ],
            distFolder: './src/grimoar',
        },
        {
            name: 'grimoar-moci',
            applySnippets: [
                { snippet: 'kouzla', headerOffset: 3 },
            ],
            template: [
                './gen/templates/grimoar-moci.md',
            ],
            distFolder: './src/grimoar',
        },
        {
            name: 'soupis-carodej',
            applySnippets: [
                { snippet: 'povolani', headerOffset: 1 },
                { snippet: 'kouzla', headerOffset: 3 },
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