
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
    const btnHt = document.getElementById("btnHt");
    const btnJs = document.getElementById("btnJs");
    const btnCp = document.getElementById("btnCp");
    const btnPyt = document.getElementById("btnPyt");



    if (btnTrainees) {
        btnTrainees.addEventListener("click", function () {
            window.location.href = "trainees.html";
        });
    }

    if (btnCareers) {
        btnCareers.addEventListener("click", function () {
            window.location.href = "webdev.html";
        });
    }

    if (btnHt) {
        btnHt.addEventListener("click", function () {
            window.location.href = "https://www.udemy.com";
        });
    }

    if (btnJs) {
        btnJs.addEventListener("click", function () {
            window.location.href = "https://www.coursera.org/specializations/html-css-javascript-for-web-developers";
        });
    }

    if (btnCp) {
        btnCp.addEventListener("click", function () {
            window.location.href = "https://www.theknowledgeacademy.com/offers/web-development-and-web-design-certification-training-courses/?hsa_acc=9865744776&hsa_cam=16593625843&hsa_grp=1306220184589962&hsa_ad=&hsa_src=o&hsa_tgt=kwd-81638954856917:loc-188&hsa_kw=Web%20Development%20Courses&hsa_mt=e&hsa_net=adwords&hsa_ver=3&msclkid=25b838f377c11d09bffc50d128fe8909&utm_source=bing&utm_medium=cpc&utm_campaign=%5BWeb%20Development%5D%5BUK%5D&utm_term=Web%20Development%20Courses&utm_content=%5BWeb%20Development%5D%5BCourse%5D";
        });
    }

    if (btnPyt) {
        btnPyt.addEventListener("click", function () {
            window.location.href = "https://www.udemy.com";
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