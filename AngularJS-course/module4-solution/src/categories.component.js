(function () {
'use strict';

angular.module('MenuApp')
.component('menuCategories', {
  templateUrl: 'src/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
