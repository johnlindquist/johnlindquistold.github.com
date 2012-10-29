'use strict';

/* Controllers */


function CardsCtrl($scope, $http) {
    $http.get("https://spreadsheets.google.com/feeds/list/0ApDPbpSNCArIdDctTnl4RWExUGlwdnY4ZlJUZUl1YUE/1/public/basic?alt=json")
        .success(function (data) {
            var cards = _.shuffle(data.feed.entry);

            $scope.cards = cards;
            setTimeout(setupReveal, 1000);
        });

}

function setupReveal() {
    Reveal.initialize({
        // Display controls in the bottom right corner
        controls:true,

        // Display a presentation progress bar
        progress:true,

        // Push each slide change to the browser history
        history:false,

        // Enable keyboard shortcuts for navigation
        keyboard:true,

        // Enable the slide overview mode
        overview:true,

        // Loop the presentation
        loop:false,

        // Number of milliseconds between automatically proceeding to the
        // next slide, disabled when set to 0, this value can be overwritten
        // by using a data-autoslide attribute on your slides
        autoSlide:0,

        // Enable slide navigation via mouse wheel
        mouseWheel:true,

        // Apply a 3D roll to links on hover
        rollingLinks:true,

        // Transition style
        transition:'none' // default/cube/page/concave/zoom/linear/none
    });

}

