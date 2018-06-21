var aMore = document.getElementsByClassName("more"),
    aLess = document.getElementsByClassName("less"),
    aInput = document.getElementsByTagName("input"),
    aPrice = document.getElementsByClassName("price"),
    aTotal = document.getElementsByClassName("total"),
    aTotPrice = document.getElementsByClassName("tot-price"),
    aTotNum = document.getElementsByClassName("tot-num"),
    length = aMore.length;

for (var i = 0; i < length; i++){
    (function fn(i){
      aMore[i].onclick=function () {
         aInput[i].value++;
          totalPrice();
      };
        aLess[i].onclick=function () {

            aInput[i].value--;
            if(aInput[i].value<0){
                aInput[i].value=0;
            }
            totalPrice();
        };
        function totalPrice(){
            var num=0;
            var total=0;
            aTotal[i].innerHTML = aInput[i].value * aPrice[i].innerHTML;
            for (var j = 0; j < length; j++) {
                num += Number(aInput[j].value);
                total += Number(aTotal[j].innerHTML);
            }
            aTotNum[0].innerHTML= num;
            aTotPrice[0].innerHTML = total;
        }

    })(i);
}
