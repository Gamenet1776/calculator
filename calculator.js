let result = '';

function num(value) {
    result += value;
    document.getElementById('num').value = result;
}

function Clear() {
    result = '';
    document.getElementById('num').value = result;
}

function Calculate() {
    try {
        result = eval(result);
        document.getElementById('num').value = result;
    } catch (error) {
        document.getElementById('num').value = 'Error';
    }
}
