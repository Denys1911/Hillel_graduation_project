const showGoodsOnItemPage = (goodsData, itemId) => {
    let itemDesc = $(".product__table");

    let newItem = goodsData.find(good => {
        if (good.id === itemId) {
            return good;
        }
    });

    // hide slider, filters and categories
    $("section.catalog, aside.filters, .carousel, .page-title-name").addClass("hide");

    // show product and comments
    $("section.product, section.comments").removeClass("hide");

    // clear previous products data
    $(".product__row").remove();

    $(".product__title").text(`${newItem.brand} ${newItem.category} ${newItem.name}`);
    $(".product__img").attr({"src": `${newItem.img}`, "alt": `${newItem.name}`});
    $(".product__price-text").text(`${newItem.price} грн.`);
    $(".product__btns").attr({"data-available": `${newItem.available}`});
    $("button.product__btn").attr({"data-item-id":`${newItem.id}`, "data-info": "addFromPDP"});

    // draw item description properties
    for (let key in newItem) {
        if (key !== "price" && key !== "img" && key !== "comments" && key !== "popularity") {
            switch (key) {
                case "available":
                    if (newItem[key]) {
                        itemDesc.append(`
                        <div class="product__row">
                            <div class="product__col product__col--properties">Доступность</div>
                            <div class="product__col product__col--values">ЕСТЬ В НАЛИЧИИ</div>
                        </div>`);
                    } else {
                        itemDesc.append(`
                        <div class="product__row">
                            <div class="product__col product__col--properties">Доступность</div>
                            <div class="product__col product__col--values">НЕТ В НАЛИЧИИ</div>
                        </div>`);
                    }
                    break;
                case "brand":
                    itemDesc.append(`
                    <div class="product__row">
                        <div class="product__col product__col--properties">Бренд</div>
                        <div class="product__col product__col--values">${newItem[key]}</div>
                    </div>`);
                    break;
                case "name":
                    itemDesc.append(`
                    <div class="product__row">
                        <div class="product__col product__col--properties">Название</div>
                        <div class="product__col product__col--values">${newItem[key]}</div>
                    </div>`);
                    break;
                case "category":
                    itemDesc.append(`
                    <div class="product__row">
                        <div class="product__col product__col--properties">Категория</div>
                        <div class="product__col product__col--values">${newItem[key]}</div>
                    </div>`);
                    break;
                case "resolution":
                    itemDesc.append(`
                    <div class="product__row">
                        <div class="product__col product__col--properties">Разрешение</div>
                        <div class="product__col product__col--values">${newItem[key]}</div>
                    </div>`);
                    break;
                case "cpu":
                    itemDesc.append(`
                    <div class="product__row">
                        <div class="product__col product__col--properties">Процессор</div>
                        <div class="product__col product__col--values">${newItem[key]}</div>
                    </div>`);
                    break;
                default:
                    itemDesc.append(`
                    <div class="product__row">
                        <div class="product__col product__col--properties">${key}</div>
                        <div class="product__col product__col--values">${newItem[key]}</div>
                    </div>`);
                }   
        }
    }

    // clear previous comments
    $(".comments__left ul li").remove();

    $("button.comments__btn").attr({"data-item-id": `${newItem.id}`});

    if (newItem.comments.length > 0) {
        newItem.comments.forEach(comment => {
            let newComment = $(`<li>${comment.user} left comment: <br /> "${comment.text}"</li>`);
            $(".comments__left ul").append(newComment);
        })
    } else {
        $(".comments__left ul").append($(`<li class="comment__empty">Новых комментариев нет.<br />Оставьте свой первым</li>`));
    }
};
