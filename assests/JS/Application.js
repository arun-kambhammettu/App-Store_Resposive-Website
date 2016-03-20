var _application = $.extend({



});


$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        directionNav: false,
        //        animationSpeed:200,
        slideshowSpeed: 2000
    });

    $('#msgBox').hide();
    //            $('#arrowImage').css('display', 'block');
    //$('#arrowImage').css('margin-top', '22%');
    $('#contentBox').css('display', 'none');
    $('#contentBox1').css('display', 'none');
  
    $("#btnMenu1").addClass('selectedMenuColor').removeClass('MenuColor');
    $("#menu1 img").attr("src", "assests/images/Applications - sel.png");
    $("#menu2 img").attr("src", "assests/images/Admin.png");
    $("#menu3 img").attr("src", "assests/images/Dashboard.png");
    $("#menu4 img").attr("src", "assests/images/Support.png");
    $("#btnMenu2").removeClass('selectedMenuColor').addClass('MenuColor');
    $("#btnMenu3").removeClass('selectedMenuColor').addClass('MenuColor');
    $("#btnMenu4").removeClass('selectedMenuColor').addClass('MenuColor');

    $("#showItems").css('display', 'block');
    $('#item1').css('display', 'block');
    $('#item2').css('display', 'block');
    //$('#item3').css('display', 'block');

    $("#bid1").css("display", "block");
    $("#bid2").css("display", "block");
    $("#bid3").css("display", "block");
    $("#bid4").css("display", "block");
    $("#bid5").css("display", "block");
    $("#bid6").css("display", "block");


    $('#item1').click(function () {

        $('#showItems').css('display', 'none');
        $('#contentBox1').hide();
        $('#contentBox').show();
        $('#textBlock').html('MSF');
        $('#imageBlock').html('<img src="assests/images/icon@2x.png" alt="MSF Logo" />');
        $("#accordion").accordion();
     
        $('#btn1').css("background-color", "#C6F3FF");
        $("#tabs").html("An application for board members for viewing board meeting documents on the fly");
    });


    $('#item2').click(function () {

        $('#showItems').css('display', 'none');
        $('#contentBox').hide();
        $('#contentBox1').show();
        $('#textBlock1').html('RWS');
        $('#imageBlock1').html('<img src="assests/images/ConvertorIcon.png" alt="RWS Logo" />');
        $("#accordion1").accordion();
      
        $('#btn11').css("background-color", "#C6F3FF");
        $("#tabs1").html("An application for board members for viewing board meeting documents on the fly");
    });


    //Mobile Values
    $("#mobilesubMenuHeader").attr("value", "All(2)");
    $("#mobileMenuHeader").attr("value", "All(2)");
    $("#subMenuBtn1").attr("value", "All(2)");
    $("#subMenuBtn2").attr("value", "Manufacturing(1)");
    $("#subMenuBtn3").attr("value", "Finance");
    $("#subMenuBtn4").attr("value", "Retail(1)");
    $("#subMenuBtn5").attr("value", "Logistics");

    if ($(window).width() < 639) {

        $("#tabSelector").addClass("displayNone");
        $("#tabSelector1").addClass("displayNone");
        $("#tabs").addClass("displayNone");
        $("#tabs1").addClass("displayNone");
    }


    //Sub menu click events
    $("#tabsSelection input[type=button]").click(function () {
        $("#tabsSelection input[type=button]").removeClass("selectedTabColor").addClass("tabColor");
        $(this).removeClass("tabColor").addClass("selectedTabColor");
        if ($(this).attr('id') == 'btn1') {
            $("#tabs").html("An application for board members for viewing board meeting documents on the fly");
        }
        if ($(this).attr('id') == 'btn2') {
            $("#tabs").html("Ability to view messages sent by company secretary on home screen");
        }
        if ($(this).attr('id') == 'btn3') {
            $("#tabs").html("Application is developerd using native iOS SDK");
        }
        if ($(this).attr('id') == 'btn4') {
            $("#tabs").html("User Guide");
        }
        if ($(this).attr('id') == 'btn5') {
            $("#tabs").html("");
        }
        if ($(this).attr('id') == 'btn6') {
            $("#tabs").html("");
        }
    });


    $("#tabsSelection1 input[type=button]").click(function () {
        $("#tabsSelection1 input[type=button]").removeClass("selectedTabColor").addClass("tabColor");
        $(this).removeClass("tabColor").addClass("selectedTabColor");
        if ($(this).attr('id') == 'btn11') {
            $("#tabs1").html("An application for board members for viewing board meeting documents on the fly");
        }
        if ($(this).attr('id') == 'btn21') {
            $("#tabs1").html("Ability to view messages sent by company secretary on home screen");
        }
        if ($(this).attr('id') == 'btn31') {
            $("#tabs1").html("Application is developerd using native iOS SDK");
        }
        if ($(this).attr('id') == 'btn41') {
            $("#tabs1").html("User Guide");
        }
        if ($(this).attr('id') == 'btn51') {
            $("#tabs1").html("");
        }
        if ($(this).attr('id') == 'btn61') {
            $("#tabs1").html("");
        }
    });

});

$(window).resize(function () {
    "use strict";

    if ($(window).width() < 639) {

        $("#tabSelector").addClass("displayNone");
        $("#tabSelector1").addClass("displayNone");
        $("#tabs").addClass("displayNone");
        $("#tabs1").addClass("displayNone");
    }
});
