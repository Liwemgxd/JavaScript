(function(){
    var bannerNavUl = document.getElementById("banner-nav-ul");
    var bannerNav = document.getElementById('banner-nav');

    
    var menus = document.querySelectorAll('.menus-box .menu');
    var bannerLis = document.querySelectorAll('#banner-nav-ul li');
    //事件委托
    //必须使用onmouseover事件，而不是onmouseenter，因为前者冒泡，后者不冒泡
    bannerNavUl.onmouseover = function(e){
        if(e.target.tagName.toLowerCase() == 'li'){
            //得到 触碰到的li元素身上的data-t属性
            var t = e.target.getAttribute('data-t');
            //被碰的到li，要加一个current类
            //  先做排他操作
            for (let index = 0; index < bannerLis.length; index++) {
                bannerLis[index].className = bannerLis[index].getAttribute('data-t');
            }
            e.target.className += ' current';
            // 寻找被触碰li匹配的menu
            var themenu = document.querySelector('.menus-box .menu[data-t='+t+']');
            
            //排他,让其他的menu都去掉current
            for(var i=0; i< menus.length; i++){
                menus[i].className = 'menu';
            }
            themenu.className = 'menu current';
        }
    }

    //当鼠标离开菜单区域的时候，关闭菜单
    bannerNav.onmouseleave = function(){
        for (let index = 0; index < bannerLis.length; index++) {
            bannerLis[index].className = bannerLis[index].getAttribute('data-t');
            menus[index].className = 'menu';
        }
    }
})();