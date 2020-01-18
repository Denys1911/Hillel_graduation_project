function addGoodTocart (itemId, goodsData, goodsInCartData, quantity = 1) {
    let newItem = goodsData.find(good => good.id === itemId);
    let matchFlag = 0;
    if (goodsInCartData.length) {
        for (let i = 0; i < goodsInCartData.length; i++) {
            if (goodsInCartData[i].item.id === itemId) {
                goodsInCartData[i].qty += quantity;
                goodsInCartData[i].sumItem = goodsInCartData[i].qty * goodsInCartData[i].item.price;
                matchFlag++;
            }
        }
    }
    if (!matchFlag) {
        pushNewItem(newItem, goodsInCartData, quantity);
    }
    setGoodsInCartData(goodsInCartData);
    event.stopPropagation();
}

function pushNewItem (newItem, goodsInCartData, quantity) {
    console.log(newItem)
    goodsInCartData.push({
        item: newItem,
        qty: quantity,
        sumItem: newItem.price * quantity
    })
}

function removeGoodFromCart (itemId, quantity) {

}