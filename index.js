/**
 * Created by ÷‹ŸªŸª on 2017/4/27.
 */
HTMLElement.prototype.addClass = function(str){
    if(this.className){
        if(this.hasClass(str)){
            return;
        }else{
            this.className = this.className+' '+str;
        }
    }else{
        this.className = str;
    }
}

HTMLElement.prototype.hasClass = function(str){

    if(this.className && str){
        var cArr = this.className.split(' ');
        for(var i=0; i<cArr.length; i++){
            if(cArr[i] === str) return true;
        }
    }
    return false;
}

HTMLElement.prototype.removeClass = function(str){
    if(this.hasClass(str)){
        var cArr = this.className.split(' ');
        var tmpClass = '';
        for(var i=0; i<cArr.length; i++){
            if(cArr[i] !== str)
                tmpClass = tmpClass + cArr[i]+' ';
        }
        this.className = tmpClass;
    }
}

function animate(element,target){
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var current = element.offsetLeft;
        var step = (target- current)/10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if(target == current){
            clearInterval(element.timer);
        }
    },20)
}




window.onload = function () {
    var a = document.getElementsByTagName("nav")[0];
    var lis = a.children;
    var line = document.getElementsByClassName("line")[0];
    window.preLeft = 20;

    function screenLoad(){
        if(document.body.scrollTop>3100){
            changeState(4);
            document.getElementsByClassName("section5_phone")[0].addClass('load');
            document.getElementsByClassName("section5_center")[0].addClass('load');
            document.getElementsByClassName("section5_top")[0].addClass('load');
        }else if(document.body.scrollTop>2300){
            changeState(3);
            document.getElementsByClassName("section4_top")[0].addClass('load');
            document.getElementsByClassName("section4_center")[0].addClass('load');
            document.getElementsByClassName("color1")[0].addClass('load');
            document.getElementsByClassName("color2")[0].addClass('load');
            document.getElementsByClassName("color3")[0].addClass('load');
            document.getElementsByClassName("color4")[0].addClass('load');
        }else if(document.body.scrollTop>1500){
            changeState(2);
            document.getElementsByClassName("section3_top")[0].addClass('load');
            document.getElementsByClassName("section3_center")[0].addClass('load');
            document.getElementsByClassName("section3_phone")[0].addClass('load');
            document.getElementsByClassName("intro")[0].addClass('load');
        }else if(document.body.scrollTop>600){
            changeState(1);
            document.getElementsByClassName("section2_top")[0].addClass('load');
            document.getElementsByClassName("section2_center")[0].addClass('load');
            document.getElementsByClassName("section2_phone")[0].addClass('load');
        }else if(document.body.scrollTop<200){
            changeState(0);
            document.getElementsByClassName("section1_top")[0].addClass('load');
            document.getElementsByClassName("section1_phone")[0].addClass('load');
            document.getElementsByClassName("section1_shadow")[0].addClass('load');
        }
    }

    function changeState(index){
        preLeft = 20 + index*100;
        line.style.left = preLeft +'px';
        var a = document.getElementsByTagName("aside")[0].children;
        for(var i = 0 ; i< a.length;i++){
            a[i].removeClass("load");
        }
        a[index].addClass("load");
    }

    screenLoad();

    for(var i =0; i<lis.length-1;i++){
        lis[i].index = i;
        lis[i].onmouseover = mouseOverHandle;
        lis[i].onmouseout = mouseOutHandle;
        lis[i].onclick = clickHandle;
    }
    function mouseOverHandle(){
        line.style.left = 20+this.index*100+'px';
    }
    var last = 0;

    function mouseOutHandle(){
        line.style.left = preLeft+'px';
    }

    function clickHandle(){
        preLeft = 20+this.index*100;
        line.style.left = preLeft +'px';
    }





    window.onscroll = function () {
        if(document.body.scrollTop>40){
            document.getElementsByTagName("header")[0].addClass('load');
        }else{
            document.getElementsByTagName("header")[0].removeClass('load');
        }

        if(document.body.scrollTop>300){
            document.getElementsByTagName("aside")[0].addClass('load');
        }else{
            document.getElementsByTagName("aside")[0].removeClass('load');
        }

        screenLoad();

    }


}