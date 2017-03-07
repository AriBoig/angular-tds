currencyApp.controller('CurrencyController',['$http','$sce', function($http,$sce) {

    var self = this;
    this.currencies;
    this.what = 1;
    this.from = "EUR";
    this.to = "USD";
    this.result;
    this.historique = false;

    $http.get('app/data/currencymap.json').
    then(function(response){
		self.currencies = response.data;
    });

    this.getResult = function(){
        url = $sce.trustAsResourceUrl('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from+'_'+self.to);
        $http.jsonp(url, {jsonCallbackParam: 'callback'}).
        then(function(result){
            if(!jQuery.isEmptyObject(result.data))
                self.result = result.data[self.from+'_'+self.to].val*self.what;
            else
                alert('Erreur lors de la conversion');
        });
    }

    this.swap = function(){
        var temp = self.from;
        self.from = self.to;
        self.to = temp;
    }
}]);
