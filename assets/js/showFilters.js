const showFilter = (goodsData, filterName, filterSelector) => {
    const filtersList = $(filterSelector);
    const filterItems = new Set();

    goodsData.forEach(good => {
        const value = good[filterName];

        if (value) {
            filterItems.add(value);
        }
    });

    filterItems.forEach(item => {
        filtersList.append(`
        <li class="filters__item-option">
            <input type="checkbox"
                   name=${filterName}
                   id="filter-${item}"
                   value=${item}
                   class="visually-hidden filters__input filter__input--checkbox">
            <label for="filter-${item}">${item}</label>
        </li>
    `);
    });
};

const showBrandFilter = goodsData => showFilter(goodsData, 'brand', '.filters__list--brands');
const showResolutionsFilter = goodsData => showFilter(goodsData, 'resolution', '.filters__list--resolution');


