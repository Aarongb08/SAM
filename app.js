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


 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('applicationForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission

      // Show the success message
      successMessage.textContent = "You’ve successfully applied!";

      // Optionally clear the form
      form.reset();
    });
  });

