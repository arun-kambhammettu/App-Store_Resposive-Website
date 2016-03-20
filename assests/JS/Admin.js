var _admin = $.extend({

});


$(window).load(function () {

    $('#msgBox').hide();
    $('#id1').css('background-color', '#F5F5F5');
    $('#id2').css('background-color', '#C6F3FF');
    $('#id3').css('background-color', '#F5F5F5');
    $('#id4').css('background-color', '#F5F5F5');
    $('#arrowImage').css('display', 'block');
    $('#arrowImage').css('margin-top', '5%');
    $("#btnMenu2").addClass('selectedMenuColor').removeClass('MenuColor');
    $("#menu1 img").attr("src", "assests/images/Applications.png");
    $("#menu2 img").attr("src", "assests/images/Admin - Sel.png");
    $("#menu3 img").attr("src", "assests/images/Dashboard.png");
    $("#menu4 img").attr("src", "assests/images/Support.png");
    $("#btnMenu1").removeClass('selectedMenuColor').addClass('MenuColor');
    $("#btnMenu3").removeClass('selectedMenuColor').addClass('MenuColor');
    $("#btnMenu4").removeClass('selectedMenuColor').addClass('MenuColor');
    // $('#contentBox').css('display', 'none');
    $('#adminContentBox1').css('display', 'block');
    $('#adminContentBox2').css('display', 'none');
    $('#adminContentBox3').css('display', 'none');


    $("#bid4").css("display", "block");
    $("#bid5").css("display", "none");
    $("#bid6").css("display", "none");

    $("#bid1").css("display", "none");
    $("#bid2").css("display", "block");
    $("#bid3").css("display", "block");


    $("#id1").attr("display", "none");
    $("#id2").html("Add App");
    $("#id3").html("Edit App");
    $("#id4").html("Upcoming Apps");

    $("#bid5").css("display", "none");
    $("#bid6").css("display", "none");


    $("#mobilesubMenuHeader").attr("value", "Add App");
    $("#mobileMenuHeader").attr("value", "Add App");
    $("#subMenuBtn1").attr("value", "Add App");
    $("#subMenuBtn2").attr("value", "Edit App");
    $("#subMenuBtn3").attr("value", "Upcoming Apps");
    $("#subMenuBtn4").css("display", "none");
    $("#subMenuBtn5").css("display", "none");

    $('.ui-btn').click(function () {
        //        var d = $(this).children("select");
        //        $('option').toggle();
       // debugger;
        var $select = $(this).children("select");
        var options = $select.children().size();
        var size = $select.attr('size');
        $(options).show();
        $('#dd1').show();
        $('#dd1').attr('size', (size != options ? options : 1));
    });
});