(async function() {
    const GOODS_STORAGE_NAME = 'all_goods';
    const CART_STORAGE_NAME = 'goods_in_cart';
    let goodsData = await getGoodsData(GOODS_STORAGE_NAME);
    let goodsInCartData = await getGoodsData(CART_STORAGE_NAME);

    $("body").on("click", {goodsData, goodsInCartData} ,mainEventHandler);
    showMainAndCategoryPage(goodsData);
    showBrandFilter(goodsData);
    showResolutionsFilter(goodsData);

    addNewComments();
})();

const addNewComments = () => {
    $('#commentsForm').submit( (goodsData) => {
        event.preventDefault();

        let name = $('.comments__field--name');
        let area = $('.comments__field--textarea');

        // localStorrage
        let comments = []; 
        let regExp = /\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\']{1}[A-Z]{1}[a-z]{1,30}){2,5}/;

        let testName = !(name.val().length === 0) || regExp.test(name.val());
        let textArea = !(area.val().length === 0) || regExp.test(area.val());

        if ($('.comments__invalid').hasClass('comments__invalid')) {
            $('.comments__invalid').remove();
        }

        if (testName && textArea) {

            // This is have to push in localStorage
            comments.push({
                user: name.val(),
                text: area.val(),
            })


            $('.comments__list').append(`
                <li>
                  <div>${name.val()}</div>
                  <div>${area.val()}</div> 
                </li>`
            );

            name.val('');
            area.val('');

        } else {
            name.before('<div class="comments__invalid">invalid</div>');
            area.before('<div class="comments__invalid">invalid</div>');
        };

    });
};