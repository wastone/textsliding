class Textsliding {
	constructor(obj = {}) {
		this.parentClass = obj.parentClass || '.textover-animation-parent'
		this.childClass = obj.childClass || '.textover-animation-child'
		this.speed = obj.speed || 5
		this.time = obj.time || 100
	}
	
	init () {
		const parentNodes = document.querySelectorAll(this.parentClass)
		parentNodes.forEach(el => {
			let pWidth = el.offsetWidth
			const childNode = el.querySelector(this.childClass)
			const childWidth = childNode.offsetWidth
			let pstyle = window.getComputedStyle(el, null);
			let pPadingLeft = parseInt(pstyle.paddingLeft)
			let pPadingRight = parseInt(pstyle.paddingRight)
			pWidth = pWidth - pPadingLeft - pPadingRight
			if (childWidth > pWidth) {
				childNode.endVal = childWidth - pWidth
				this.animationFunc(childNode, 0, childWidth - pWidth )
			}
		})
	}
	
	animationFunc (el, start, end, direction) {
		let count = start
		if (direction) {
			count -= this.speed
		} else {
			count += this.speed
		}
		if ((!direction && count < end) || (direction && count > 0)) {
			el.style.transform = 'translateX(-' + count + 'px)'
			setTimeout(() =>{
				this.animationFunc(el, count, end, direction)
			}, this.time)
		} else {
			el.style.transform = 'translateX(' + end + ')'
			setTimeout(() => {
				let direct = direction ? '' : 1;
				let start1 = direct ? el.endVal : 0;
				let end1 = direct ? 0 : el.endVal
				this.animationFunc(el, start1, end1, direct)
			}, 1000)
		}
	}
	
}

module.exports = Textsliding
