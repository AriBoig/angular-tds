/**
 * Created by arist on 24/01/2017.
 */
angular.module('ListesApp').filter("deletedCheck", function() {
        return function (contacts) {
            var nouvelleList = [];
            angular.forEach(contacts, function(contact) {
                console.log(contact);
                if(contact.deleted == false) {
                    nouvelleList.push(contact);
                }
            });
            return nouvelleList;
        };
    });

angular.module('ListesApp').controller('choixController', [function() {
    this.form = 0;
    this.filtre = "";
    this.operation = "";
    this.tmpContact;
    this.contact;
    var self = this;
    this.contacts = [
        {
            "name": "ZUCKENBERG",
            "firstName": "mark",
            "mail": "mark@facebook.com",
            "deleted" : false
        },{
            "name": "GATES",
            "firstName": "bill",
            "mail":"bill@microsoft.com",
            "deleted" : false
        },{
            "name": "JOBS",
            "firstName": "steeve",
            "mail":"bill@microsoft.com",
            "deleted" : false
        }
    ];

    this.toAdd = function(){
        self.form = 1;
        self.contact = null;
        self.tmpContact = angular.copy(contact);
        self.operation = "Ajouter un contact";
    };

    this.toUpdate = function(contact){
        self.form = 2;
        self.contact = contact;
        self.tmpContact = angular.copy(contact);
        self.operation = "Modifier un contact";
    };

    this.update = function(){
        if(self.contact != null){
            var index = self.contacts.indexOf(self.contact);
            self.contacts[index] = self.tmpContact;
            console.log(index);
            self.form = 0;
        } else {
            self.contacts.push(self.tmpContact);
        }
    };

    this.cancel = function(){
        angular.forEach(self.contacts, function(contact){
            if(contact.deleted)
                contact.deleted = false;
        });
    };

    this.delete = function(contact){
        nb = self.contacts.indexOf(contact);
        self.contacts[nb].deleted = true;
    };
}]);