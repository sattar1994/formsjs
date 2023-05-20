const form = document.getElementById('form');
const userInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordInput2 = document.getElementById('password2');

const emailValue = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
form.addEventListener('submit', (e) => {
    if(emailValue.test(emailInput.value)){
        emailInput.style.border='green 2px solid'
    }else{
        emailInput.style.border='red 2px solid'
        emailInput.nextElementSibling.innerHTML = 'لطفا ایمیل معتبر وارد کنید'
        e.preventDefault();
    };
    if(userInput.value.trim() && userInput.value.length > 3){
        userInput.style.border='green 2px solid';
    }else{
        userInput.style.border='red 2px solid';
        userInput.nextElementSibling.innerHTML = 'لطفا اسم بزرگتر از 3 حرف وارد کنید'
        e.preventDefault();
    }
   
    if(passwordInput.value.trim() && passwordInput.value.length > 5){
         passwordInput.style.border='green 2px solid'
        }else{
            passwordInput.style.border='red 2px solid'
            passwordInput.nextElementSibling.innerHTML= 'رمز عبور باید بزرگتر از 6 رقم باشد'
            e.preventDefault();
    }
    if(passwordInput2.value === passwordInput.value){
        passwordInput2.style.border='green 2px solid'
    }else{
        passwordInput2.style.border='red 2px solid'
        passwordInput2.nextElementSibling.innerHTML= 'رمز عبور را درست تکرار کنید'
        e.preventDefault();
    }
   
});
// function setErrorPassword(){
//     passwordInput.addEventListener('blur', () => {
//         if(passwordInput.value.trim()){
//                 passwordInput.style.border='2px green solid'
//         }
//     })

// }
// setErrorPassword();
// function setErrorPassword2(){
//     passwordInput2.addEventListener('blur', () => {
//         if(passwordInput2.value.trim()){
//                 passwordInput2.style.border='2px green solid'
//         }
//     })

// }
// setErrorPassword2();


// function setErrorUser() {
//     userInput.addEventListener('blur', () => {
//         if(userInput.value.trim()){
//                 userInput.style.border='2px green solid'
//         }
//     })
// };
// setErrorUser();
// function setErrorEmail(){
//     emailInput.addEventListener('blur', () => {
//         if(emailValue.test(emailInput.value)){
           
//             emailInput.style.border='green 2px solid'

//         }
//     })
// };
// setErrorEmail()


