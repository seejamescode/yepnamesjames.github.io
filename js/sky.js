var skyEffects = [
    new KeyframeEffect(
        document.querySelector('.sky__airplane'),
        [
            {transform: 'scale(1) translate(0, 0)'},
            {transform: 'scale(1.2) translate(-425%, -50%)'}
        ],
        {
            delay: 2000,
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

var skySequence = new SequenceEffect(skyEffects);
document.timeline.play(skySequence);
