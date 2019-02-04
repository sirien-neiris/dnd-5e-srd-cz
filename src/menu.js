/*
Zde se vyplnují položky menu

Je potřeba vytvořit záznam v dané skupině pro všechny stránky v pořadím v jakém je chceme mít
 */
const menu = {
    '/': [
        {
            title: 'Příručka hráče',
            collapsable: true,
            children: [
                '/prirucka-hrace/predmluva',
                '/prirucka-hrace/uvod',
                '/prirucka-hrace/1-kapitola',
                '/prirucka-hrace/2-kapitola',
                '/prirucka-hrace/3-kapitola',
                '/prirucka-hrace/4-kapitola',
                '/prirucka-hrace/5-kapitola',
                '/prirucka-hrace/6-kapitola',
                '/prirucka-hrace/7-kapitola',
                '/prirucka-hrace/8-kapitola',
                '/prirucka-hrace/9-kapitola',
                '/prirucka-hrace/10-kapitola',
                '/prirucka-hrace/11-kapitola',
                '/prirucka-hrace/dodatek-a',
                '/prirucka-hrace/dodatek-b',
                '/prirucka-hrace/dodatek-c',
                '/prirucka-hrace/dodatek-d',
                '/prirucka-hrace/dodatek-e',
            ]
        },
    ]
};


module.exports = menu;