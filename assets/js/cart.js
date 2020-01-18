function cartHandler (flag, itemId, goodsInCartData, goodsData, quantity = 1) {
    switch (flag) {
        case 'add':
        case 'addFromPDP':
            let newItem = goodsData.find(good => good.id === itemId);
        case 'plus':
            if (goodsInCartData.length) {
                for (let i = 0; i < goodsInCartData.length; i++) {
                    if (goodsInCartData[i].item.id === itemId) {
                        goodsInCartData[i].qty += quantity;
                        calculateItemSumPrice(goodsInCartData[i]);
                        setGoodsInCartData(goodsInCartData);
                        return;
                    } else if (i === goodsInCartData.length - 1) {
                        pushNewItem(newItem, goodsInCartData, quantity);
                        setGoodsInCartData(goodsInCartData);
                        return;
                    }
                }
            }
            pushNewItem(newItem, goodsInCartData, quantity);
            setGoodsInCartData(goodsInCartData);
            return;
        case 'minus':
            for (let i = 0; i < goodsInCartData.length; i++) {
                if (goodsInCartData[i].item.id === itemId) {
                    goodsInCartData[i].qty -= quantity;
                    if (!goodsInCartData[i].qty) {
                        goodsInCartData.splice(i, 1);
                    } else {
                        calculateItemSumPrice(goodsInCartData[i]);
                    }
                    setGoodsInCartData(goodsInCartData);
                    return;
                }
            }
        case 'remove':
            for (let i = 0; i < goodsInCartData.length; i++) {
                if (goodsInCartData[i].item.id === itemId) {
                    goodsInCartData.splice(i, 1);
                    setGoodsInCartData(goodsInCartData);
                    return;
                }
            }
    }
}

function pushNewItem (newItem, goodsInCartData, quantity) {
    goodsInCartData.push({
        item: newItem,
        qty: quantity,
        sumItem: newItem.price * quantity
    })
}

function calculateItemSumPrice (productInCart) {
    productInCart.sumItem = productInCart.qty * productInCart.item.price;
}