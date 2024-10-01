const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function(){
    if(emailInput.validity.valid){
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    } 
    else{
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
    }
});
emailInput.addEventListener('blur', function(){
    emailInput.classList.remove('invalid', 'valid');
});
