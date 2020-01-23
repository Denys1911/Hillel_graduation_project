const showGoodsOnItemPage = (goodsData, itemId) => {
    let newItem = goodsData.find(good => {
        if (good.id === itemId) {
            return good;
        }
    });

    // hide slider, filters and categories
    $("section.catalog, aside.filters, .carousel, .page-title-name, .basket, .basket__background").addClass("hide");

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
                        appendItemProperty("Доступность","ЕСТЬ В НАЛИЧИИ");
                    } else {
                        appendItemProperty("Доступность","НЕТ В НАЛИЧИИ");
                    }
                    break;
                case "brand":
                    appendItemProperty("Бренд",`${newItem[key]}`);
                    break;
                case "name":
                    appendItemProperty("Название",`${newItem[key]}`);
                    break;
                case "category":
                    appendItemProperty("Категория",`${newItem[key]}`);
                    break;
                case "resolution":
                    appendItemProperty("Разрешение",`${newItem[key]}`);
                    break;
                case "cpu":
                    appendItemProperty("Процессор",`${newItem[key]}`)
                    break;
                default:
                    appendItemProperty(`${key}`,`${newItem[key]}`)
                    break;
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

function appendItemProperty(field, value) {
    let itemDesc = $(".product__table");

    itemDesc.append(`
        <div class="product__row">
            <div class="product__col product__col--properties">${field}</div>
            <div class="product__col product__col--values">${value}</div>
        </div>`);
}