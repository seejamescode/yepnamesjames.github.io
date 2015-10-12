var sloganAnimation = document.querySelector('.sky__title__slogan').animate([
    {opacity: '0'},
    {opacity: '1'}
], {
    duration: 2000,
});

sloganAnimation.onfinish = function() {
  document.querySelector('.sky__title__slogan').style.opacity = '1';
};

sloganAnimation.pause();

var logoAnimation = document.querySelector('.sky__title__logo').animate([
    {transform: 'translateY(100vh)'},
    {transform: 'translateY(0)'}
], {
    duration: 3000,
    easing: 'ease-in'
}).onfinish = function() {
  document.querySelector('.sky__title__logo').style.transform = 'translateY(0)';
  sloganAnimation.play();
};