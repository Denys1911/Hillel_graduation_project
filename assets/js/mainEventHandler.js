function mainEventHandler(event) {
    const {goodsData, goodsInCartData} = event.data;
    const target = event.target;
    let dataInfo = target.dataset.info;
    let itemId = parseInt(target.dataset.itemId);
    // when click isn't on basket element, basket should be hidden
    if (!(target.className).includes("basket")) {
        $(".basket").addClass("hide");
    }
    switch (dataInfo) {
        case 'home':
            showMainAndCategoryPage(goodsData) // to render all items
            break;
        case 'laptop':
        case 'phone':
        case 'TV':
            showMainAndCategoryPage(goodsData, dataInfo); // to render certain category items
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
        //TO-DO: need also add events for filter and sorting
    }

}