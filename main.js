
function randomPasswordGenerator() {

    let symbols = "!@#$%^&*()";
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let passwordLength = 12;
    let password = "";

    for(let i = 1; i < passwordLength; i++) {
        
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    randomNumber = Math.floor(Math.random() * symbols.length);
    password += symbols.substring(randomNumber, randomNumber + 1);
    document.getElementById('password').value = password;
};

function copyToClipboard(inputId) {
  const inputElement = document.getElementById(inputId);
  const textToCopy = inputElement.value;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Text copied to clipboard!'); // Optional success message
    })
    .catch(err => {
      console.error('Failed to copy:', err); // Optional error handling
    });
}


// make a function that can copy the text inside an input tag
