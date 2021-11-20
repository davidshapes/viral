var speed = 100;
      var frame = anime.timeline({
      easing: 'linear',
      autoplay:true,
      loop: false
  });
  frame
  .add({
  targets: '.track-horizontal-alt',
  keyframes: [
    {translateX: window.innerWidth*0.975, duration: speed},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*0.975 , duration: speed*2},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*0.975 , duration: speed*3},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*0.975, duration: speed*4},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*0.975, duration: speed*5},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*0.975, duration: speed*8},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*0.975, duration: speed*10},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*0.975, duration: speed*12}
 ]})
 frame
  .add({
  targets: '.track-horizontal-alt-rev',
  keyframes: [
    {translateX: window.innerWidth*-0.975, duration: speed},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*-0.975 , duration: speed*2},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*-0.975 , duration: speed*3},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*-0.975, duration: speed*4},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*-0.975, duration: speed*5},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*-0.975, duration: speed*8},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*-0.975, duration: speed*10},
    {translateX: 0, duration: 0},
    {translateX: window.innerWidth*-0.975, duration: speed*12}
  ]}, 0)
  frame
  .add({
  targets: '.track-vertical-alt',
  keyframes: [
    {translateY: window.innerHeight*0.975, duration: speed},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*0.975 , duration: speed*2},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*0.975 , duration: speed*3},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*0.975, duration: speed*4},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*0.975, duration: speed*5},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*0.975, duration: speed*8},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*0.975, duration: speed*10},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*0.975, duration: speed*12}
  ]}, 0)

  frame
  .add({
  targets: '.track-vertical-alt-rev',
  keyframes: [
    {translateY: window.innerHeight*-0.975, duration: speed},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*-0.975 , duration: speed*2},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*-0.975 , duration: speed*3},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*-0.975, duration: speed*4},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*-0.975, duration: speed*5},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*-0.975, duration: speed*8},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*-0.975, duration: speed*10},
    {translateY: 0, duration: 0},
    {translateY: window.innerHeight*-0.975, duration: speed*12}
  ]}, 0)

  frame
  .add({
  targets: '.t-frame-wrap',
  duration: 500,
  easing: 'easeInQuad',
  scale: 1,
}, 0)

    frame
  .add({
  targets: '.f-bg',
  duration: 500,
  easing: 'easeInQuad',
  opacity: 0,
}, 350)
    
frame
.add({
  targets: '.f-bg',
  duration: 1,
  zIndex: 0
}, 850)

  frame
  .add({
  targets: '.over-top',
  duration: 1200,
  easing: 'linear',
keyframes: [
    {opacity: [.0, 1], duration: 1},
    {translateX: window.innerWidth*0.975}

  ]}, 3300)

    frame
  .add({
  targets: '.over-bottom',
  duration: 1200,
  easing: 'linear',
keyframes: [
    {opacity: [.0, 1], duration: 1},
    {translateX: window.innerWidth*-0.975}

  ]}, '-=1200')

    frame
  .add({
  targets: '.over-left',
  duration: 1200,
  easing: 'linear',
keyframes: [
    {opacity: [.0, 1], duration: 1},
    {translateY: window.innerHeight*-0.975}

  ]}, '-=1200')

    frame
  .add({
  targets: '.over-right',
  duration: 1200,
  easing: 'linear',
keyframes: [
    {opacity: [.0, 1], duration: 1},
    {translateY: window.innerHeight*0.975}

  ]}, '-=1200');

var fadeIn = document.querySelectorAll('[data-fadein]');
anime({
  targets: fadeIn,
  translateY: [50, 0],
  opacity: 1,
  duration: 500,
  easing: 'easeInSine',
  delay: anime.stagger(50)

}, 500);  
