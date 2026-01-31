const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let current = '';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === 'C') {
            current = '';
            display.value = '';
        } else if (value === '=') {
            current = eval(current);
            display.value = current;
        } else {
            current += value;
            display.value = current;
        }
    });
});
