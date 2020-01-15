const getGoodsAccordingToCategory = goodsData => {
    const currentCategory = $('main').attr('data-current-category');

    return currentCategory ? goodsData.filter(good => good.category === currentCategory) : goodsData;
};

const getSortedGoods = goodsData => {
    const goodsDataCopy = [...goodsData];
    const mainBlock = $('main');
    const currentSortType = mainBlock.attr('data-current-sort');
    const currentSortDirection = mainBlock.attr('data-current-sort-direction');

    const sortGoodsByValueDescending = () => {
        return goodsDataCopy.sort((a, b) => b[currentSortType] - a[currentSortType]);
    };

    const sortGoodsByValueAscending = () => {
         return goodsDataCopy.sort((a, b) => a[currentSortType] - b[currentSortType]);
    };

    return currentSortDirection === 'descending' ? sortGoodsByValueDescending() : sortGoodsByValueAscending();
};

const prepareGoods = (goodsData, ...functions) => {
    const performRequiredFunctions = goodsData => {
        functions.forEach(f => f(goodsData));
    };

    compose(
        getGoodsAccordingToCategory,
        getSortedGoods,
        performRequiredFunctions
    )(goodsData);
};

const renderContentOnMainAndCategoryPage = goodsData => prepareGoods(goodsData, showBrandFilter, renderGoods);

const showSortedAndFilteredGoodsOnPage = goodsData => prepareGoods(goodsData, renderGoods, filterGoods);