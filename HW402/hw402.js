const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const points = document.querySelectorAll('.point');
const slider = document.querySelector('.slider');
const indicator = document.querySelector('.indicator');



nextButton.addEventListener('click', () => {
    for (let i = 0; i < slider.children.length; i++) {
        if (slider.children[i].classList.contains('activeImg')) {
            slider.children[i].classList.remove('activeImg');
            indicator.children[i].classList.remove('active');
            if (i === slider.children.length - 1) {
                slider.children[0].classList.add('activeImg');
                indicator.children[0].classList.add('active');
            } else {
                slider.children[i + 1].classList.add('activeImg');
                indicator.children[i + 1].classList.add('active');

            }
            break;
        }
    }
});
prevButton.addEventListener('click', () => {
    for (let i = 0; i < slider.children.length; i++) {
        if (slider.children[i].classList.contains('activeImg')) {
            slider.children[i].classList.remove('activeImg');
            indicator.children[i].classList.remove('active');
            if (i === 0) {
                slider.children[slider.children.length - 1].classList.add('activeImg');
                indicator.children[indicator.children.length - 1].classList.add('active');
            } else {
                slider.children[i - 1].classList.add('activeImg');
                indicator.children[i - 1].classList.add('active');

            }
            break;
        }
    }
});
indicator.addEventListener('click', (e) => {
    const targetName = e.target.getAttribute('name');
    for (let i = 0; i < indicator.children.length; i++) {
        if (slider.children[i].getAttribute('name') == targetName) {
            slider.children[i].classList.add('activeImg');
            indicator.children[i].classList.add('active');
        } else {
            slider.children[i].classList.remove('activeImg');
            indicator.children[i].classList.remove('active');
        }
    }
})