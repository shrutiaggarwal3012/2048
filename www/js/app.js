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

$scope.GridData = {
    blocks: [
              {
                  isActive: true,
                  value: 2
              }, 
              {
                  isActive: false,
                  value: 0
              },
                            {
                  isActive: false,
                  value: 0
              }, 
              {
                  isActive: false,
                  value: 0
              },
              {
                  isActive: false,
                  value: 0
              },
                            {
                  isActive: false,
                  value: 0
              }, 
              {
                  isActive: false,
                  value: 0
              },
              {
                  isActive: false,
                  value: 0
              },
                            {
                  isActive: false,
                  value: 0
              }, 
              {
                  isActive: false,
                  value: 0
              },
              {
                  isActive: false,
                  value: 0
              },
                            {
                  isActive: false,
                  value: 0
              }, 
              {
                  isActive: false,
                  value: 0
              },
              {
                  isActive: false,
                  value: 0
              },
                            {
                  isActive: false,
                  value: 0
              }, 
              {
                  isActive: false,
                  value: 0
              },
              {
                  isActive: false,
                  value: 0
              },
                            {
                  isActive: false,
                  value: 0
              }, 
              {
                  isActive: false,
                  value: 0
              }
            ]
};
});