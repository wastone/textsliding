// 横向 landscape 纵向 portrait
const directToObj = {
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

class Textsliding {
  constructor(option = {}) {
    const defaultOption = {
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

  init() {
    const parentNodes = document.querySelectorAll(this.parentClass);
    parentNodes.forEach(el => {
      let pWidth = el[this.styleobj.width];
      const childNode = el.querySelector(this.childClass);
      const childWidth = childNode[this.styleobj.width];
      const pstyle = window.getComputedStyle(el, null);
      const pPadingLeft = parseInt(pstyle[this.styleobj.left]);
      const pPadingRight = parseInt(pstyle[this.styleobj.right]);
      pWidth = pWidth - pPadingLeft - pPadingRight;
      if (childWidth > pWidth) {
        childNode.endVal = childWidth - pWidth;
        this.animationFunc(childNode, 0, childWidth - pWidth);
      }
    });
  }

  animationFunc(el, start, end, direction) {
    let count = start;
    if (direction) {
      count -= this.speed;
    } else {
      count += this.speed;
    }
    if ((!direction && count <= end) || (direction && count >= 0)) {
      el.style.transform = this.styleobj.translate + '(-' + count + 'px)';
      setTimeout(() => {
        this.animationFunc(el, count, end, direction);
      }, this.time);
    } else {
      el.style.transform = this.styleobj.translate + '(-' + end + 'px)';
      setTimeout(() => {
        const direct = direction ? '' : 1;
        const start1 = direct ? el.endVal : 0;
        const end1 = direct ? 0 : el.endVal;
        this.animationFunc(el, start1, end1, direct);
      }, 1000);
    }
  }
}

export default Textsliding;
