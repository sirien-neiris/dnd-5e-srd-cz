module.exports = ['card', {

    validate: function (params) {
        const trim = params.trim();
        if (trim === 'card') {
            return ['card']
        }
        return trim.match(/^card\s+(.*)$/);
    },

    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^card\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
            // opening tag
            var header = m !== null ? '<p  class="custom-block-card-header">' +m[1] + '</p>\n' : '';
            return '<div class="custom-block-card">' + header + '\n';

        } else {
            // closing tag
            return '</div>\n';
        }
    }
}];