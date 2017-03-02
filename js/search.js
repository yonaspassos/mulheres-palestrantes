var $search = $('.search'),
    $cards = $('.card'),
    filter;

$search.keyup(function(e) {
    filter = this.value;
    filterCards($cards, filter);
});

var filterCards = debounce(function($cards, filter) {
    $cards.find("h3:not(:Contains(" + filter + "))").parents('.card').hide();
    $cards.find("p:not(:Contains(" + filter + "))").parents('.card').hide();
    $cards.find("li:not(:Contains(" + filter + "))").parents('.card').hide();

    $cards.find("h3:Contains(" + filter + ")").parents('.card').show();
    $cards.find("p:Contains(" + filter + ")").parents('.card').show();
    $cards.find("li:Contains(" + filter + ")").parents('.card').show();
}, 200);

// Cria um Contains para que ele seja case-insensitive e ignore acentuação
jQuery.expr[':'].Contains = function(element, i, arrFilter) {
    var textContent = removeAccents(element.textContent || ""),
        innerText = removeAccents(element.innerText || ""),
        filter = removeAccents(arrFilter[3] || "");

    return (textContent || innerText).indexOf(filter) >= 0;
};

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function removeAccents(text) {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&aacute;/g, 'a')
        .replace(/&eacute;/g, 'e')
        .replace(/&iacute;/g, 'i')
        .replace(/&oacute;/g, 'o')
        .replace(/&uacute;/g, 'u')
        .replace(/&ccedil;/g, 'c')
        .replace(/&atilde;/g, 'a')
        .replace(/&otilde;/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[áàã]/g, 'a')
        .replace(/[éèê]/g, 'e')
        .replace(/[íî]/g, 'i')
        .replace(/[óòôõ]/g, 'o')
        .replace(/[úùû]/g, 'u')
        .toLowerCase();
};

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
