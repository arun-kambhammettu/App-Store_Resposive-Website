var _dashboard = $.extend({

});


$(window).load(function () {

    $('#dashboardContentBox').removeClass('displayNone').addClass('displayBlock');
    $('#msgBox').hide();
    $('#id2').css('background-color', '#C6F3FF');
    $('#id1').css('background-color', '#F5F5F5');
    $('#id3').css('background-color', '#F5F5F5');
    $('#arrowImage').css('display', 'none');
    $("#btnMenu3").addClass('selectedMenuColor').removeClass('MenuColor');
    $("#menu1 img").attr("src", "assests/images/Applications.png");
    $("#menu2 img").attr("src", "assests/images/Admin.png");
    $("#menu3 img").attr("src", "assests/images/Dashboard - Sel.png");
    $("#menu4 img").attr("src", "assests/images/Support.png");
    $("#btnMenu1").removeClass('selectedMenuColor').addClass('MenuColor');
    $("#btnMenu2").removeClass('selectedMenuColor').addClass('MenuColor');
    $("#btnMenu4").removeClass('selectedMenuColor').addClass('MenuColor');
    $('#contentBox').css('display', 'none');
    $('#contentBox1').css('display', 'none');
    
    $("#dashboardContentBox").css('display', 'block');
  
    $('#dbImage1').css('display', 'block');
    $('#dbImage2').css('display', 'none');
    $('#dbImage3').css('display', 'none');

    $('#dbdd3').change(function () {
        "use strict"
        var selectedValue = $('#dbdd3').find('option:selected').val();
        if (selectedValue === "dw") {
            $('#dbImage1').css('display', 'block');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');
        } else if (selectedValue === "pw") {
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'block');
            $('#dbImage3').css('display', 'none');
        } else if (selectedValue === "iw") {
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'block');
        }
    });


    $("#Menu2-1").css("display", "none");
    $("#Menu2-2").css("display", "none");
    $("#Menu2-3").css("display", "none");
    $("#Menu2-4").css("display", "none");
    $("#Menu2-5").css("display", "none");
    $("#mobilesubMenuHeader").attr("value", "Dashboard");
    $("#mobileMenuHeader").attr("value", "Dashboard");
});