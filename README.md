## 当一行文字超出固定宽度后，自动左右滑动的js插件
> 有时候会有这样的需求，比如显示公交站名或者地铁站名时，当站名比较长，自动来回滑动显示对于用户比较友好

### 使用方法
- 安装
```
npm install textsbliding -S
```
- 引用
```
import Textsbliding from 'textsbliding'

const textsbliding = new Textsbliding({
  parentClass: '.textover-animation-parent', // 容器的元素类名，也可以用ID
  childClass: '.textover-animation-child', // 文字的元素类名，也可以用ID
  speed: 5, // 默认规定时间移动5px
  time: 100, // 默认 100ms移动一次
  direction = 'landscape' // 默认横向 横向 landscape 纵向 portrait
})
textsbliding.init()
```

- 效果
![blockchain](https://github.com/wastone/textsliding/blob/master/example/image/GIF.gif. "例子")


