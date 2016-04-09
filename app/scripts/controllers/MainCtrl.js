angular
  .module('signGenerator')
  .controller('MainController', function($scope, $sce) {

    $scope.remoteImage = "https://ci4.googleusercontent.com/proxy/31CARVhhQT4SewJqVxHUzK3s0LrosHidVlSt4jqF4VlO8KtHnSiWLpwnzY3U7AbC4pLO-PUtx3YtDbHNdimet0ghySjVpd3gXF8=s0-d-e1-ft#http://zylun.com/wp-content/uploads/2014/02/logo.png";

    $scope.details = {
      name: "",
      position: "",
      email: "",
      number: "",
      skype: ""
    };

    $scope.isIncomplete = function() {
      var missing = 0;
      for(var i in $scope.details) {
        if(!$scope.details[i]) missing++;
      }
      return missing == Object.keys($scope.details).length;
    }

    $scope.formatHTML = function(label, link, content) {
      return $sce.trustAsHtml(label + ": <a href='"+link+"'>"+content+"</a>");
    };

    $scope.reset = function() {
      $scope.details = {};
    }

    $scope.yearCopyright = function() {
      var d = new Date();
      return d.getFullYear();
    }

    $scope.onSuccess = function(e) {
      e.clearSelection();
    }

  });