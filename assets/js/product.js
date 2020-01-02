'use strict';

export function renderItemPage(itemId) {
    let items;
    $("section.catalog").remove();
    // $("aside.filters").remove(); //need just display: none
    $("<section/>").addClass("product").appendTo("main");
    let response = $.ajax({
        url: 'https://gist.githubusercontent.com/A11oy/92fe5e51f864318017d54ebdb694261e/raw/6e121493d14a5743ce469b14208511e6d39e91d9/dataTest2.json',
        success: function () {
            items = JSON.parse(response.responseText);
            if (items.length && $("section.product")) {
                let item;
                if (item = items.filter(item => item.id === itemId)[0]) {
                    let productImage = $(`<img class="product__img" src="${item.img}" width="500" height="600" alt="${item.brand} ${item.name}">
                                        <div class="product__description">
                                        <h5 class="product__title">${item.brand} - ${item.name}</h5>
                                        <p class="product__text">NEED DESCRIPTION FOR ITEM ${item.id} ${item.name} OBJECT</p>
                                        <table class="product__table"></table>`);
                    productImage.appendTo($("section.product"));
                    for (let key in item) {
                        if(item[key] !== "undefined" && key !== "name" && key !== "brand" && key !== "img" && key !== "price") {
                            let newProperty = $(`<tr class="product__row">
                                                    <td class="product__col product__col--properties">${key}</td>
                                                    <td class="product__col product__col--values">${item[key]}</td>
                                                </tr>`);
                            newProperty.appendTo(".product__table");
                        }
                    }
                    let productPrice = $(`<div class="product__buy">
                                        <p class="product__price">
                                            Цена: <span class="product__price-text">${item.price}</span>
                                        </p>
                                        <button class="product__btn btn">Заказать</button>
                                        </div>`);
                    productPrice.appendTo(".product__description")
                }
            }
        }
    });
}