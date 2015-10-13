var airplaneAnimation = document.querySelector('.sky__airplane').animate([
    {transform: 'scale(0.15) translate(0, 0)'},
    {transform: 'scale(0.30) translate(-1000%, -100%)'},
    {transform: 'scale(0.30) translate(-1000%, -100%)'}
], {
    duration: 20000,
    delay: 5000,
    iterations: Infinity
});

airplaneAnimation.pause();

var sloganAnimation = document.querySelector('.sky__title__slogan').animate([
    {opacity: '0'},
    {opacity: '1'}
], {
    duration: 2000,
});

sloganAnimation.onfinish = function() {
  document.querySelector('.sky__title__slogan').style.opacity = '1';
  airplaneAnimation.play();
};

sloganAnimation.pause();

var logoAnimation = document.querySelector('.sky__title__logo').animate([
    {transform: 'scale(0.75) translateY(100vh)'},
    {transform: 'scale(1) translateY(0)'}
], {
    duration: 3000,
    easing: 'ease-in'
}).onfinish = function() {
  document.querySelector('.sky__title__logo').style.transform = 'translateY(0)';
  sloganAnimation.play();
};