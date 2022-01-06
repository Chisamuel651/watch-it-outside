const signinBtn = document.getElementById('sign_in_btn');
const signupBtn = document.getElementById('sign_up_btn');
const container = document.querySelector('.container');

signupBtn.addEventListener('click', () =>{
    container.classList.add("sign_up_mode");
});

signinBtn.addEventListener('click', () =>{
    container.classList.remove("sign_up_mode");
});