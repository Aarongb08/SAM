/*const menu = document.querySelector('#mobile-menu')
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
  });*/

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    if (menu && menuLinks) {
        menu.addEventListener('click', function () {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }

    // Button redirects
    const btnTrainees = document.getElementById("btnTrainees");
    const btnCareers = document.getElementById("btnCareers");

    if (btnTrainees) {
        btnTrainees.addEventListener("click", function () {
            window.location.href = "trainees.html";
        });
    }

    if (btnCareers) {
        btnCareers.addEventListener("click", function () {
            window.location.href = "/";
        });
    }

    // Form submission handler
    const form = document.getElementById('applicationForm');
    const successMessage = document.getElementById('successMessage');

    if (form && successMessage) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            successMessage.textContent = "You've successfully applied!";
            form.reset();
        });
    }
});

