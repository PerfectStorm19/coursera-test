(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    foundItems: '<',
    onRemove: '&'
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowlist = this;
  narrowlist.term = "";

  var found = [];

  narrowlist.onRemove=function (index) {
    found.splice(index, 1);
  };

  narrowlist.search = function () {
    if (narrowlist.term =="") {
      narrowlist.error="Nothing found";
      narrowlist.foundItems=[];
      return;
    }

  var response = MenuSearchService.getMatchedMenuItems(narrowlist.term);

  response.then(function (result) {
    found = [];
narrowlist.error="";
    for (var i=0; i<result.data.menu_items.length;i++) {

      if (result.data.menu_items[i].description.indexOf(narrowlist.term) !== -1) {
        found.push("Name: " + result.data.menu_items[i].name + "  ___  Short name: " + result.data.menu_items[i].short_name +"  ___  Description: " + result.data.menu_items[i].description);
      }
    }
       if (found.length == 0) {
         narrowlist.error="Nothing found";
       }
    narrowlist.foundItems = found;
  });

}
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;
  var found=[];

  service.getMatchedMenuItems = function (term) {
    found= [];
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });

    return response;
  }
}

})();
