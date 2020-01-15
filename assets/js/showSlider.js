function showSlider (goodsData, category) {
    let tempArray = []; 
    if (category) {
        goodsData = goodsData.filter((good) => good.category === category);
        tempArray = getMaxPrice(goodsData)
    } else {
        getMaxPrice(goodsData.filter((good) => good.category === "phone"));
    }

    $(".d-block[alt='First slide']").attr("src", tempArray[0]);
    $(".d-block[alt='Second slide']").attr("src", tempArray[1]);
    $(".d-block[alt='Third slide']").attr("src", tempArray[2]);

    console.log(getMaxPrice(goodsData));
}

function getMaxPrice(goodsData) {
    let maxPrice = 0;
    let tempArray = [];
    goodsData.forEach(good => {
        if (maxPrice < good.price) {
            maxPrice = good.price;
            tempArray.unshift(good.img);
        }
    });
    tempArray.splice(3, tempArray.length);
    return tempArray;
}