/* jslint browser: true */
/* global $, TweenMax, Sine, Back, Elastic, alert */

// hide all screens and section divs
$("main, section").hide(); // set display: none to main and section divs in css to stop flash

// SPLASH SCREEN //////////////////////////////////////////////

// display splash screen
$("#splash").show();
let clickedLogos = '';
// animate on the splash screen on app load
TweenMax.from("#splash", 0.5, {
    delay: 0.25,
    opacity: 0
});

TweenMax.from("#splash header", 0.5, {
    delay: 0.5,
    y: -$("#splash header").outerHeight(),
    ease: Sine.easeOut
});


TweenMax.from("#splash footer", 0.5, {
    delay: 0.5,
    y: $("#splash footer").outerHeight(),
    ease: Sine.easeOut
});
TweenMax.from("#splash img", 0.5, {
    y: 50,
    delay: 1,
    scale: 0,
    ease: Back.easeOut
});

// wait 4 secs then fade out and load landing screen
TweenMax.to("#splash", 0.5, {
    delay: 4,
    opacity: 0,
    onComplete: loadLanding
});

// LANDING SCREEN ///////////////////////////////////////////

function loadLanding() {

    // hide and reset all screens/sections
    $("main, section").hide().css({
        opacity: 1
    });

    // display landing screen
    $("#landing").show();

    // animate on the landing screen
    TweenMax.from("#landing", 0.5, {
        delay: 0.25,
        opacity: 0
    });

    TweenMax.from("#landing header", 0.5, {
        delay: 0.5,
        y: $("#landing header").outerHeight(),
        ease: Sine.easeOut
    });
    TweenMax.fromTo("#mainlogo", 1, {
        y:-50, delay:1,opacity:0},{
            y:0,opacity:1
        });

    TweenMax.from("#landing footer", 0.5, {
        delay: 0.5,
        y: $("#landing footer").outerHeight(),
        ease: Sine.easeOut
    });

    TweenMax.from("#logo1", 0.5, {
        delay: 1,
        opacity: 0
    });

    TweenMax.from("#logo2", 0.5, {
        delay: 1.25,
        opacity: 0
    });

    TweenMax.from("#logo3", 0.5, {
        delay: 1.5,
        opacity: 0
    });

    // set up logos to link to related restaurant
    // pass rest ID and subnav highlight colour to loadRest function
    // fade landing out and load selected restaurant
    $("#logo1").click(function() {
        clickedLogos = 'logo1';
        document.getElementById("website1").innerHTML = "";
        document.getElementById("phoneNo1").innerHTML = "";

TweenMax.from("#landing",0.5,{
    opacity:0.5
});
        TweenMax.to("#landing", 0.5, {
            opacity: 0,
            onComplete: loadRest,
            onCompleteParams: ["#rest1", "lightblue"]
        });

    });

    $("#logo2").click(function() {
        clickedLogos = 'logo2';
        document.getElementById("website1").innerHTML = "";
        document.getElementById("phoneNo1").innerHTML = "";
TweenMax.from("#landing",0.5,{
    opacity:0.5,
});
        TweenMax.to("#landing", 0.5, {
            opacity: 0,
            onComplete: loadRest,
            onCompleteParams: ["#rest2", "lightgreen"]
        });

    });

    $("#logo3").click(function() {
        clickedLogos = 'logo3';
        document.getElementById("website1").innerHTML = "";
        document.getElementById("phoneNo1").innerHTML = "";
        TweenMax.from("#landing",0.5,{
    opacity:0.5,
});

        TweenMax.to("#landing", 0.5, {
            opacity: 0,
            onComplete: loadRest,
            onCompleteParams: ["#rest3", "lightyellow"]
        });

    });
}

// RESTAURANT SCREENS ///////////////////////////////////////////

function loadRest(restID, highlightColour) {

    // hide landing screen
    $("#landing").hide();

    // display selected restaurant screen
    $(restID).show();

    // animate on the restaurant
    TweenMax.from(restID + " header", 0.5, {
        delay: 0.25,
        y: -$(restID + " header").outerHeight(),
        ease: Sine.easeOut
    });

    TweenMax.from(restID + " footer", 0.5, {
        delay: 0.25,
        y: $(restID + " footer").outerHeight(),
        ease: Sine.easeOut
    });

    // display home section
    $(restID + " .home").show();

    // animate on home section
    TweenMax.from(restID + " .home", 0.5, {
        delay: 0.75,
        opacity: 0
    });

    // loop through and reveal all elements on home screen with .reveal class applied
    $(restID + " .home .reveal").each(function(i) {

        TweenMax.from(this, 1, {
            delay: 1.25 + i * 0.05,
            opacity: 0,
            y: -10,
            transform: 50,  
            ease: Elastic.easeOut,
        });

    });
    $(".homeIcon").css({Background: highlightColour});
    $(".homeIcon").addClass("active");

    // highlight home icon in footer on restaurant load
    $(".homeIcon").css({
        background: highlightColour
    });
    $(this).addClass("active");

    // set up section nav - highlight and load section
    $(".homeIcon, .specialsIcon, .reservationsIcon").click(function() {

        // remove highligh from all icons
        $(".homeIcon, .specialsIcon, .reservationsIcon").css({
            background: 'none'
        });

        // add highlight to selected icon based on highlight colour
        $(this).css({
            background: highlightColour
        });

        // load selected section - send current section and section to load
       // loadSection(restID + " section", restID + " " + $(this).attr("data-section"));

    });
    var icons= restID + " .homeIcon, " + restID + " .specialsIcon, " + restID + " .reservationsIcon";
    //console.log(icons);
    
    $(icons).click(function(){
        if(!$(this).hasClass("active")){
        
    
            $(icons).css({background: "none"}).removeClass("active");
            $(this).css({background: highlightColour});
            $(this).addClass("active");
            loadSection(restID + " section", restID + " "+ $(this).attr("data-section"));

        }
    });
}
// REUSABLE FUNCTIONS/CLICKS /////////////////////////////////////

// function for loading internal restaurant sections
function loadSection(prevSection, nextSection) {

    // fade out previous section
    TweenMax.to(prevSection, 0.5, {
        opacity: 0,
        onComplete: function() {
            // hide and reset previous section
            $(prevSection).hide().css({
                opacity: 1
            });
            // display next section and auto scroll to top of page
            $(nextSection).show().scrollTop(0);
        }
    });

    // animate on next section
    TweenMax.from(nextSection, 0.5, {
        delay: 0.5,
        opacity: 0
    });

    // loop through and reveal all elements on next screen with .reveal class applied
    $(nextSection + " .reveal").each(function(i) {

        TweenMax.from(this, 1, {
            delay: 1 + i * 0.05,
            opacity: 0,
            y: -10,
            ease: Sine.easeIn
        });

    });

}

// set up reservations submit button
//$(".reserve").click(function(e) {

    // stops default processing for form
    //e.preventDefault();

    //alert("Reservations have been made."); // replace with reveal of actual content

//});
$(".hamburger").click(function(){
	
	if($(".hamburger").attr("data-click-state") == 1){
	$("#menu").show();
	$(".hamburger").attr("data-click-state",0);
//	   $(".hamburger").attr("src","img/download.png");
		
	
		TweenMax.to(".rest",0.5, {
			x:310,
			ease:Elastic.easeOutSine
    	});
	} else if($(".hamburger").attr("data-click-state") == 0){
		
	TweenMax.to(".rest",0.5, {
			x:0,
			ease:Elastic.easeInSine,
		    onComplete: function(){
			$("#menu").hide();
	    	}
    	});

	$(".hamburger").attr("data-click-state",1);
	// $(".hamburger").attr("src","img/hamburger2close.gif");
	
		
	}

});

$("#backToLanding").click(function(){
	$(".hamburger").attr("data-click-state",1);
    // $(".hamburger").attr("src","img/hamburger2close.gif");
	
	TweenMax.to(".rest",0.5, {
			x:0,
			ease:Elastic.easeInSine,
		    onComplete: function(){
			    $("#menu").hide();
                
				TweenMax.to(".rest",0.5, {
					opacity:0,
					ease:Elastic.easeInOut,
					onComplete: loadLanding

				});

	    	}
    	});
});

$("#contact").click(function(){
        if(clickedLogos == 'logo1'){
            document.getElementById('website1').innerHTML ='Website - cevicheseafood.ca';
            document.getElementById('phoneNo1').innerHTML ='Phone No - (218)-431-4531';
    
        } else if(clickedLogos == 'logo2'){
            document.getElementById('website1').innerHTML ='Website - fivevines.ca';
            document.getElementById('phoneNo1').innerHTML ='Phone No - (288)-234-2333';
    
        } else if(clickedLogos == 'logo3'){
            document.getElementById('website1').innerHTML ='Website - crispyburgers.ca';
            document.getElementById('phoneNo1').innerHTML ='Phone No - (416)-342-1234';
    
        }
    });



$(".confirmation").hide();
$(".confirmA").hide();
$(".reserve").click(function(){
    $(".form").hide();
    $(".confirmation").show();
});
$(".button").click(function(e){
    e.preventDefault();
    $(".form").show();
    $(".confirmation").hide();
});
$(".button1").click(function(e){
    e.preventDefault();
    $(".confirmA").show();
    $(".confirmation").hide();
});


