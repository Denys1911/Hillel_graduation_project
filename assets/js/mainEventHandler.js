function mainEventHandler(event) {
    const {goodsData, goodsInCartData} = event.data;
    const target = event.target;
    const dataInfo = target.dataset.info;
    const itemId = parseInt(target.dataset.itemId);
    const mainBlock = $('main');

    // when click isn't on basket element, basket should be hidden
    if (!(target.className).includes("basket")) {
        $(".basket").addClass("hide");
    }

    switch (dataInfo) {
        case 'home':
            showMainAndCategoryPage(goodsData);
            break;
        case 'laptop':
        case 'phone':
        case 'TV':
            showMainAndCategoryPage(goodsData, dataInfo);
            break;
        case 'add':
        case 'show_cart':
            //add to cart function;
            showCartWithGoods(itemId, goodsInCartData);
            //они будут работать вместе, т.к. мы показываем корзину каждый раз когда добавляем товар в нее
            break;
        case 'remove':
            //remove from cart function;
            break;
        case 'increase':
            //increase q-ty of item in cart function;
            break;
        case 'decrease':
            //decrease q-ty of item in cart function;
            break;
        case 'show_product':
            showGoodsOnItemPage(goodsData, itemId);
            break;
        case 'filter_btn':
            filterGoods(goodsData);
            renderPaginationBlock();
            performPagination();
            break;
        case 'filter-reset_btn':
            resetFilters();
            renderPaginationBlock();
            performPagination();
            break;
        case 'price':
        case 'popularity':
            mainBlock.attr('data-current-sort', dataInfo);
            showSortedAndFilteredGoodsOnPage(goodsData);
            break;
        case 'descending':
        case 'ascending':
            mainBlock.attr('data-current-sort-direction', dataInfo);
            showSortedAndFilteredGoodsOnPage(goodsData);
            break;
        case 'page-number':
            $('.pagination__item').removeClass('pagination__item--current');
            $(target).addClass('pagination__item--current');
            validatePageNavButtons();
            performPagination();
            break;
        case 'page-prev':
            performPageSwitching('prev');
            validatePageNavButtons();
            performPagination();
            break;
        case 'page-next':
            performPageSwitching('next');
            validatePageNavButtons();
            performPagination();
            break;
        case 'add_comment':
            addNewComments(goodsData, itemId);
            break;
    }

    function performPageSwitching(flag) {
        if ($(target).hasClass('pagination__item--disabled')) {
            return;
        }

        const activeClass = 'pagination__item--current';
        const previousActivePage =  $(`.pagination__item.${activeClass}`);
        const previousPageNumber = previousActivePage.data('page-number');
        const newPageNumber = flag === 'prev' ? previousPageNumber - 1 : previousPageNumber + 1;

        previousActivePage.removeClass(activeClass);
        $(`.pagination__item[data-page-number=${newPageNumber}]`).addClass(activeClass);
    }

    function validatePageNavButtons() {
        const firstPageBtn = $('.pagination__item:nth-child(2)');
        const lastPageBtn = $('.pagination__item:nth-last-child(2)');
        const prevPageBtn = $('.pagination__item:nth-child(1)');
        const nextPageBtn = $('.pagination__item:nth-last-child(1)');
        const activeClass = 'pagination__item--current';
        const disableClass = 'pagination__item--disabled';

        if (firstPageBtn.hasClass(activeClass)) {
            prevPageBtn.addClass(disableClass);
        } else {
            prevPageBtn.removeClass(disableClass);
        }

        if (lastPageBtn.hasClass(activeClass)) {
            nextPageBtn.addClass(disableClass);
        } else {
            nextPageBtn.removeClass(disableClass);
        }
    }
}