function toggleProject(el, className) {
    el.parentNode.className = className;

    const buttonFront = el.parentNode.getElementsByClassName("project__front")[0];
    const buttonBack = el.parentNode.getElementsByClassName("project__back")[0];
    const links = buttonBack.getElementsByTagName("a");

    if (el.className === 'project__front') {
        buttonFront.tabIndex = -1;
        buttonBack.tabIndex = 0;
        for (i = 0; i < links.length; i++) {
            links[i].tabIndex = 0;
        }
        buttonBack.focus();
    } else {
        buttonBack.tabIndex = -1;
        buttonFront.tabIndex = 0;
        for (i = 0; i < links.length; i++) {
            links[i].tabIndex = -1;
        }
        buttonFront.focus();
    }
}

var skyEffects = [
    new KeyframeEffect(
        document.querySelector('.sky__airplane'),
        [
            {transform: 'scale(1) translate(0, 0)'},
            {transform: 'scale(1.2) translate(-425%, -50%)'}
        ],
        {
            delay: 20000,
            duration: 5000,
            iterations: 1
        }
    ),
    new KeyframeEffect(
        document.querySelector('.sky__fighter'),
        [
            {transform: 'scale(1) translate(0, 0) rotateZ(0)'},
            {transform: 'scale(1.2) translate(650%, 50%) rotateZ(-15deg)'}
        ],
        {
            delay: 20000,
            duration: 2000,
            iterations: 1
        }
    ),
    new KeyframeEffect(
        document.querySelector('.sky__man'),
        [
            {transform: 'scale(1) translate(0, 0) rotateZ(-20deg)'},
            {transform: 'scale(1.5) translate(-750%, -500%) rotateZ(-10deg)'}
        ],
        {
            delay: 20000,
            duration: 2000,
            iterations: 1
        }
    ),
    new KeyframeEffect(
        document.querySelector('.sky__bike'),
        [
            {transform: 'translate(0, 0) rotateZ(0)'},
            {transform: 'translate(1100%, -200%) rotateZ(10deg)'},
            {transform: 'translate(2200%, 0) rotateZ(30deg)'}
        ],
        {
            delay: 20000,
            duration: 5000,
            iterations: 1
        }
    ),
    new KeyframeEffect(
        document.querySelector('.sky__glider'),
        [
            {transform: 'scale(1) translate(0, 0)'},
            {transform: 'scale(1.25) translate(750%, -60%)'}
        ],
        {
            delay: 20000,
            duration: 5000,
            iterations: 1
        }
    ),
    new KeyframeEffect(
        document.querySelector('.sky__balloon'),
        [
            {transform: 'scale(1) translate(0, 0)'},
            {transform: 'scale(1.2) translate(-650%, -350%)'}
        ],
        {
            delay: 20000,
            duration: 5000,
            iterations: 1
        }
    )
];


// Knuth Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  array[0]._timingInput.delay = 2000;

  return array;
}

var skySequence = new SequenceEffect(shuffle(skyEffects));
document.timeline.play(skySequence);
