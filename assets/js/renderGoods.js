const renderGoods = goodsData => {
    const catalogList = $('.catalog__list');

    catalogList.html('');

    goodsData.forEach(good => {
        const {id, img, name, brand, price, available} = good;
        const availableMessage = '<span class="catalog__text--available">(Есть в наличии)</span>';
        const unavailableMessage = '<span class="catalog__text--unavailable">(Нет в наличии)</span>';

        catalogList.append(`
            <li class="catalog__item" data-available=${available} data-item-id=${id}>
                <div class="catalog__item-browser"></div>
                <a href="#" data-item-id=${id}>
                    <img class="catalog__img" data-info="show_product" src=${img} alt="${name}" data-item-id=${id}>
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
};