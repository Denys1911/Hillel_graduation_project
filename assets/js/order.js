async function submitOrder (goodsInCartData) {
    let userData = [];
    const goodsStorageName = 'goods_in_cart';
    const infoContainer = $(".confirmSuccess ul");

    $(".order__input").map(function() {
        if (checkValue($(this))) {
            userData.push($( this ).val());
        } else {
            $(".order__error").removeClass("hide");
        }
    })

    if (userData.length === 3) {
        $(".order__error, .basket").addClass("hide");

        let order = {
            id: Date.now(),
            userInfo: userData,
            userCart: goodsInCartData
        };

        await sendOrderData(order);

        goodsInCartData = [];
        localStorage.setItem(goodsStorageName, JSON.stringify(goodsInCartData));

        let orderTotal = 0;
        infoContainer.append(`<li>Информация о заказе №${order.id}: <br />Покупатель: </li>`);

        order.userInfo.forEach((info) => {
            infoContainer.append(`<li>${info}</li>`);
        })

        order.userCart.forEach((good) => {
            orderTotal += good.sumItem;
            infoContainer.append(`
            <li>Товар:<br />
            ${good.item.brand} ${good.item.name} <br />
            Кол-ство: ${good.qty} ед.<br />
            Цена: ${good.item.price} грн. <br />
            Общая сумма: ${good.sumItem} грн.</li>
            `)
        });

        $(".confirmSuccess_total").text(`ОБЩАЯ СУММА ЗАКАЗА: ${orderTotal}`)
        $(".confirmSuccess").removeClass("hide");
    }
}

function checkValue(element) {
    let value = element.val();
    let error = $(".order__error");
    let name = /[A-Za-z]{1,30}/;
    let email = /\w{1,20}\@\w{1,10}\.\w{1,10}/;
    let phone = /\d{3}\-\d{3}\-\d{4}/;

    switch (element.attr("name")) {
        case 'order_name':
            if (!name.test(value)) {
                error.text("Ваше имя должно состоять из 1-30 символов");
            }
            return name.test(value);
        case 'order_email':
            if (!email.test(value)) {
                error.text("Ваша электронная почта должна состоять из 1-20 символов и символа @");
            }
            return email.test(value);
        case 'order_tel':
            if (!phone.test(value)) {
                error.text("Ваш телефон должен быть в формате 123-456-7890");
            }
            return phone.test(value);
    }
}

function sendOrderData(order) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(order),
        dataType: 'json'
    });
}
