


function randomPasswordGenerator() {

    var symbols = "!@#$%^&*()";
    var chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var passwordLength = 12;
    var password = "";

    for(var i = 1; i < passwordLength; i++) {
        
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    randomNumber = Math.floor(Math.random() * symbols.length);
    password += symbols.substring(randomNumber, randomNumber + 1);
    document.getElementById('password').value = password;
};

