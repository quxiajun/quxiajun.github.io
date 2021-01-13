// $(function(){
//     waterFall();   //使用这种方法就是指在页面结构加载完后就执行了
// });

$(window).on('load',function(){
    waterFall();    
});

//瀑布流的特点就是图片等宽不等高
function waterFall(){
    var img =  $('.box');
    //求出列数
    var imgWidth = img.outerWidth();
    var screenWidth = $(window).width();
    var cols = parseInt(screenWidth/imgWidth);
    console.log(cols);
    //创建一个数组，用于存放高度值
    var heightArr = [];
    //遍历所有的图片  目的定位图片的位置
    $.each(img,function(index,item){
        //判断是否是在第一行，如果是就取到高度值，追加到数组heightArr里面
        var imgHeight = $(item).outerHeight();  //每一张图片的高度
        if(index < cols){
            heightArr[index] = imgHeight;
        }else {
            //最小高度值
            var minH = Math.min(...heightArr);
            //最小高度索引
            var mIndex = heightArr.findIndex(item => item==minH);

            $(item).css({
                position: 'absolute',
                top: minH + 'px',
                left: mIndex*imgWidth + 'px'
            });
            //最新最小高度的值
            heightArr[mIndex] += imgHeight;
        }
    })
}