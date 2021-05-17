//节流锁
var lock = true;

function 需要节流的函数() {
    //如果锁是关闭状态，退出函数
    if (!lock) return;

    //函数流程

    //关锁
    lock = false;

    //指定时间后降锁打开
    setTimeout(function () {
        lock = true;
    }, 2000);
}