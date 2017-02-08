/**
 * Created by arist on 24/01/2017.
 */

myApp.controller('myCtrl', [function() {
    var self = this;
    this.totalite = 300;
    this.nbServices = 1;
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
        ]
    this.promo = [
        {
            "B22":0.05,
            "AZ":0.01,
            "UBOAT":0.02
        }
    ]
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