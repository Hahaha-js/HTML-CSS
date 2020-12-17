
const header = document.getElementById('header');

window.onscroll = function () {
    if (window.scrollY == 0) {
        header.classList.remove('act');
        
    } else{
        
        header.classList.add('act');
    }
    
}


// console.log(header.style);
// // header.style.color="red"; 
// //inline 스타일만 가지고 올 수 있다. 그래서 덮어쓰기로 사용이 가능
// console.log(window.scrollY);
//     if (window.scrollY != 0) {
    //         header.style.color = "#666";
    //         header.style.backgrournd = '#fff';
    //         heer.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    
    //     }else {
        //         header.style.color = null;
        //         header.style.background = null;
        //         header.style.boxShadow = null;
//     }
// }