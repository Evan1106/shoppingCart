function formCheck() {
    // var name = document.getElementsByName("name");
    
    // for(i=0;i<name.length;i++){
    // console.log(name[i].value);
    // }

    // String(name[0]);
    // Number(name[1]);
    // String(name[2]);
    
    if(myForm.name.value===""){
        alert("請填寫姓名!");
        return false;
    }else if(myForm.tel.value===""){
        alert("請填寫電話!");
        return false;
    }else if(myForm.address.value===""){
        alert("請填寫地址!");
        return false;
    }

}


let formButton = document.querySelector(".formButton");
formButton.addEventListener('click', addToCar());
console.log(formButton);
function addToCar(){
    let countElement = document.getElementById("count").value;
    let count = countElement.getElementsByTagName('input');
    


    console.log(countElement);
    //item為品項名稱，型態為字串
if(Cookies.get("carItem") == undefined){
            //若目前沒有 carItem 這個 key 的 Cookie ，直接新增一個，並只對購物車頁面設定 Cookie
    Cookies.set("carItem", count, { path: '/shopping cart1.html' })
}
// else{
//             //有的話就用逗號將品項做分隔再加入至 carItem 中
//     currentItem = Cookies.get("carItem");
//     currentItem = currentItem+","+item; 
//     Cookies.set("carItem", currentItem, { path: '/shopping cart3.html' });
// }
alert("已加入"+count+"個至購物車");
}