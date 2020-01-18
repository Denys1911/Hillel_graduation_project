(async function() {
    const GOODS_STORAGE_NAME = 'all_goods';
    let goodsData = await getGoodsData(GOODS_STORAGE_NAME);

    $('body').on('click', {goodsData}, mainEventHandler);
    showMainAndCategoryPage(goodsData);
    showResolutionsFilter(goodsData);
})();