/**
 * Created by arist on 24/01/2017.
 */

myApp.controller('myCtrl', [function($http) {
    var self = this;
    this.totalite = 300;
    this.nbServices = 1;
    this.pCoche = false;
    this.pErreur = false;
    this.totalAvecRemise = 0;
    this.remise = 0;
    this.services = [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
        ];

    this.promoExiste = function(){
        $http.get("promo.json").then(function(response) {
            self.remise = 0;
            self.totalAvecRemise = 0;
            self.pErreur = true;
            angular.forEach(response.data, function(value, key){
                if(self.codePromo == key) {
                    self.remise = self.totals*value;
                    self.totalAvecRemise = self.totals-self.remise;
                    self.pErreur = false;
                }
            });
        });
    };
    self.toggleActive = function($item){
        if(this.services[$item].active == true) {
            this.services[$item].active = false;
            self.nbServices--;
        }
        else {
            this.services[$item].active = true;
            self.nbServices++;
        }
        this.total();
    };

    self.total = function(){
        var somme = 0;
        angular.forEach(self.services, function(service){
            if(service.active)
                somme += service.price;
        });
        self.totalite = somme;
    };

    self.remise = function(){

    };
}]);