window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('scrollPos', window.scrollY);
});

// Restore the scroll position when the page loads
window.addEventListener('load', function() {
    var scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos !== null) {
        window.scrollTo(0, parseInt(scrollPos));
        sessionStorage.removeItem('scrollPos'); // Clear the saved position
    }
});

var slider = document.getElementById('multi6');
var input = document.getElementById('numlen');

slider.addEventListener('input', function() {
    input.value = slider.value;
});

input.addEventListener('input', function() {
    var inputValue = parseInt(input.value);
    if (inputValue >= parseInt(slider.min) && inputValue <= parseInt(slider.max)) {
        slider.value = inputValue;
    }
});

function copyText() {
    var textToCopy = document.getElementById('mypass').innerText;

    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;

    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextarea);

    const note = document.getElementById('note');
    note.innerHTML='Copied!';
}