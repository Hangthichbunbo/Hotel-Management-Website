document.addEventListener('DOMContentLoaded', () => {
    // Cuộn tới section khi click menu
    const items = document.querySelectorAll('.service-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-target');
            const target = document.getElementById(id);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // === Slideshow SPA ===
    const slideShow = document.querySelector('#spa .slide-show');
    const list = document.querySelector('#spa .list-images');
    const slides = Array.from(document.querySelectorAll('#spa .slide-img'));
    const btnLeft = document.querySelector('#spa .btn-left');
    const btnRight = document.querySelector('#spa .btn-right');
    const dots = Array.from(document.querySelectorAll('#spa .index-item'));

    if (!slideShow || !list || slides.length === 0) return;

    let current = 0;
    const length = slides.length;

    function update() {
        const width = slideShow.clientWidth;
        list.style.transform = `translateX(${-width * current}px)`;
        dots.forEach(d => d.classList.remove('active'));
        const activeDot = document.querySelector(`#spa .index-item-${current}`);
        if (activeDot) activeDot.classList.add('active');
    }

    function next() {
        current = (current + 1) % length;
        update();
    }

    function prev() {
        current = (current - 1 + length) % length;
        update();
    }

    let intervalId = setInterval(next, 4000);

    if (btnRight) {
        btnRight.addEventListener('click', () => {
            clearInterval(intervalId);
            next();
            intervalId = setInterval(next, 4000);
        });
    }

    if (btnLeft) {
        btnLeft.addEventListener('click', () => {
            clearInterval(intervalId);
            prev();
            intervalId = setInterval(next, 4000);
        });
    }

    // Click vào chấm tròn
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            clearInterval(intervalId);
            current = idx;
            update();
            intervalId = setInterval(next, 4000);
        });
    });

    window.addEventListener('resize', update);
    update();
});

document.addEventListener('DOMContentLoaded', () => {
    // === Slideshow CONFERENCE ===
    const confShow = document.querySelector('#conference .slide-show');
    const confList = document.querySelector('#conference .list-images');
    const confSlides = Array.from(document.querySelectorAll('#conference .slide-img'));
    const confBtnLeft = document.querySelector('#conference .btn-left');
    const confBtnRight = document.querySelector('#conference .btn-right');
    const confDots = Array.from(document.querySelectorAll('#conference .index-item'));

    if (!confShow || !confList || confSlides.length === 0) return;

    let currentConf = 0;
    const confLength = confSlides.length;

    function updateConference() {
        const width = confShow.clientWidth;
        confList.style.transform = `translateX(${-width * currentConf}px)`;
        confDots.forEach(d => d.classList.remove('active'));
        const activeDot = document.querySelector(`#conference .index-item-${currentConf}`);
        if (activeDot) activeDot.classList.add('active');
    }

    function nextConference() {
        currentConf = (currentConf + 1) % confLength;
        updateConference();
    }

    function prevConference() {
        currentConf = (currentConf - 1 + confLength) % confLength;
        updateConference();
    }

    let confInterval = setInterval(nextConference, 4000);

    if (confBtnRight) {
        confBtnRight.addEventListener('click', () => {
            clearInterval(confInterval);
            nextConference();
            confInterval = setInterval(nextConference, 4000);
        });
    }

    if (confBtnLeft) {
        confBtnLeft.addEventListener('click', () => {
            clearInterval(confInterval);
            prevConference();
            confInterval = setInterval(nextConference, 4000);
        });
    }

    confDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            clearInterval(confInterval);
            currentConf = idx;
            updateConference();
            confInterval = setInterval(nextConference, 4000);
        });
    });

    window.addEventListener('resize', updateConference);
    updateConference();
});

document.addEventListener('DOMContentLoaded', () => {
    // Nút mở menu
    const menuBtn = document.querySelector('.js-menu-btn');
    const nav = document.querySelector('.js-nav');
    const navContainer = document.querySelector('.js-nav-container');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.add('open');
        });

        // Bấm ra ngoài để đóng menu
        nav.addEventListener('click', () => {
            nav.classList.remove('open');
        });

        // Ngăn chặn khi click bên trong menu
        navContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

