document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const service = document.getElementById('service').value;
    const hours = document.getElementById('hours').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    let amount = 0;

    if (service === 'narration') {
        amount = hours * 200;
    } else if (service === 'editing') {
        amount = hours * 80;
    }

    if (validateCreditCard(cardNumber, expiryDate, cvv)) {
        alert(`Thank you! Your payment of $${amount} has been processed.`);
    } else {
        alert('Invalid credit card information. Please check your details and try again.');
    }
});

function validateCreditCard(cardNumber, expiryDate, cvv) {
    // Simple validation example (in practice, use a more comprehensive validation)
    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^\d{2}\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;

    return cardNumberPattern.test(cardNumber) &&
           expiryDatePattern.test(expiryDate) &&
           cvvPattern.test(cvv);
}

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const audioFiles = document.getElementById('audioFiles').files;
    if (audioFiles.length === 0) {
        alert('Please select at least one audio file.');
        return;
    }

    let fileList = '';
    for (let i = 0; i < audioFiles.length; i++) {
        fileList += `${audioFiles[i].name}\n`;
    }

    alert(`The following files have been uploaded:\n${fileList}`);
});