var repeatApp = angular.module("repeatApp",[]);
//this factory is really just data. That is all you need to know right now
//it is in the form of JSON
//here we are just using a controller to pass the data from the factory to our scope of our project.
repeatApp.controller('repeatCtrl', function($scope, Organizers){
    $scope.organizers = Organizers;
});

repeatApp.factory('Organizers', function(){
    var dwiPeople = {};
    dwiPeople.people = [
        {
            "name":"Todd Shelton",
            "imgURL":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/60993/ToddShelton1.jpg",
            "bio": "Todd Shelton began his career as a Flex/Flash developer making interactive experiences for smaller clients and the corporate world. After several years of creating RIA's, Todd began sharing his knowledge with others in his community. After noticing the lack of industry knowledge being taught in the classroom, Todd began teaching at Indiana University in Indianapolis to help prepare students for real-world challenges once working in the industry.Since the crash of Flash, he has migrated to JavaScript/HTML and any other frameworks/languages out there that can get the job done, and spreads the word on how to use them. Todd also freelances and focuses on making E-Learning applications for the web and mobile devices. In his spare time, Todd enjoys playing with his son and making salsa from his garden."
        },
        {
            "name":"Todd Isaacs",
            "imgURL":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/60993/toddBio.jpg",
            "bio": "Todd Isaacs works as a Senior Application Developer at Herff Jones supporting and developing applications written in Java and Flex. He has many years experience working with corporate enterprise systems. He really likes Java but also has found he really enjoys working with client side technologies like JavaScript/HTML and dabbles a little in Objective-C and IOS. In his free time he likes going to the lake hanging out on the boat and fishing with his kids and enjoys playing golf."
        },
        {
            "name":"Scott Williams",
            "imgURL":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/60993/scott.jpg",
            "bio": "Scott Williams is a software developer at scubaba.com and Co-Founder of Dev Workshop Indy. He spends most of his time doing web work, but has years of experience in graphic design, photography. He also enjoys DIY electronics, camping, and kayaking."
        },
        {
            "name":"Taha Kahn",
            "imgURL":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/60993/taha.jpg",
            "bio": "Taha Khan is a Senior Interactive Developer at the 'The Basement Design and Motion'(thebasement.tv). He enjoys creating Javascript for internet and enterprise applications using Objective-C for iOS. He has a vast experience in Action Script which is certainly of no use any more. :) Beside work you can find him kicking ass at Tekken and talking smack to his co-workers."
        },
        {
            "name":"Travis Faas",
            "imgURL":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/60993/travis.jpg",
            "bio": "Travis Faas is a Visiting Lecturer of Media Arts and Science at IUPUI.  He primarily teaches introductory application development (and sneaks in some artsy code when he can). You can learn more about what he's working on at any given moment at www.dustytome.net/moot."
        }
    ];
    return dwiPeople;
});