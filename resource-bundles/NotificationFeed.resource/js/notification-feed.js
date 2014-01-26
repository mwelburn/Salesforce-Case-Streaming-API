(function(angular)
{
  'use strict';

  var module = angular.module('NotificationFeedApp', ['ngAnimate']);

  module.controller("FeedController", ['$scope', function($scope)
  {
    $scope.sessionId;
    $scope.feed = [];

    // TODO - allow toggling between Menu items

    $scope.init = function(sessionId)
    {
      $scope.sessionId = sessionId;

      jQuery.cometd.init(
      {
        url: window.location.protocol + '//' + window.location.hostname + '/cometd/29.0/',
        requestHeaders: { Authorization: 'OAuth ' + sessionId },
        appendMessageTypeToURL : false
      });

      jQuery.cometd.subscribe('/topic/NewCases', function(message)
      {
        console.log(message);
        $scope.feed.unshift(message.data);

        $scope.$apply();
      });
    };
  }]);
})(angular);