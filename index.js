window.onload = function() {
    const word = document.getElementById('word');
    const transform = document.getElementById('transform');

    transform.onclick = () => {
        const str = word.value;
        /*
        if (str !== '') {
           console.log(str.replace(/e/gi, 'o'));
        }
        */
        str !== '' ? console.log(str.replace(/e/gi, 'o')) : '';
    }
};