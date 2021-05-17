/* 
轮播图特效
*/

(function () {
    //得到元素
    var carousel_list = document.getElementById('carousel_list');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var circle_ol = document.getElementById('circle_ol');
    var circle_lis = circle_ol.getElementsByTagName('li');
    var banner = document.getElementById('banner');


    //克隆第一张li
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    //上树
    carousel_list.appendChild(clone_li);

    //页面加载后，显示的图片序号从0开始
    var idx = 0;

    //节流锁
    var lock = true;

    //右按钮事件监听

    right_btn.onclick = right_btn_handler;
    function right_btn_handler() {
        //判断节流锁的状态，如果是关闭的，那就直接返回
        if (!lock) {
            return;
        }
        //如果锁是开的，进入函数第一件事，先把锁关上
        lock = false;

        //加上过度
        carousel_list.style.transition = 'transform .5s ease 0s';
        idx++;
        // console.log(idx)
        carousel_list.style.transform = 'translateX(' + -16.666 * idx + '%)';
        //当移动到最后一张时，要瞬移回去，（第一张与最后一张是一样的），设置的延迟与过度时间相同。
        if (idx > 4) {
            setTimeout(function () {
                //先去掉过度
                carousel_list.style.transition = 'none';
                //删除transform属性，瞬移
                carousel_list.style.transform = 'none';
                //序号归0
                idx = 0;
                // console.log(idx)
            }, 500)
        }
        //设置小圆点
        //这个函数会先于上面的延迟执行，导致判断idx为5，因此下面设计了一个%5的技巧
        setCircles();

        //函数执行完毕后，把锁打开
        //根据JS异步的执行机制，到这里的时候，上面的延迟器还没执行，所以这里用延迟上锁
        setTimeout(function () {
            lock = true;
        }, 500);
    }

    //左按钮事件监听
    left_btn.onclick = function () {
        //判断节流锁的状态，如果是关闭的，那就直接返回
        if (!lock) {
            return;
        }
        //如果锁是开的，进入函数第一件事，先把锁关上
        lock = false;

        if (idx == 0) {
            // 瞬间拉动到最后
            carousel_list.style.transition = 'none';
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            idx = 4;
            //延时0毫秒，可以让上面的瞬移发生后，再把过度加上
            //  经过测试，偶尔会有冲突，过度来不及取消
            setTimeout(function () {
                //加上过度
                carousel_list.style.transition = 'transform .5s ease 0s';
                //动画 
                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%)';

                // console.log(idx)
            }, 0);
        } else {
            idx--;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
            // console.log(idx)
        }
        setCircles();

        //函数执行完毕后，把锁打开
        //根据JS异步的执行机制，到这里的时候，上面的延迟器还没执行，所以这里用延迟上锁
        setTimeout(function () {
            lock = true;
        }, 500);
    }

    //设置小圆点的current在谁身上,序号为idx的小圆点才有current类名，其他的都没有类名
    function setCircles() {
        for (var i = 0; i <= 4; i++) {
            //%5，目的是为了右按钮有一瞬间会使idx变成5，这个函数会先执行，后面idx刷新成0的时候，已经晚了
            if (i == idx % 5) {
                circle_lis[i].className = 'current';
            } else {
                circle_lis[i].className = '';
            }
        }
    }

    //事件委托，小圆点的监听
    circle_ol.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            //得到li身上的data-n属性
            var n = e.target.getAttribute('data-n');
            //改变idx
            idx = n;
            //拉动横幅
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
            //设置小圆点
            setCircles();
        }
    }

    //  定时器，自动轮播
    var timer = setInterval(right_btn_handler, 2000);

    //鼠标进入，自动轮播暂停
    banner.onmouseenter = function(){
        clearInterval(timer);
    }
    //鼠标离开，轮播开始
    banner.onmouseleave = function(){
        //设表先关
        clearInterval(timer);
        timer = setInterval(right_btn_handler, 2000);
    }
})();

