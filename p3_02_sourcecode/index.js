menu = document.getElementById('menubtn');
navBar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

// displayInfo = document.getElementById('show_up');
// infoSection = document.querySelectorAll('.answer');

// displayInfo.onclick = () => {
//     displayInfo.classList.toggle('fa-minus');

// }