const showMainAndCategoryPage = (goodsData, category) => {
    $("section.product, section.comments").addClass("hide");
    $("li.catalog__item").remove();
    $(".carousel, section.catalog, aside.filters, .page-title-name").removeClass("hide");

    // add special data attr for filter block
    $("main").attr("data-current-category", category);
    if (!category) {
        $("main").removeAttr("data-current-category");
    }

    // clear filters when category is choosen
    $(".filters__form").trigger("reset");

    let pageTitleName = $(".page-title-name");
    switch (category) {
        case "laptop":
            pageTitleName.text("НОУТБУКИ");
            break;
        case "TV":
            pageTitleName.text("ТЕЛЕВИЗОРЫ");
            break;
        case "phone":
            pageTitleName.text("ТЕЛЕФОНЫ");
            break;
        default:
            pageTitleName.text("ВСЕ ТОВАРЫ");
            break;
    }

    renderGoods(goodsData, category);
};