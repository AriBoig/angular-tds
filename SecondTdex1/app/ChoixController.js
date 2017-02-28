/**
 * Created by arist on 24/01/2017.
 */

angular.module('ListesApp').controller('choixController', [function() {

    var self = this;

    this.dispoItems = [
        {
            "url": "http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/",
            "title": "50 Must-have plugins for extending Twitter Bootstrap",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/",
            "title": "Making a Super Simple Registration System With PHP and MySQL",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/slideout-footer-css/",
            "title": "Create a slide-out footer with this neat z-index trick",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/06/digital-clock/",
            "title": "How to Make a Digital Clock with jQuery and CSS3",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/diagonal-fade-gallery/",
            "title": "Smooth Diagonal Fade Gallery with CSS3 Transitions",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/",
            "title": "Mini AJAX File Upload Form",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/04/services-chooser-backbone-js/",
            "title": "Your First Backbone.js App – Service Chooser",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg"
        }
    ];

    this.includedItems = [];
    this.selectedDispoItems = [];
    this.selectedIncludedItems = [];
    this.step = 0;

    this.addToIncluded = function(){
        angular.forEach(self.selectedDispoItems, function(element){
            i = self.dispoItems.indexOf(element);
            self.includedItems.push(self.dispoItems[i]);
            self.dispoItems.splice(i,1);
        });
    };
    this.addAllToIncluded = function(){
        while(self.dispoItems.length>0){
            self.includedItems.push(self.dispoItems[0]);
            self.dispoItems.splice(0,1);
        }
    };

    this.removeFromIncluded = function(){
        angular.forEach(self.selectedIncludedItems, function(element){
            i = self.includedItems.indexOf(element);
            self.dispoItems.push(self.includedItems[i]);
            self.includedItems.splice(i,1);
        });
    };

    this.RemoveAllFromIncluded = function(){
        while(self.includedItems.length>0){
            self.dispoItems.push(self.includedItems[0]);
            self.includedItems.splice(0,1);
        }
    };
}]);