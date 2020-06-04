
var screenAnimateElements = {

  '.screen-1' : [
    '.screen-1__heading',
    '.screen-1__phone',
    '.screen-1__shadow',
  ],
  '.screen-2' : [
    '.screen-2__heading',
    '.screen-2__subheading',
    '.screen-2__phone',
    '.screen-2__point_i_1',
    '.screen-2__point_i_2',
    '.screen-2__point_i_3',
  ],
  '.screen-3' : [
    '.screen-3__heading',
    '.screen-3__phone',
    '.screen-3__subheading',
    '.screen-3__features',
  ],
  '.screen-4' : [
    '.screen-4__heading',
    '.screen-4__subheading',
    '.screen-4__type__item_i_1',
    '.screen-4__type__item_i_2',
    '.screen-4__type__item_i_3',
    '.screen-4__type__item_i_4',
  ],
  '.screen-5' : [
     '.screen-5__heading',
    '.screen-5__subheading',
    '.screen-5__bg',
  ]

};

function setScreenAnimate(screenCls) {
  var screen = document.querySelector(screenCls); // 获取当前屏的元素
  var animateElements =  screenAnimateElements[screenCls]; // 需要设置动画的元素
  var isSetAnimateClass = false; // 是否有初始化子元素的样式
  var isAnimateDone = false; // 当前屏幕下所有子元素的状态是DONE？
  screen.onclick = function(){
    //  初始化样式，增加init A A_init
    if( isSetAnimateClass === false){
        for(var i=0;i<animateElements.length;i++){
          // 获取需要设置动画的元素
            var element = document.querySelector(animateElements[i]);
            // 给需要设置动画的元素添加class属性
            var baseCls = element.getAttribute('class');
            // 给需要设置动画的元素添加class属性值
            element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_animate_init');
        }
        //初始化子元素的样式
        isSetAnimateClass = true;
        return ;
    }
    // 切换所有 animateElements 的  init -> done   A A_done
    // isAnimateDone === false判断当前屏幕下所有子元素的状态不是DONE的时候，执行下列操作
    if(isAnimateDone === false){
      for(var i=0;i<animateElements.length;i++){
        // 获取需要设置动画的元素
        var element = document.querySelector(animateElements[i]);
        // 给需要设置动画的元素添加class属性
        var baseCls = element.getAttribute('class');
        // 给需要设置动画的元素添加class属性值
        element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
      }
      //当前屏幕下所有子元素的状态是DONE
      isAnimateDone = true;
      return ;
    }
    //  切换所有 animateElements 的  done -> init   A A_init
    // isAnimateDone === true判断当前屏幕下所有子元素的状态是DONE的时候，执行下列操作
    if(isAnimateDone === true){
      for(var i=0;i<animateElements.length;i++){
        // 获取需要设置动画的元素
        var element = document.querySelector(animateElements[i]);
        // 给需要设置动画的元素添加class属性
        var baseCls = element.getAttribute('class');
        // 给需要设置动画的元素添加class属性值
        element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
      }
      //当前屏幕下所有子元素的状态不是DONE
      isAnimateDone = false;
      return ;
    }
  }
}
// 遍历所有元素
for(k in screenAnimateElements){
    // 调用这个函数，为所有元素添加init动画（_animate_init）
    setScreenAnimate(k);
}
