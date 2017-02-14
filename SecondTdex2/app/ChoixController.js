/**
 * Created by arist on 24/01/2017.
 */

angular.module('ListesApp').controller('choixController', [function() {
    this.form = false;
    this.operation = "";
    this.tmpContact= [];
    var self = this;
    this.contacts = [
        {
            "name": "ZUCKENBERG",
            "firstName": "mark",
            "mail": "mark@facebook.com"
        },{
            "name": "GATES",
            "firstName": "bill",
            "mail":"bill@microsoft.com"
        },{
            "name": "JOBS",
            "firstName": "steeve",
            "mail":"bill@microsoft.com"
        }
    ]

    this.toAdd = function(){
        if(self.form)
            self.form = false;
        else {
            self.form = true;
            self.operation = "Ajouter un contact";
            self.tmpContact.name = "";
            self.tmpContact.firstName = "";
            self.tmpContact.mail = "";
        }

    };

    app.filter("newFiltre",
     //retourner une fonction (contacts)
     //default.get().them( retourne.contacts filtrés
    );
    this.toUpdate = function ($contact){
        if(self.form)
            self.form = false;
        else {
            self.form = true;
            self.operation = "Modifier un contact";
            self.tmpContact.name = $contact.name;
            self.tmpContact.firstName = $contact.firstName;
            self.tmpContact.mail = $contact.mail;
        }
    };

    this.delete = function($contact){

    }
}]);