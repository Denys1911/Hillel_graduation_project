'use strict';

import { renderItemPage } from "./product.js";
import { renderItemsPage } from "./base.js";

export function mainEventHandler(currentEvent) {
    let dataInfo = currentEvent.target.dataset.info;
    let dataItemId = currentEvent.target.parentElement.dataset.itemId; // this dataset params will be unique on each product item element
    switch (dataInfo) {
        case 'home':
            renderItemsPage(); // to render all items
            break;
        case 'laptop':
        case 'phone':
        case 'TV':
            renderItemsPage(dataInfo); // to render certain category items
            break;
        case 'add':
        case 'show_cart':
            //add to cart function;
            renderCart();
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
            renderItemPage(dataItemId);
            break;
        //TO-DO: need also add events for filter and sorting
    }

}