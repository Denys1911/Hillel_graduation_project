function mainEventHandler(event) {
    const {goodsData, goodsInCartData} = event.data;
    const target = event.target;
    const dataInfo = target.dataset.info;
    const itemId = parseInt(target.dataset.itemId);
    const mainBlock = $('main');

    // when click isn't on basket element, basket should be hidden
    if (!(target.className).includes("basket")) {
        $(".basket").addClass("hide");
    }

    switch (dataInfo) {
        case 'home':
            showMainAndCategoryPage(goodsData);
            break;
        case 'laptop':
        case 'phone':
        case 'TV':
            showMainAndCategoryPage(goodsData, dataInfo);
            break;
        case 'add':
        case 'show_cart':
            //add to cart function;
            showCartWithGoods(itemId, goodsInCartData);
            //они будут работать вместе, т.к. мы показываем корзину каждый раз когда добавляем товар в нее
            break;
        case 'remove':
            //remove from cart function;
            break;
        case 'increase':
            //increase q-ty of item in cart function;
            break;
        case 'decrease':
            //decrease q-ty of item in cart function;
            break;
        case 'show_product':
            showGoodsOnItemPage(goodsData, itemId);
            break;
        case 'filter_btn':
            filterGoods(goodsData);
            break;
        case 'filter-reset_btn':
            resetFilters();
            break;
        case 'price':
        case 'popularity':
            mainBlock.attr('data-current-sort', dataInfo);
            showSortedAndFilteredGoodsOnPage(goodsData);
            break;
        case 'descending':
        case 'ascending':
            mainBlock.attr('data-current-sort-direction', dataInfo);
            showSortedAndFilteredGoodsOnPage(goodsData);
            break;
    }
}