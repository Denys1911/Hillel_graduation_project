const getGoodsData = async goodsStorageName => {
    let localStorageValue = localStorage.getItem(goodsStorageName);

    if (localStorageValue) {
        return JSON.parse(localStorageValue);
    }

    const res = await fetch('data/data.json');
    localStorageValue = await res.json();
    localStorage.setItem(goodsStorageName, JSON.stringify(localStorageValue));

    return localStorageValue;
};

const setGoodsData = (goodsStorageName, goodsData) => {
    localStorage.setItem(goodsStorageName, JSON.stringify(goodsData));
}