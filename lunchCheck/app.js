(function () {
  'use strict';
  angular.module('lunchCheck',[])
  .controller('lunchCheckController', lunchCheckController);

  lunchCheckController.$inject = ['$scope'];
  function lunchCheckController($scope) {
    $scope.textColor="";
    $scope.borderColor = "";
    $scope.calculateLunch = function () {
      var str=$scope.name;
      if($scope.name && $scope.name.length>=1){

        var sArray = str.split(",");
        var count=0;
        for (var i = 0; i < sArray.length; i++) {
          if(sArray[i].length>0){
            ++count;
          }
        }
        console.log("C:"+count);
        if(count==0){
          $scope.textColor = $scope.borderColor = "red";
          $scope.output="Please enter data first";
        }
        else if(count<=3){
          $scope.textColor = $scope.borderColor = "green";
          $scope.output="Enjoy!";
        }
        else {
          $scope.textColor = $scope.borderColor = "green";
          $scope.output="Too much!";
        }
      }
      else{
        $scope.textColor = $scope.borderColor = "red";
        $scope.output="Please enter data first";
      }
    }
  }
})();
