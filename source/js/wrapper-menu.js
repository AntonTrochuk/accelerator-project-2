const buttonOpen = document.querySelector('.button-open');
const buttonClose = document.querySelector('.button-close');
const wrapper = document.querySelector('.header__wrapper');
const wrapperItems = document.querySelectorAll('.header__wrapper-item');
const body = document.querySelector('.page-body');
const main = document.querySelector('.main-container');

const wrapperMenu = () => {
  const openMenu = () => {
    wrapper.classList.add('wrapper--open');
    body.classList.add('body-wrapper-menu');
    main.classList.add('main-container-wrapper');
    buttonClose.classList.add('wrapper-button--close');
    buttonOpen.classList.remove('header__wrapper-button--open');
  };

  const closeMenu = () => {
    wrapper.classList.remove('wrapper--open');
    body.classList.remove('body-wrapper-menu');
    main.classList.remove('main-container-wrapper');
    buttonClose.classList.remove('wrapper-button--close');
    buttonOpen.classList.add('header__wrapper-button--open');
  };

  buttonOpen.addEventListener('click', openMenu);
  buttonClose.addEventListener('click', closeMenu);

  wrapperItems.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });
};

export { wrapperMenu };
