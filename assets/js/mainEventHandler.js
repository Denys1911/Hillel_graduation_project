function mainEventHandler(event) {
    let goodsData = event.data.all_goods;
    let goodsInCartData = event.data.goods_in_cart;
    let dataInfo = event.target.dataset.info;
    let imgItemId = parseInt($(event)[0].target.offsetParent.dataset.itemId); // this dataset params will be unique on each product item element
    let buyBtnItemId = parseInt(event.target.dataset.itemId);
    // when click isn't on basket element, basket should be hidden
    if (!(event.target.className).includes("basket")) {
        $(".basket").addClass("hide");
    }
    switch (dataInfo) {
        case 'home':
            showGoodsOnMainAndCategoryPage(goodsData) // to render all items
            break;
        case 'laptop':
        case 'phone':
        case 'TV':
            showGoodsOnMainAndCategoryPage(goodsData, dataInfo); // to render certain category items
            break;
        case 'add':
        case 'show_cart':
            //add to cart function;
            showCartWithGoods(buyBtnItemId, goodsInCartData);
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
            showGoodsOnItemPage(goodsData, imgItemId);
            break;
        //TO-DO: need also add events for filter and sorting
    }

}