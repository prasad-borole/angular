(function () {

  'use strict';
  angular.module('shoppingListApp',[])
  .controller('ShoppingListBuyController', ShoppingListBuyController)
  .controller('ShoppingListBoughtController', ShoppingListBoughtController)
  .service('ShoppingListService', ShoppingListService);

  ShoppingListBuyController.$inject = ['ShoppingListService'];
  function ShoppingListBuyController(ShoppingListService) {
    var itemAdder = this;

    itemAdder.toBuy = ShoppingListService.getToBuy();

    itemAdder.boughtItem = function (itemIndex) {
      try{
        ShoppingListService.boughtItem(itemIndex);
      } catch(error) {
        itemAdder.errorMessage = error.message;
      }
    }
  }

  ShoppingListBoughtController.$inject = ['ShoppingListService'];
  function ShoppingListBoughtController(ShoppingListService) {
    var showList = this;
    showList.bought = ShoppingListService.getBought();

  }

  function ShoppingListService() {
    var service = this;

    var toBuy = [ { name: "cookies", quantity: 10 },
                  { name: "books", quantity: 2 },
                  { name: "cold-drink", quantity: 3 },
                  { name: "salad", quantity: 5 },
                  { name: "shampoo", quantity: 1 }];

    var bought = [];
    var buyMsg = "";

    service.boughtItem = function (itemIdex) {
      var item = {
        name: toBuy[itemIdex].name,
        quantity: toBuy[itemIdex].quantity
      };
      bought.push(item);
      toBuy.splice(itemIdex, 1);
      console.log("bought:"+bought.length);
      if(toBuy.length <=0 ) {
        buyMsg="Everything is bought!";
        throw new Error(buyMsg);
      }
    };

    service.getToBuy = function () {
      return toBuy;
    };

    service.getBought = function () {

      return bought;
    };

  }

})();
