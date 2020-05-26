// 横向 landscape 纵向 portrait
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var directToObj = {
  landscape: {
    width: 'offsetWidth',
    left: 'paddingLeft',
    right: 'paddingRight',
    translate: 'translateX'
  },
  portrait: {
    width: 'offsetHeight',
    left: 'paddingTop',
    right: 'paddingBottom',
    translate: 'translateY'
  }
};

var Textsliding = (function () {
  function Textsliding() {
    var option = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Textsliding);

    var defaultOption = {
      parentClass: '.textover-animation-parent',
      childClass: '.textover-animation-child',
      speed: 5,
      time: 100,
      direction: 'landscape'
    };
    this.option = Object.assign({}, defaultOption, option);
    this.parentClass = this.option.parentClass;
    this.childClass = this.option.childClass;
    this.speed = this.option.speed;
    this.time = this.option.time;
    this.styleobj = directToObj[this.option.direction];
  }

  Textsliding.prototype.init = function init() {
    var _this = this;

    var parentNodes = document.querySelectorAll(this.parentClass);
    parentNodes.forEach(function (el) {
      var pWidth = el[_this.styleobj.width];
      var childNode = el.querySelector(_this.childClass);
      var childWidth = childNode[_this.styleobj.width];
      var pstyle = window.getComputedStyle(el, null);
      var pPadingLeft = parseInt(pstyle[_this.styleobj.left]);
      var pPadingRight = parseInt(pstyle[_this.styleobj.right]);
      pWidth = pWidth - pPadingLeft - pPadingRight;
      if (childWidth > pWidth) {
        childNode.endVal = childWidth - pWidth;
        _this.animationFunc(childNode, 0, childWidth - pWidth);
      }
    });
  };

  Textsliding.prototype.animationFunc = function animationFunc(el, start, end, direction) {
    var _this2 = this;

    var count = start;
    if (direction) {
      count -= this.speed;
    } else {
      count += this.speed;
    }
    if (!direction && count <= end || direction && count >= 0) {
      el.style.transform = this.styleobj.translate + '(-' + count + 'px)';
      setTimeout(function () {
        _this2.animationFunc(el, count, end, direction);
      }, this.time);
    } else {
      el.style.transform = this.styleobj.translate + '(-' + end + 'px)';
      setTimeout(function () {
        var direct = direction ? '' : 1;
        var start1 = direct ? el.endVal : 0;
        var end1 = direct ? 0 : el.endVal;
        _this2.animationFunc(el, start1, end1, direct);
      }, 1000);
    }
  };

  return Textsliding;
})();

exports['default'] = Textsliding;
module.exports = exports['default'];