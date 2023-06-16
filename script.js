const learnButtons = document.querySelectorAll('.learn-button');
const popups = document.querySelectorAll('.popup');
const closeButton = document.querySelectorAll('.close-button');

learnButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        popups[index].classList.add('show-popup');
    });
});

closeButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        popups[index].classList.remove('show-popup');
    });
});
