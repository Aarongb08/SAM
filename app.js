const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });


    document.getElementById("btnTrainees").addEventListener("click",function() {
        window.location.href = "trainees.html";
    });

     document.getElementById("btnCareers").addEventListener("click",function() {
        window.location.href = "/";
    });
