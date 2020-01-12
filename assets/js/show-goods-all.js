const showGoodsOnMainAndCategoryPage = (goodsData, category) => {
    const catalogList = $('.catalog__list');
    // hide item page elements
    $("section.product").addClass("hide");
    $("section.comments").addClass("hide");
    // clear previos goods
    $("li.catalog__item").remove();
    $(".carousel").removeClass("hide");
    $("section.catalog").removeClass("hide");
    $("aside.filters").removeClass("hide");
    // add special data attr for filter block
    $("aside.filters").attr("data-current-category", category);
    // clear filters when category is choosen
    $(".filters__form").trigger("reset");
    goodsData.forEach(good => {
        if (category && good.category !== category) {
            return;
        }
        const {id, img, name, brand, price, available} = good;
        const availableMessage = '<span class="catalog__text--available">(Есть в наличии)</span>';
        const unavailableMessage = '<span class="catalog__text--unavailable">(Нет в наличии)</span>';

        catalogList.append(`
            <li class="catalog__item" data-item-id=${id} data-available=${available}>
                <div class="catalog__item-browser"></div>
                <a href="#">
                    <img class="catalog__img" data-info="show_product" src=${img} alt="${name}">
                </a>
                <div class="catalog__item-hide">
                    <h3 class="catalog__title">${brand}</h3>
                    <p class="catalog__text">${name}</p>
                    <p>${available ? availableMessage : unavailableMessage}</p>
                    <div class="catalog__btn btn" data-item-id=${id} data-info="add">${price} грн</div>
                </div>
            </li>
        `);
    });
    filterGoods(goodsData);
};