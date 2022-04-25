function num(button) {
    document.getElementById('screen').value += button;
}
function result() {
    x = document.getElementById('screen').value;
    y = eval(x);
    document.getElementById('screen').value = y;
}