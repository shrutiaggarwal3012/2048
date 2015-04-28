// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var TwoFourEightApp = 

angular.module('twofoureight', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


TwoFourEightApp.controller('BaseController', function($scope){

var elem = document.getElementById('2048grid');
  function swipeLeft(){
    alert('swipe left ');
  }

  function swipeRight(){
    alert('swipe right ');
    //var affectedCols = $scope.GridData.rightSwipe ;
    computeGrid(0);
    $scope.GridData.currentGridBlocks[5]=10;
  }

  function swipeUp(){
    alert('swipe up ');
  }

  function swipeDown(){
    alert('swipe down ');
  }
  $scope.onSwipe = function(){
    ionic.onGesture('swipeleft', swipeLeft, elem);
    ionic.onGesture('swiperight', swipeRight, elem);
    ionic.onGesture('swipeup', swipeUp, elem);
    ionic.onGesture('swipedown', swipeDown, elem);
  }

  function computeSectionRightSwipe(a) {
    var b = [];
    for(var i=a.length-1; i>=0; i--){
        if(a[i] != 0){
            if(b[b.length-1] == a[i]){
                b[b.length-1] *= 2;
            } else {
                b.push(a[i]);
            }
        }
    }
    b.reverse();
    for(i=b.length; i<4; i++){
        b.unshift(0);
    }
    return b;
  }

  $scope.test = function() {
   $scope.GridData.currentGridBlocks[4]=8;
   $scope.GridData.currentGridBlocks[7]=12; 
   computeGrid(0);
  }

  function computeGrid(firstIndex) {
    var affectedSection = $scope.GridData.currentGridBlocks.slice(firstIndex,4)
    affectedSection = computeSectionRightSwipe(affectedSection) ;
    $scope.GridData.currentGridBlocks.splice(firstIndex, 4, affectedSection[0], affectedSection[1],
    affectedSection[2], affectedSection[3]);
    console.log($scope.GridData.currentGridBlocks);
  }

$scope.GridData = {
    colsCount : 4,
    leftRightSwipe: [0,4,8,12],
    blocks : [2,4,0,0,
              0,0,0,0,
              0,0,0,0,
              0,0,0,0],
    currentGridBlocks :  [2,2,2,2,
                          0,0,0,0,
                          0,0,0,0,
                          0,0,0,0],
  } ;
});