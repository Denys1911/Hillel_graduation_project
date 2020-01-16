const AMOUNT_OF_GOODS_ON_EACH_PAGE = 6;

const renderPaginationBlock = () => {
    const goods = $('.catalog__item').not('.visually-hidden');
    const amountOfPages = Math.ceil(goods.length / AMOUNT_OF_GOODS_ON_EACH_PAGE);
    const paginationList = $('.pagination__list');

    if (amountOfPages === 0) {
        paginationList.html(`<div class="pagination__empty">Таких товаров не найдено</div>`);
        return;
    }

    paginationList.html('');

    for (let i = 0; i < amountOfPages; i++) {
        let className = 'pagination__item';

        if (i === 0) {
            className += ' pagination__item--current'
        }

        paginationList.append(`
            <li class="${className}" data-info="page-number" data-page-number=${i}>${i + 1}</li>
        `);
    }

    paginationList.prepend(`
        <li class="pagination__item pagination__item--disabled" data-info="page-prev">
            Предыдущая
        </li>
    `);

    paginationList.append(`
        <li class="pagination__item ${amountOfPages === 1 ? 'pagination__item--disabled' : ''}" 
            data-info="page-next">
            Следующая
        </li>
    `);
};

const performPagination = () => {
    const activePageNumber = $('.pagination__item--current').data('page-number');
    const indexOfFirstGoodOnPage = activePageNumber * AMOUNT_OF_GOODS_ON_EACH_PAGE;
    const indexOfLastGoodOnPage = (activePageNumber + 1) * AMOUNT_OF_GOODS_ON_EACH_PAGE;
    const goods = $('.catalog__item').not('.visually-hidden');

    goods.each(function(index) {
        if (index >= indexOfFirstGoodOnPage && index < indexOfLastGoodOnPage) {
            $(this).removeClass('catalog__item--hidden');
        } else {
            $(this).addClass('catalog__item--hidden');
        }
    })
};