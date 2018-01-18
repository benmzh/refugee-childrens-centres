var aboutUsPage = window.location.href.indexOf("training") > -1;
var getInvolvedPage = window.location.href.indexOf("nutrition") > -1;
var donatePage = window.location.href.indexOf("training") > -1;
var projectsPage = window.location.href.indexOf("nutrition") > -1;
var contactUsPage = window.location.href.indexOf("training") > -1;

if ( aboutUsPage || getInvolvedPage || donatePage || projectsPage || contactUsPage ) {} else {

document.getElementById("emergency-appeal-close").addEventListener("click", function(e) {
  $(".rcc-emergency-appeal-page-cover").css("display", "none");
});

}
