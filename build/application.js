webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(327);


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slider = __webpack_require__(328);

var _slider2 = _interopRequireDefault(_slider);

__webpack_require__(329);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _slider2.default)('.slider');

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function slider(cssSelectorOfElement) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

  var controls = document.querySelectorAll('.buttons__controls');

  var parentContainer = document.querySelector(cssSelectorOfElement);
  var slides = document.querySelectorAll('.slider__slides .slider__slides_slide');

  var slideInterval = setInterval(nextSlide, interval);
  var currentSlide = 0;
  var isEnabled = false;
  var next = document.getElementById('next');
  var previous = document.getElementById('previous');
  var playing = true;

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = 'slider__slides_slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider__slides_slide showing';
  }

  function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide, interval);
  }

  next.onclick = function () {
    nextSlide();
  };

  previous.onclick = function () {
    previousSlide();
  };

  parentContainer.addEventListener('mouseenter', function () {
    console.log('Mouse eneter');
    clearInterval(slideInterval);
  });

  parentContainer.addEventListener('mouseleave', function () {
    console.log('Mouse leave');
    isEnabled = !isEnabled;
    if (isEnabled) {
      playSlideshow();
    }
  });
}

exports.default = slider;

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[125]);
