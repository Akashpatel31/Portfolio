filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.getElementById("blc").innerText = "I'm";
document.getElementById("blc1").innerText = "Akash Kumar Patel";
document.getElementById("heading1").innerText = "I'm a";
// document.getElementById("heading2").innerText = "Web Developer";
// document.getElementById("heading3").innerText = "I'm a";
// document.getElementById("heading4").innerText = "Web Designer";


// let heading1 = document.getElementById("heading2").innerText;
// let heading2 = document.getElementById("heading4").innerText;

TweenMax.fromTo("#blc",1,{
  opacity:0
},{
  delay:1,
  opacity:1,
  ease:Sine.easeOut
});
TweenMax.fromTo("#blc1",1,{
  opacity:0
},{
  delay:2,
  opacity:1,
  ease:Sine.easeOut
});
TweenMax.fromTo("#heading1",1,{
  opacity:0
},{
  delay:3,
  opacity:1,
  ease:Sine.easeOut
});
// TweenMax.fromTo("#heading2",1,{
//   opacity:0
// },{
//   delay:4,
//   opacity:1,
//   text: "heading2",
//   ease:Sine.easeOut
// });

TweenMax.fromTo("#about",1,{
  opacity:0
},{
  delay:1,
  opacity:1
});
TweenMax.fromTo("#skills",1,{
  opacity:0
},{
  delay:1,
  opacity:1
});
TweenMax.fromTo("#projects",1,{
  opacity:0
},{
  delay:1,
  opacity:1
});
TweenMax.fromTo("#resturantSite",1,{
  opacity:0
},{
  delay:1,
  opacity:1
});
TweenMax.fromTo("#responsiveSite",1,{
  opacity:0
},{
  delay:2,
  opacity:1
});
TweenMax.fromTo("#mmdbSite",1,{
  opacity:0
},{
  delay:3,
  opacity:1
});
TweenMax.fromTo("#lotterySite",1,{
  opacity:0
},{
  delay:4,
  opacity:1
});
TweenMax.fromTo("#Dthree",1,{
  opacity:0
},{
  delay:5,
  opacity:1
});
TweenMax.fromTo("#CollabP",1,{
  opacity:0
},{
  delay:6,
  opacity:1
});


TweenMax.fromTo(".html55",1,{
  opacity:0
},{
  delay:2,
  opacity:1
});
TweenMax.fromTo(".CSS33",1,{
  opacity:0
},{
  delay:2,
  opacity:1
});
TweenMax.fromTo(".javascript33",1,{
  opacity:0
},{
  delay:2,
  opacity:1
});
TweenMax.fromTo(".vue55",1,{
  opacity:0
},{
  delay:3,
  opacity:1
});
TweenMax.fromTo(".d355",1,{
  opacity:0
},{
  delay:3,
  opacity:1
});
TweenMax.fromTo(".php55",1,{
  opacity:0
},{
  delay:3,
  opacity:1
});
TweenMax.fromTo(".boots44",1,{
  opacity:0
},{
  delay:4,
  opacity:1
});
TweenMax.fromTo(".wordp55",1,{
  opacity:0
},{
  delay:4,
  opacity:1
});
TweenMax.fromTo(".node55",1,{
  opacity:0
},{
  delay:4,
  opacity:1
});



$(document).ready(function(){
  $("#heading2").delay(2000).animate(
  {opacity:0,repeat: -1,},function(){
     $(this).text("Web Designer").animate({opacity:1},function(){
      $(this).delay(2000).animate({opacity:0},function(){
          $(this).text("Web Developer").animate({opacity:1}, function(){
            $(this).delay(3000).animate({opacity:0},function(){
              $(this).text("Web Designer").animate({opacity:1},function(){
                $(this).delay(4000).animate({opacity:0},function(){
                  $(this).text("Web Developer").animate({opacity:1}, function(){
                    $(this).delay(5000).animate({opacity:0},function(){
                      $(this).text("Web Designer").animate({opacity:1},function(){
                        $(this).delay(6000).animate({opacity:0},function(){
                          $(this).text("Web Developer").animate({opacity:1}, function(){
                            $(this).delay(7000).animate({opacity:0},function(){
                              $(this).text("Web Designer").animate({opacity:1},function(){
                                $(this).delay(8000).animate({opacity:0},function(){
                                  $(this).text("Web Developer").animate({opacity:1}, function(){
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
      });
  });
});
});

(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();

$("b c").html(function(index, html) {
  return html.replace(/\S/g, '<span>$&</span>');
});

$("b").click(function(){
        $("b").addClass("loading");     
        setTimeout(function(){
          $("b").removeClass("loading"); 
        }, 5000);

});
