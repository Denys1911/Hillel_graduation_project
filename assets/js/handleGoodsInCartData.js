const getGoodsInCartData = goodsStorageName => {
    let localStorageValue = localStorage.getItem(goodsStorageName);

    if (localStorageValue) {
        return JSON.parse(localStorageValue);
    }

    localStorageValue = [];
    localStorage.setItem(goodsStorageName, JSON.stringify(localStorageValue));

    return localStorageValue;
}

const setGoodsInCartData = (goods) => {
    const goodsStorageName = 'goods_in_cart';
    if (goods) {
        localStorage.setItem(goodsStorageName, JSON.stringify(goods));
    };
}