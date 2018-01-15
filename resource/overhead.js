$.fn.overhead = function () {
    var mod = document.createElement('div'); //生成一个盒子模型
    var a = $(this).children('.overhead-part');
    $(mod).addClass('overhead-dilog');
    $(mod).height(80);
    $(mod).width(100);
    // $(mod).css('margin-left','5%');
    $(mod).css('float','right');
    $(mod).css('position','absolute');
    var b = document.createElement('button');
    $(b).css('float','right');
    $(b).addClass('btn btn-lg btn-primary');
    $(b).text('顶置');
    $(b).click(function () {
        var i = $(this).parent('.overhead-dilog').parent('.overhead-part');
        var a = $(i).prevAll()
        $(a[a.length-1]).before(i)

    });
    $(mod).append(b);
    $(a).mouseover(function () { //注册鼠标放到元素上面事件
        $(this).append(mod);

    });
    $(a).mouseout(function () {
        setTimeout(function () {
            $(this).children('.overhead-dilog').remove()
        },1000)
    });

};
