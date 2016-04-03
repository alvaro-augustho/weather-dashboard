(function () {
  var name = "app";
  var requires = [
    "app.shell",
    "app.search",
    "app.weather",
    "app.forecast",
    "app.component"
  ];

  angular.module(name, requires)
  .run(['$route',function($route){
    $route.reload();
  }]);
})();
