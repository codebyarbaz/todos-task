app.factory("mainFactory", [
  "$http",
  "$q",
  function ($http, $q) {
    return {
      getRequest(url, headers) {
        const defer = $q.defer();
        $http.get(url, headers).then(
          (res) => {
            defer.resolve(res.data);
          },
          (err) => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },

      putRequest(url, data, headers) {
        const defer = $q.defer();
        $http.put(url, data, headers).then(
          (res) => {
            defer.resolve(res.data);
          },
          (err) => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },

      postRequest(url, data, headers) {
        const defer = $q.defer();
        $http.post(url, data, headers).then(
          (res) => {
            defer.resolve(res.data);
          },
          (err) => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },

      deleteRequest(url, headers) {
        const defer = $q.defer();
        $http.delete(url, headers).then(
          (res) => {
            defer.resolve(res.data);
          },
          (err) => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
    };
  },
]);
