const filterGoods = goodsData => {
    const filtersSubmitBtn = $('.filters__btn');
    const form = $('.filters__form');
    const goodsCards = $('.catalog__item');

    filtersSubmitBtn.on('click', handleClickOnFilterSubmitBtn);

    function handleClickOnFilterSubmitBtn(e) {
        const filtersValues = createObjWithFilterValues();
        const errorMessage = $('.price-error-message');
        errorMessage.addClass('visually-hidden');

        if (filtersValues.minPrice < 0 || filtersValues.maxPrice < 0) {
            errorMessage.text('Цена должна быть положительной')
                .removeClass('visually-hidden');
            return;
        }

        if (parseInt(filtersValues.minPrice) > parseInt(filtersValues.maxPrice)) {
            errorMessage.text('Минимальная цена должна быть меньше максимальной')
                .removeClass('visually-hidden');
            return;
        }

        goodsCards.each(showGoodsOnPageAccordingToFilters);

        function createObjWithFilterValues() {
            const filtersValues = {
                selectedBrands: [],
                selectedResolutions: []
            };

            const serializedArray = form.serializeArray();

            serializedArray.forEach(({name, value}) => {
                if (name === 'brand') {
                    filtersValues.selectedBrands.push(value);
                    return;
                }

                if (name === 'resolution') {
                    filtersValues.selectedResolutions.push(value);
                    return;
                }

                filtersValues[name] =  value;
            });

            return filtersValues;
        }

        function showGoodsOnPageAccordingToFilters()  {
            const goodsId = parseInt(this.dataset.itemId);
            const goodsCardData = goodsData.find(item => item.id === goodsId);
            const {price, available, brand, resolution, sim, cpu} = goodsCardData;
            const {minPrice, maxPrice, availability, selectedBrands, selectedResolutions,
                selectedCpu, selectedSim} = filtersValues;
            const checkMinPrice = minPrice ? price >= minPrice : true;
            const checkMaxPrice = maxPrice ? price <= maxPrice : true;
            const checkAvailability = availability ? Boolean(+availability) === available : true;
            const checkBrand = selectedBrands.length ? selectedBrands.includes(brand) : true;
            const checkResolution = selectedResolutions.length ? selectedResolutions.includes(resolution) : true;
            const checkCpu = selectedCpu ? selectedCpu === cpu : true;
            const checkSim = selectedSim ? selectedSim === sim : true;

            if (checkMinPrice && checkMaxPrice && checkAvailability && checkBrand && checkResolution
                && checkCpu && checkSim) {
                $(this).removeClass('visually-hidden');
            } else {
                $(this).addClass('visually-hidden');
            }
        }
    }
};