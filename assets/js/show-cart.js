function showCart (goodsData, dataItemId, goodsInCartData) {
    $(".basket").removeClass("hide");
    if (dataItemId) {
        if (goodsInCartData) {
            goodsInCartData.forEach( good => {
                let newGood = $(`
                <tr data-item-id=${good.id}>
                    <td class="basket__delete" data-item-id=${good.id}>
                        <button data-item-id=${good.id} data-info="remove">Удалить</button>
                    </td>
                    <td class="basket__pic" data-item-id=${good.id}>
                        <img src=${good.img} width="33" height="33" alt=${good.name} data-item-id=${good.id} data-info="show_product">
                    </td>
                    <td class="basket__name">${good.name}</td>
                    <td class="basket__price">
                        <div class="basket__spinner">
                            <div class="basket__minus" data-info="decrease">-</div>
                            <div class="basket__count">1</div>
                            <div class="basket__plus" data-info="increase">+</div>
                        </div>
                        <span class="basket__single_item_price">${good.price}</span>
                    </td>
                    <td class="basket__value">${good.price} X good.q-ty</td>
                </tr>
                `)
                $(".basket__table tbody").append(newGood);
            })
        }
    }
}