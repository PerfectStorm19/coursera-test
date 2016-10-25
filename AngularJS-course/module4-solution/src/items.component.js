(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/items.template.html',
  bindings: {
    categories: '<',
    items: '<'
  }
});

})();
