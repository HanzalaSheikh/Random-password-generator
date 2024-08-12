
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
  // Get the input element
  const input = document.getElementById('password');

  // Select the input content
  input.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');
}

// make a function that can copy the text inside an input tag
