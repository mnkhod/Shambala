// https://github.com/hmongouachon/NodeCursor
var initCursor = new NodeCursor({
  cursor: true,
  node: true,
  cursor_velocity: 1,
  node_velocity: 0.35,
  native_cursor: "none",
  element_to_hover: ".nodeHover",
  cursor_class_hover: "disable",
  node_class_hover: "expand",
  hide_mode: true,
  hide_timing: 2000,
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 30,
  freeMode: true,
  slidesPerView: 'auto',
  simulateTouch: true,
  mousewheel: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$("#backgroundTextContainer h1").marquee({
  //duration in milliseconds of the marquee
  duration: 10000,
  //gap in pixels between the tickers
  gap: 300,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: "right",
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true,
});