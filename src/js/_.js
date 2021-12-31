$(this).ready(() => {
    $.get('http://localhost/mimo-study/flex-box-campo-futebol/src/index.html', x => $('.codigo-html').text(x.slice(0, 299).concat('...')), 'text');

    $.get('http://localhost/mimo-study/flex-box-campo-futebol/src/css/style.css', x => $('.codigo-css').text(x.slice(0, 260).concat('...')), 'text');
})