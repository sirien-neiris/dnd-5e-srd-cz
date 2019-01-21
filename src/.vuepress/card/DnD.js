module.exports = ['dnd',{

    validate: function (params) {
        const trim = params.trim();
        if (trim === 'dnd') {
            return ['dnd']
        }
        return trim.match(/^dnd\s+(.*)$/);
    },

    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^dnd\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
            // opening tag
            var header = m !== null ? '<p  class="custom-block-card-dnd-header">' +m[1] + '</p>\n' : '';
            return '<div class="custom-block-card-dnd">' + header + '\n';

        } else {
            // closing tag
            return '</div>\n';
        }
    }
}];