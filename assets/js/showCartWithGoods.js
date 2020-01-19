function showCartWithGoods (goodsInCartData) {
    $(".basket, .basket__background").removeClass("hide");
    $(".basket__table tr").remove();

    if (goodsInCartData.length) {
        let goodsTotal = 0;
        $(".basket__empty, .order__form").addClass("hide");
        $(".basket__total, .basket__btn").removeClass("hide");
        goodsInCartData.forEach(good => {
            let newGood = $(`
                <tr>
                    <td class="basket__delete">
                        <button data-item-id=${good.item.id} data-info="remove">Удалить</button>
                    </td>
                    <td class="basket__pic">
                        <img src=${good.item.img} width="33" height="33" alt=${good.item.name} data-item-id=${good.item.id} data-info="show_product">
                    </td>
                    <td class="basket__name">${good.item.name}</td>
                    <td class="basket__price">
                        <div class="basket__spinner">
                            <div class="basket__minus" data-info="minus" data-item-id=${good.item.id}>-</div>
                            <div class="basket__count">${good.qty}</div>
                            <div class="basket__plus" data-info="plus" data-item-id=${good.item.id}>+</div>
                        </div>
                        <span class="basket__single_item_price">${good.item.price} грн.</span>
                    </td>
                    <td class="basket__value">${good.sumItem} грн.</td>
                </tr>
                `)
                $(".basket__table tbody").append(newGood);
                goodsTotal += good.sumItem;
        });
        $(".basket__total").text(`ИТОГО: ${goodsTotal} грн.`)
    } else {
        $(".basket__total, .basket__btn, .order__form, .infoContainer").addClass("hide");
        $(".basket__empty").removeClass("hide");
    }
}