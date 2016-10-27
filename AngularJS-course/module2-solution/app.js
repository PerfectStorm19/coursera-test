(function () {
    'use strict';
    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController',ToBuyController)
        .controller('AlreadyBoughtController',AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);



    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList=this;


        toBuyList.items=ShoppingListCheckOffService.getItems();

        toBuyList.Maker =function (itemIndex,quantity,item) {

          ShoppingListCheckOffService.addItem(item,quantity);

          ShoppingListCheckOffService.removeItem(itemIndex);
          toBuyList.check= ShoppingListCheckOffService.checkItems();
}
}
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var toBuyList=this;
        toBuyList.items=ShoppingListCheckOffService.getBoughtItems();

        toBuyList.check=function(){
           return ShoppingListCheckOffService.checkPurchased();
        }

    }


    function ShoppingListCheckOffService() {
        var service = this;

        var items=[
            {
                name:'cucumber',
                quantity:'2 kgs'
            },
            {
                name:'tomato',
                quantity:'3 kgs'
            },
            {
                name:'jam',
                quantity:'3 jars'
            },
            {
                name:'bread',
                quantity:'7 slices'
            },
            {
                name:'orange juice',
                quantity:'5 bottles'
            }
        ];

        var alreadyBought=[];

        service.length=function () {
            return items.length;
        };
        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            alreadyBought.push(item);
        };

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);

        };

        service.getItems = function () {
            return items;
        };

        service.getBoughtItems=function () {
        return alreadyBought;
        };

        service.checkItems=function (item) {
            return items.length==0;
        };
        service.checkPurchased=function () {
            return alreadyBought.length==0;
        }
    }

})();
