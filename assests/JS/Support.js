var _support = $.extend({

    supportPageInit: function supportPageInit() {
        $('#msgBox').hide();
        $('#id2').css('background-color', '#C6F3FF');
        $('#id1').css('background-color', '#F5F5F5');
        $('#id3').css('background-color', '#F5F5F5');
        $('#id4').css('background-color', '#F5F5F5');
        $('#arrowImage').css('display', 'block');
        $('#arrowImage').css('margin-top', '5%');
        $("#btnMenu4").addClass('selectedMenuColor').removeClass('MenuColor');
        $("#menu1 img").attr("src", "assests/images/Applications.png");
        $("#menu2 img").attr("src", "assests/images/Admin.png");
        $("#menu3 img").attr("src", "assests/images/Dashboard.png");
        $("#menu4 img").attr("src", "assests/images/Support - Sel.png");
        $("#btnMenu1").removeClass('selectedMenuColor').addClass('MenuColor');
        $("#btnMenu3").removeClass('selectedMenuColor').addClass('MenuColor');
        $("#btnMenu2").removeClass('selectedMenuColor').addClass('MenuColor');
        $('#contentBox').css('display', 'none');
        $('#contentBox1').css('display', 'none');


        //$("#supportContentBox").css('display', 'block');


        $('#contactustab').css('display', 'none');
        $('#logticket').css('display', 'none');
        $('#doctab').css('display', 'block');


        $("#bid4").css("display", "block");
        $("#bid5").css("display", "none");
        $("#bid6").css("display", "none");

        $("#bid1").css("display", "none");
        $("#bid2").css("display", "block");
        $("#bid3").css("display", "block");

        $("#id2").html("Documents");
        $("#id3").html("Contact Us");
        $("#id4").html("Log Ticket");
    }

});


$(window).load(function () {

    _support.supportPageInit();

    $("#mobilesubMenuHeader").attr("value", "Documents");
    $("#mobileMenuHeader").attr("value", "Documents");
    $("#subMenuBtn1").attr("value", "Documents");
    $("#subMenuBtn2").attr("value", "Contact Us");
    $("#subMenuBtn3").attr("value", "Log Ticket");
    $("#subMenuBtn4").css("display", "none");
    $("#subMenuBtn5").css("display", "none");
    $('#doctab').css('display', 'block');

    $('#supportContentBox').removeClass('displayNone').addClass('displayBlock');
});

