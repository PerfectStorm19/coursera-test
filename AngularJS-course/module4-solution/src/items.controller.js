(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['categorydata'];
function ItemsController(categorydata) {
  var itemsList = this;

    itemsList.items = categorydata.menu_items;
}

})();
