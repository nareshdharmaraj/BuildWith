/**
 * RTL/LTR Toggle Functionality
 * Handles direction switching and persisting preference
 */

document.addEventListener('DOMContentLoaded', () => {
    const rtlToggleBtn = document.getElementById('rtl-toggle');

    // Check local storage
    if (localStorage.getItem('direction') === 'rtl') {
        enableRTL();
    }

    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('rtl-mode')) {
                disableRTL();
            } else {
                enableRTL();
            }
        });
    }
});

function enableRTL() {
    document.body.classList.add('rtl-mode');
    document.body.setAttribute('dir', 'rtl');
    localStorage.setItem('direction', 'rtl');
    updateRTLIcon();
}

function disableRTL() {
    document.body.classList.remove('rtl-mode');
    document.body.setAttribute('dir', 'ltr');
    localStorage.setItem('direction', 'ltr');
    updateRTLIcon();
}

function updateRTLIcon() {
    // You could swap the icon here if needed, or rotate it
}
