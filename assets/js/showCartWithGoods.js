function showCartWithGoods (goodsInCartData) {
    $(".basket").removeClass("hide");
    $(".basket__table tr").remove();

    if (goodsInCartData.length) {
        goodsInCartData.forEach(good => {
            let newGood = $(`
                <tr data-item-id=${good.item.id}>
                    <td class="basket__delete" data-item-id=${good.item.id}>
                        <button data-item-id=${good.item.id} data-info="remove">Удалить</button>
                    </td>
                    <td class="basket__pic" data-item-id=${good.item.id}>
                        <img src=${good.item.img} width="33" height="33" alt=${good.item.name} data-item-id=${good.item.id} data-info="show_product">
                    </td>
                    <td class="basket__name">${good.item.name}</td>
                    <td class="basket__price">
                        <div class="basket__spinner">
                            <div class="basket__minus" data-info="add">-</div>
                            <div class="basket__count">${good.qty}</div>
                            <div class="basket__plus" data-info="remove">+</div>
                        </div>
                        <span class="basket__single_item_price">${good.item.price} грн.</span>
                    </td>
                    <td class="basket__value">${good.sumItem} грн.</td>
                </tr>
                `)
                $(".basket__table tbody").append(newGood);
        })
    }
}