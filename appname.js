var app = angular.module('myfirstapp', []);
app.controller('namectrlr', function($scope) {
$scope.nameList2 = JSON.parse(localStorage.getItem('nameList1'));
$scope.addthename = function(modeItem){
 if (!(modeItem === undefined || modeItem === '')){
     $scope.nameList2.push(modeItem);
     }

 localStorage.setItem('nameList1',JSON.stringify($scope.nameList2));

}

 $scope.remove=function(i){ 
      var index=$scope.nameList2.indexOf(i)
      $scope.nameList2.splice(index,1);
     localStorage.setItem('nameList1',JSON.stringify($scope.nameList2));
    }

    $scope.edit=function(index,i){
        $scope.nameList2[index]=i;
        localStorage.setItem('nameList1',JSON.stringify($scope.nameList2));
    }


});