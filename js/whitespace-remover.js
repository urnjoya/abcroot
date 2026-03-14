function convertCase(mode) {
    const text = document.getElementById('input-text').value;

    if (!text.trim()) {
        showNotification('Please enter some text', 'error');
        return;
    }

    let result = '';
    const words = text.trim().split(/\s+/);

    switch (mode) {
        case 'extra':
            // Replace multiple spaces (including tabs) with single space
            result = text.replace(/\s+/g, ' ').trim();
            break;

        case 'all':
            // Remove ALL whitespace characters
            result = text.replace(/\s+/g, '');
            break;

        case 'trim':
            // Remove only leading and trailing whitespace
            result = text.trim();
            break;

        default:
            result = text;
    }

    document.getElementById('result').textContent = result;
}
function copyResult() {
    const result1 = document.getElementById('result').textContent;
    if (result1 == "Your result will appear here...") {
        showNotification('Please enter some text first', 'error')
        return
    }
    else {
        copyToClipboard(result1, document.getElementById('copy-btn'));
    }
}
function clearAll() {
    if (document.getElementById('input-text').value == '' && document.getElementById('result').textContent == 'Your result will appear here...') {
        showNotification('Nothing to clear!', 'error');
        return;
    }
    else {
        document.getElementById('input-text').value = '';
        document.getElementById('result').textContent = 'Your result will appear here...';
        showNotification('All clear', 'success');
    }
}
