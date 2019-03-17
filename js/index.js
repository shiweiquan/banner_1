window.onload = function(){

    var box = document.getElementsByClassName('box')[0];
    var picBox = document.getElementsByClassName('picBox')[0];
    var css = document.getElementsByTagName('style')[0];
    var allWidth = box.offsetWidth;
    var btn = document.querySelectorAll('ol li');
    // console.log(allWidth)


    var n = 0,
        num = 100,
        pHtml = '',
        dHtml = '',
        strHtml = '';
    var w = allWidth / num;

    createDom();
    // console.log(w)
    function createDom(){
        for(var i = 0 ; i < num ; i++){
            strHtml += `<li>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </li>`;
            pHtml += '.picBox li:nth-child('+ (i+1)+') div{background-position:' + (-i * w ) +'px;}';
            dHtml += '.picBox li:nth-child('+ (i+1)+'){transition-delay:' + (i*0.2 / num) + 's}';
        }
        // console.log(pHtml + "\n");
        css.innerHTML += pHtml +dHtml + '.picBox li{width:' + w + 'px}';
        picBox.innerHTML += strHtml ;

        bindEvent();
    }

    function bindEvent(){
        for(var i =0;i < btn.length; i++){
            btn[i].index = i;


            btn[i].addEventListener('click',function(){
                n = this.index;
                console.log(n)
                css.innerHTML +=  '.picBox li{transform:translateZ(180px) rotateX('+ (n * 90) +'deg);}'
            })
        }
    }
}



