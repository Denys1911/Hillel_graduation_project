'use strict';

export function renderItemsPage(category) {
    let items;
    $("section.catalog").remove();
    $("section.product").remove();
    // $("aside.filters") //need diplay
    $("<section/>").addClass("catalog").appendTo("main");
    $("<ul/>").addClass("catalog__list").appendTo("section.catalog");

    let response = $.ajax({
        url: 'https://gist.githubusercontent.com/A11oy/92fe5e51f864318017d54ebdb694261e/raw/6e121493d14a5743ce469b14208511e6d39e91d9/dataTest2.json',
        success: function () {
            items = JSON.parse(response.responseText);
            if (items.length && $(".catalog__list")) {
                if (category) {
                    items = items.filter(item => item.category === category);
                }
                items.forEach(item => {
                    let newProduct = $(`<li class='catalog__item' data-item-id='${item.id}'>
                                <div class='catalog__item-browser'>
                                </div>
                                <img class='catalog__img' src='${item.img}' alt='${item.brand} ${item.name}' data-info='show_product'>
                                <div class='catalog__item'>
                                    <h3 class='catalog__title'>${item.brand}</h3>
                                    <p class='catalog__text'>${item.name}</p>
                                    <a class='catalog__btn btn' href='#'>${item.price} $</a>
                                </div>
                            </li>`);
                    newProduct.appendTo($(".catalog__list"));
                });
            }
        }
    });
}
