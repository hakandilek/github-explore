(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', '$log', 'Github', UserService ]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q, $log, Github){
    var github = new Github({
        // required
        version: "3.0.0",
        // optional
        debug: true,
        protocol: "https",
        timeout: 5000,
        headers: {
            "user-agent": "hakandilek/github-explore"
        }
    });

    // Promise-based API
    return {

      listFiles : function(path) {
        $log.debug("listFiles : " + path);
        if (!path) path = "";

        var call = function(path) {
          var def = $q.defer();

          var repo = github.getRepo("hakandilek", "github-explore");
          repo.contents("master", path, function(err, contents) {
            if (err) {
              def.reject(err);
            } else {
              def.resolve(contents);
            }
          });

          return def.promise;
        };

        return call(path).then(function(contents) {
          return contents;
        }, function(reason) {
          $log.error("Failed : " + reason);
        });
      }
    };
  }

})();
