if (window.location.href.indexOf("contact-us") > -1) {

  document.getElementById("rcc-contact-form-selector-button-yes").addEventListener("click", function(e) {
    $(".rcc-contact-form-volunteering").css("display", "inline-block");
    $(".rcc-contact-form-general").css("display", "none");
    $(".rcc-contact-form-selector-button-yes").css("background-color", "white").css("color", "#45ACE8");
    $(".rcc-contact-form-selector-button-no").css("background-color", "#45ACE8").css("color", "white");
  });

  document.getElementById("rcc-contact-form-selector-button-no").addEventListener("click", function(e) {
    $(".rcc-contact-form-general").css("display", "inline-block");
    $(".rcc-contact-form-volunteering").css("display", "none");
    $(".rcc-contact-form-selector-button-no").css("background-color", "white").css("color", "#45ACE8");
    $(".rcc-contact-form-selector-button-yes").css("background-color", "#45ACE8").css("color", "white");
  });

}
