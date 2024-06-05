var getElement = document.querySelectorAll(".product-img");
// console.log(getElement);
// Object.assign(getElement.style, {
//     backgroundColor: 'green',
    
// })

for(let i =0 ;i<getElement.length;++i){
    // console.log(getElement[i]);
    let getImagesrc = {
        0: './img/p1-2.jpg',
        1: './img/p2-2.jpg',
        2: './img/p3-2.jpg',
        3: './img/p4-2.jpg',
        4: './img/p5-2.jpg',
        5: './img/p6-2.jpg',
        6: './img/p7-2.jpg',
        7: './img/p8-2.jpg'
    }
    // console.log(getImagesrc[6]);
    // console.log(getImagesrc[i]);
    getElement[i].addEventListener("mouseenter", function(){
        // console.log(getElement[i]);
        // console.log(getImagesrc[i]);

        var imageSrc = getElement[i].querySelector("img").getAttribute("src");
        var image = getElement[i].querySelector("img");
        // console.log(imageSrc);
        //${getImagesrc[i]}
        var sourceimage = getImagesrc[i];
        image.setAttribute("src",sourceimage);
        getElement[i].addEventListener("mouseout", function(e){
            // console.log(getElement[i]);
            // console.log(e.target);
            image.setAttribute("src",imageSrc);
            
        })
    })

}

// getElement.onmouseenter = function(e){
//     console.log(e.target);
// }