function addNewComments(goodsData, itemId) {
    const GOODS_STORAGE_NAME = 'all_goods';
    let commentsContainer = $(".comments__left ul");
    let name = $('.comments__field--name').val();
    let area = $('.comments__field--textarea').val().split("\n").join("<br />");
    let errorMessage = $(".comments__invalid");

    let regexpName = /^[^\s]\w.*$/;
    let regexpArea = /^[^\s]\w.*$/gm;
    
    if (regexpName.test(name) && regexpArea.test(area)) {
        $(".comments__invalid, .comment__empty").addClass("hide");
        let commentData = {
            user: name,
            text: area
        }
        
        goodsData.forEach(good => {
            if (good.id === itemId) {
                good.comments.push(commentData);
            }
        });
    
        setGoodsData(GOODS_STORAGE_NAME, goodsData);

        let newComment = $(`<li>${commentData.user} left comment: <br /> "${commentData.text}"</li>`);
        commentsContainer.append(newComment);
    }
    else {
        errorMessage.removeClass("hide");
    }
    $('.comments__field--name, .comments__field--textarea').val("");
}