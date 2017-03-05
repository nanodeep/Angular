      var app = angular.module('myfirstapp', []);
app.controller('namectrlr', function($scope) {
$scope.nameList = [];
$scope.addthename = function(modeItem){
 if (!(modeItem === undefined || modeItem === '')){
     $scope.nameList.push(modeItem);     
     } 
}
 $scope.remove=function(i){ 
      var index=$scope.nameList.indexOf(i)
      $scope.nameList.splice(index,1);     
    }
});