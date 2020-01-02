'use strict';

export function renderCart() {
    let items;
    let response = $.ajax({
        // у нас будет объект корзины, к которому будем обращаться через localstorage, ajax временное решение
        url: 'https://gist.githubusercontent.com/A11oy/92fe5e51f864318017d54ebdb694261e/raw/6e121493d14a5743ce469b14208511e6d39e91d9/dataTest2.json',
        success: function () {
            items = JSON.parse(response.responseText);
            if (items.length && $(".basket__table")) {
                items.forEach(item => {
                    let newProduct = $(`<tr data-item-id='${item.id}'>
                            <td class='basket__delete' data-info='remove'>
                                <button><span class='visually'>Удалить</span></button>
                            </td>
                            <td class='basket__pic' data-info='show_product' data-item-id='${item.id}'>
                                <img src='${item.img}' width='33' height='33' alt='${item.brand} ${item.name}'>
                            </td>
                            <td class="basket__name" data-info='show_product'>${item.brand} - ${item.name}</td>
                            <td class="basket__price">1 x<span>${item.price} and multiply with item.q-ty</span></td>
                            <td class="basket__value">${item.price}</td>
                        </tr>`);
                    newProduct.appendTo($(".basket__table tbody"));
                });
            }
        }
    });
}