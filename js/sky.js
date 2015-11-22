var airplaneAnimation = document.querySelector('.sky__airplane').animate([
    {transform: 'scale(1) translate(0, 0)'},
    {transform: 'scale(1.2) translate(-425%, -50%)'}
], {
    duration: 5000,
    iterations: Infinity
});

var fighterAnimation = document.querySelector('.sky__fighter').animate([
    {transform: 'scale(1) translate(0, 0) rotateZ(0)'},
    {transform: 'scale(1.2) translate(650%, 50%) rotateZ(-15deg)'}
], {
    duration: 2000,
    iterations: Infinity
});

var manAnimation = document.querySelector('.sky__man').animate([
    {transform: 'scale(1) translate(0, 0) rotateZ(-20deg)'},
    {transform: 'scale(1.5) translate(-750%, -500%) rotateZ(-10deg)'}
], {
    duration: 2000,
    iterations: Infinity
});

var bikeAnimation = document.querySelector('.sky__bike').animate([
    {transform: 'translate(0, 0) rotateZ(0)'},
    {transform: 'translate(1100%, -200%) rotateZ(10deg)'},
    {transform: 'translate(2200%, 0) rotateZ(30deg)'}
], {
    duration: 5000,
    iterations: Infinity
});

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