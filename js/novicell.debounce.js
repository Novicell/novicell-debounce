/**
 * @name Novicell Debounce
 * @author Danni Larsen
 * @argument func, wait, immediate
 * @description Simple function to debounce scroll and resize event
 */

const debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export default debounce;