'use strict';

import { renderItemsPage } from "./base.js";
import { renderCart } from "./cart.js";
import { mainEventHandler } from "./mainEventHandler.js";

$("body").click(mainEventHandler);
renderItemsPage();
renderCart();