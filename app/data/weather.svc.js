(function(){

  angular.module("app.data")
  .factory("weatherSvc",function($http, $q, weatherImgUrl, weatherSvcUrl, countryFlagImgUrl){
    return {
      find : findByLocation,
      getCurrent: getCurrentWeather,
      getForecast: getForecast,
      getWeatherImgUrl: getWeatherImgUrl,
      getCoutryFlagImgUrl: getCoutryFlagImgUrl,
      kelvinToDegree: kelvinToDegree,
      getTime: getTime
    }

    function getCurrentWeather(id) {
      var defer = $q.defer();

      var url = weatherSvcUrl+"weather?id="+id+"&APPID=00d99c37b9d2803ec1dcfb2d5bcd7653";

      $http.get(url)
      .success(function(data){
        defer.resolve(data);
      })
      .error(function(err){
        defer.reject(err)
      })

      return defer.promise;
    }

    function findByLocation(location){
      var url = weatherSvcUrl+"find?q="+location+"&APPID=00d99c37b9d2803ec1dcfb2d5bcd7653";

      var defer = $q.defer();

      $http.get(url)
      .success(function(data){
        defer.resolve(data);
      })
      .error(function(err){
        defer.reject(err);
      })

      return defer.promise;

    }

    function getForecast(id) {

      var defer = $q.defer();

      var url = weatherSvcUrl+"forecast/daily?id="+id+"&APPID=00d99c37b9d2803ec1dcfb2d5bcd7653";

      $http.get(url)
      .success(function(data){
        defer.resolve(data);
      })
      .error(function(err){
        defer.reject(err);
      });

      return defer.promise;
    }

    function getWeatherImgUrl(imgStr) {
      return weatherImgUrl + imgStr + ".png";
    }

    function getCoutryFlagImgUrl(imgStr) {
      return countryFlagImgUrl + imgStr.toLowerCase() + ".png";
    }

    function kelvinToDegree(deg) {
      return deg - 275.15;
    }

    function getTime(dt) {
        return new Date(dt*1000);
    }

  });

})();
