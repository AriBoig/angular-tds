/**
 * Created by arist on 24/01/2017.
 */

myApp.controller('myCtrl',["$cookies", function($cookies) {
    var msg = $cookies.get("msg");
    this.value = msg || "";
    this.note = "Note vide";
    this.caractereRestant = 100;
    var self = this;
    this.count = function(){
        this.caractereRestant = 100 - this.value.length;
        if(this.caractereRestant < 50)
            this.warning = true;
        if(this.caractereRestant < 20)
            this.danger = true;
        else
            this.info = true;
        if(this.caractereRestant != 100)
            this.note = "Note modifiée";
    };

    this.save = function(){
        self.note = "Note enregistrée";
        $cookies.put("msg",self.value);
    };

    this.clear = function(){
        self.value="";
        self.note = "Note vide";
        self.caractereRestant = 100;
    };

}]);