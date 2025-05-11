const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });


    document.getElementById("btnExperience").addEventListener("click",function() {
        window.location.href = "/";
    });

     document.getElementById("btnCareers").addEventListener("click",function() {
        window.location.href = "/";
    });