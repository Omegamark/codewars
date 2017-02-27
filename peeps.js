.controller('gameCtrl', function($http, $geolocation, $scope, $stateParams) {
  const vm = this;
  $geolocation.getCurrentPosition({
    timeout: 60000
    }).then(function(position) {
       $scope.getDistance = function(lat1, long1, lat2, long2){
         Number.prototype.toRad = function() {
           return this * Math.PI / 180;
         }

         var R = 6371; // km
         //has a problem with the .toRad() method below.
         var x1 = lat2-lat1;
         var dLat = x1.toRad();
         var x2 = long2-long1;
         var dLong = x2.toRad();
         var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                         Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                         Math.sin(dLong/2) * Math.sin(dLong/2);
         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
         var d = R * c;
         var inMiles = (d/2)/4 + (d/2)
         return inMiles
       }
        $scope.myPosition = position;
        let myLocation = {
          lat: $scope.myPosition.coords.latitude,
          long: $scope.myPosition.coords.longitude
        };

        $http.get('http://localhost:3000/games/'+ $stateParams.id)
          .then(data=>{
            console.log(data)
            vm.game_params = {
              game_id: data.data.id,
              creator_name: "Matt" ,
              start_time: data.data.time,
              game_type: data.data.type,
              lat2: data.data.lat,
              long2: data.data.long,
            }

            vm.theDistance = $scope.getDistance(myLocation.lat, myLocation.long, vm.game_params.lat2, vm.game_params.long2)
            vm.distanceToHere = vm.theDistance.toFixed(2);
            console.log(vm.distanceToHere);
          })

     });
