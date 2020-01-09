const showGoodsOnMainPage = goodsData => {
    const catalogList = $('.catalog__list');

    goodsData.forEach(good => {
        const {id, img, name, brand, price, available} = good;
        const availableMessage = '<span class="catalog__text--available">(Есть в наличии)</span>';
        const unavailableMessage = '<span class="catalog__text--unavailable">(Нет в наличии)</span>';

        catalogList.append(`
            <li class="catalog__item" data-id=${id}>
                <div class="catalog__item-browser"></div>
                <img class="catalog__img" src=${img} alt="">
                <div class="catalog__item-hide">
                    <h3 class="catalog__title">${brand}</h3>
                    <p class="catalog__text">${name}</p>
                    <p>${available ? availableMessage : unavailableMessage}</p>
                    <a class="catalog__btn btn" href="product.html">${price} грн</a>
                </div>
            </li>
        `);
    });
};
