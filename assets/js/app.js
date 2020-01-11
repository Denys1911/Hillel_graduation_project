(async function() {
    const GOODS_STORAGE_NAME = 'all-goods';
    const CART_STORAGE_NAME = 'goods-in-cart';
    let goodsData = await getGoodsData(GOODS_STORAGE_NAME);
    let goodsInCartData;

    showGoodsOnMainPage(goodsData);
    showBrandFilter(goodsData);
    showResolutionsFilter(goodsData);
    filterGoods(goodsData);
})();