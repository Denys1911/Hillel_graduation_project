function showSlider (goodsData) {
    const sliderFilter = "popularity";
    let tempArray = getSortedGoods(getGoodsAccordingToCategory(goodsData), sliderFilter);
    let slides = $(".d-block");
    slides = $.makeArray(slides);

    slides.forEach( (slide, index) => {
        slide.alt = tempArray[index].name;
        slide.src = tempArray[index].img});
}