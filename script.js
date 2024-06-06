document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.getElementById('count');
    const errorDisplay = document.getElementById('error');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const clearButton = document.getElementById('clear');

    let count = 0;

    function updateCountDisplay() {
        countDisplay.textContent = count;
        if (count === 0) {
            clearButton.style.display = 'none';
        } else {
            clearButton.style.display = 'inline-block';
        }
    }

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            errorDisplay.style.visibility = 'hidden';
        } else {
            errorDisplay.textContent = 'Error: Cannot go below 0';
            errorDisplay.style.visibility = 'visible';
        }
        updateCountDisplay();
    });

    incrementButton.addEventListener('click', () => {
        count++;
        errorDisplay.style.visibility = 'hidden';
        updateCountDisplay();
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        updateCountDisplay();
    });

    updateCountDisplay();
});