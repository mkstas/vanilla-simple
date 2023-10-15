export const burgerMenu = (): void => {
  const burgerButton = document.querySelector('.js-burger');
  const burgerMenu = document.querySelector('.js-nav');

  burgerButton?.addEventListener('click', () => {
    burgerButton?.classList.toggle('is-active');
    burgerMenu?.classList.toggle('is-active');
  });
};
