var sloganAnimation = document.querySelector('.sky__title__slogan').animate([
    {opacity: '0'},
    {opacity: '1'}
], {
    duration: 2000
});
sloganAnimation.pause();

var logoAnimation = document.querySelector('.sky__title__logo').animate([
    {transform: 'translateY(100vh)'},
    {transform: 'translateY(0)'}
], {
    duration: 5000
}).onfinish = function() {
  sloganAnimation.play();
};