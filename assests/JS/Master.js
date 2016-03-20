

$(window).load(function () {
    if ($(window).width() < 639) {
        $("#menuBar").addClass("displayNone");
        $("#btnMenu1 img").attr("src", "assests/images/Applications.png");
        $(".menuItems").hover(function () {
            if ($(this).attr('id') == "menu1") {
                $("#menu1 img").attr("src", "assests/images/Applications - sel.png");
            }
            if ($(this).attr('id') == "menu2") {
                $("#menu2 img").attr("src", "assests/images/Admin - Sel.png");
            }
            if ($(this).attr('id') == "menu3") {
                $("#menu3 img").attr("src", "assests/images/Dashboard - Sel.png");
            }
            if ($(this).attr('id') == "menu4") {
                $("#menu4 img").attr("src", "assests/images/Support - Sel.png");
            }
        });

        $(".menuItems").mouseleave(function () {
            if ($(this).attr('id') == "menu1") {
                $("#menu1 img").attr("src", "assests/images/Applications.png");
            }
            if ($(this).attr('id') == "menu2") {
                $("#menu2 img").attr("src", "assests/images/Admin.png");
            }
            if ($(this).attr('id') == "menu3") {
                $("#menu3 img").attr("src", "assests/images/Dashboard.png");
            }
            if ($(this).attr('id') == "menu4") {
                $("#menu4 img").attr("src", "assests/images/Support.png");
            }
        });
    }
    else {
        $("#menuBar").removeClass("displayNone");
        $('#menuBar').css("left", "0px");
        $('#menuBar').css("top", "0px");
        $("#btnMenu1 img").attr("src", "assests/images/Applications - sel.png");
    }

//    $("#menu1").click(function () {
//        window.location.href = "ApplicationPage.htm";
//    });

//    $("#menu2").click(function () {

//        window.location.href = "AdminPage.htm";
//    });

//    $("#menu3").click(function () {
//        window.location.href = "DashboardPage.htm";
//    });

//    $("#menu4").click(function () {
//        window.location.href = "SupportPage.htm";
//    });



    $("#id1").click(function () {
        var val = $("#id1").html();
        if (val === 'Categories') {

        }

    });
    $("#id2").click(function () {

        var val = $("#id2").html();
        if (val === 'All(2)') {
            $('#msgBox').hide();
            
            $('#arrowImage').css('margin-top', '22%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'block');
            $('#item1').css('display', 'block');
            $('#item2').css('display', 'block');
            //$('#item3').css('display', 'block');

        } else if (val === 'Add App') {
           
            $('#arrowImage').css('margin-top', '5%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'block');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');


        } else if (val === 'Documents') {
          
            $('#arrowImage').css('margin-top', '5%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'block');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'block');
        }



    });
    $("#id3").click(function () {
      
        var val = $("#id3").html();

        if (val === 'Manufacturing(1)') {

            $('#msgBox').hide();
            $('#arrowImage').css('margin-top', '40%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'block');
            $('#item1').css('display', 'block');
            $('#item2').css('display', 'none');
            //$('#item3').css('display', 'none');
            //$('#msgBox').show();

        } else if (val === 'Edit App') {
          
            $('#arrowImage').css('margin-top', '22%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'block');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');


        } else if (val === 'Contact Us') {
         
            $('#arrowImage').css('margin-top', '22%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'block');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');
            $('#contactustab').css('display', 'block');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
        }

    });
    $("#id4").click(function () {

        var val = $("#id4").html();
        if (val === 'Finance') {
          

            $('#arrowImage').css('margin-top', '56%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            //$('#item3').css('display', 'none');
            $('#msgBox').show();

        } else if (val === 'Upcoming Apps') {
          

            $('#arrowImage').css('margin-top', '40%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'block');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');


        } else if (val === 'Log Ticket') {
          
            $('#arrowImage').css('margin-top', '40%');
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'block');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'block');
            $('#doctab').css('display', 'none');
        }

    });
    $("#id5").click(function () {
        $('#msgBox').hide();
     
        var val = $("#id5").html();
        $('#arrowImage').css('margin-top', '73%');
        $('#contentBox').css('display', 'none');
        $('#contentBox1').css('display', 'none');
        $('#contactustab').css('display', 'none');
        $('#logticket').css('display', 'none');
        $('#doctab').css('display', 'none');
        $('#adminContentBox1').css('display', 'none');
        $('#adminContentBox2').css('display', 'none');
        $('#adminContentBox3').css('display', 'none');
        $("#dashboardContentBox").css('display', 'none');
        $("#supportContentBox").css('display', 'none');
        $('#dbImage1').css('display', 'none');
        $('#dbImage2').css('display', 'none');
        $('#dbImage3').css('display', 'none');

        $("#showItems").css('display', 'block');
        $('#item1').css('display', 'none');
        $('#item2').css('display', 'block');
        //$('#item3').css('display', 'block');

    });
    $("#id6").click(function () {
        $('#msgBox').show();
        var val = $("#id6").html();
      
        $('#arrowImage').css('margin-top', '91%');
        $('#contentBox').css('display', 'none');
        $('#contentBox1').css('display', 'none');
        $('#contactustab').css('display', 'none');
        $('#logticket').css('display', 'none');
        $('#doctab').css('display', 'none');
        $('#adminContentBox1').css('display', 'none');
        $('#adminContentBox2').css('display', 'none');
        $('#adminContentBox3').css('display', 'none');
        $("#dashboardContentBox").css('display', 'none');
        $("#supportContentBox").css('display', 'none');
        $('#dbImage1').css('display', 'none');
        $('#dbImage2').css('display', 'none');
        $('#dbImage3').css('display', 'none');

        $("#showItems").css('display', 'none');
        $('#item1').css('display', 'none');
        $('#item2').css('display', 'none');
        //$('#item3').css('display', 'none');

    });

    //// Mobile Menu Click Events
    $('#mobileMenuHeader').addClass('SlideClass');
    $('#mobilesubMenuHeader').addClass('SubMenuSlideClass');
    
        $(".SlideClass").click(function () {
            $("#menuBar").removeClass("displayNone");
            $("#menuBar").slideToggle('slow');
            $('#menuBar').css("left", "-10px");
            $('#menuBar').css("top", "142px");
        });


    $(".SubMenuSlideClass").unbind().bind().click(function () {

        $("#SubmenuBar").removeClass("displayNone");
        $("#SubmenuBar").slideToggle('slow');
        $('#SubmenuBar').css("left", "0%");
        $('#SubmenuBar').css("top", "142px");
        $('#SubmenuBar').css("margin-right", "2%");

    });

    ///////////////

    $("#subMenuBtn1").click(function () {
        var val = $("#subMenuBtn1").val();

        $("#mobilesubMenuHeader").attr("value", val);

        if (val === 'All(2)') {
            $('#msgBox').hide();
            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'block');
            $('#item1').css('display', 'block');
            $('#item2').css('display', 'block');
            //$('#item3').css('display', 'block');

        } else if (val === 'Add App') {

            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'block');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');


        } else if (val === 'Documents') {

            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'block');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'block');
        }





    });

    $("#subMenuBtn2").click(function () {

        var val = $("#subMenuBtn2").val();
        $("#mobilesubMenuHeader").attr("value", val);

        if (val === 'Manufacturing(1)') {

            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'block');
            $('#item1').css('display', 'block');
            $('#item2').css('display', 'none');
            //$('#item3').css('display', 'none');
            $('#msgBox').hide();

        } else if (val === 'Edit App') {

            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'block');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');


        } else if (val === 'Contact Us') {

            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'block');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');
            $('#contactustab').css('display', 'block');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
        }



    });
    $("#subMenuBtn3").click(function () {

        var val = $("#subMenuBtn3").val();
        $("#mobilesubMenuHeader").attr("value", val);

        if (val === 'Finance') {

            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');
            $('#msgBox').show();

        } else if (val === 'Upcoming Apps') {

            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'block');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');


        } else if (val === 'Log Ticket') {

            $('#contentBox').css('display', 'none');
            $('#contentBox1').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'block');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'block');
            $('#doctab').css('display', 'none');
        }


    });
    $("#subMenuBtn4").click(function () {

        var val = $("#subMenuBtn4").val();
        $("#mobilesubMenuHeader").attr("value", val);

        $('#contentBox').css('display', 'none');
        $('#contentBox1').css('display', 'none');
        $('#contactustab').css('display', 'none');
        $('#logticket').css('display', 'none');
        $('#doctab').css('display', 'none');
        $('#adminContentBox1').css('display', 'none');
        $('#adminContentBox2').css('display', 'none');
        $('#adminContentBox3').css('display', 'none');
        $("#dashboardContentBox").css('display', 'none');
        $("#supportContentBox").css('display', 'none');
        $('#dbImage1').css('display', 'none');
        $('#dbImage2').css('display', 'none');
        $('#dbImage3').css('display', 'none');

        $("#showItems").css('display', 'block');
        $('#item1').css('display', 'none');
        $('#item2').css('display', 'block');
        //$('#item3').css('display', 'block');
        $('#msgBox').hide();

    });
    $("#subMenuBtn5").click(function () {

        var val = $("#subMenuBtn5").val();
        $("#mobilesubMenuHeader").attr("value", val);

        $('#contentBox').css('display', 'none');
        $('#contentBox1').css('display', 'none');
        $('#contactustab').css('display', 'none');
        $('#logticket').css('display', 'none');
        $('#doctab').css('display', 'none');
        $('#adminContentBox1').css('display', 'none');
        $('#adminContentBox2').css('display', 'none');
        $('#adminContentBox3').css('display', 'none');
        $("#dashboardContentBox").css('display', 'none');
        $("#supportContentBox").css('display', 'none');
        $('#dbImage1').css('display', 'none');
        $('#dbImage2').css('display', 'none');
        $('#dbImage3').css('display', 'none');

        $("#showItems").css('display', 'block');
        $('#item1').css('display', 'none');
        $('#item2').css('display', 'none');
        $('#item3').css('display', 'none');
        $('#msgBox').show();
    });



    $(".submenuItems").click(function () {
        $(".submenuItems").addClass("subMenuTabsColor").removeClass("subMenuSelectedTabsColor");
        $(this).addClass("subMenuSelectedTabsColor").removeClass("subMenuTabsColor");
    });

    ////////////////
    $('body').click(function (e) {


        if ($(e)[0].target.attributes.class != undefined && $(e)[0].target.attributes.id != undefined) {
            var className = $(e)[0].target.attributes.class.nodeValue;
            var idName = $(e)[0].target.attributes.id.nodeValue;

            if ($(window).width() < 639) {
                if (idName === "mobileMenuHeader") {
                    $('#SubmenuBar').css("display", "none");

                }
                else if (idName === "mobilesubMenuHeader") {
                    $('#menuBar').css("display", "none");
                }
                else if (className.indexOf('SlideClass') > 0) {
                    e.preventDefault();
                }
                else {
                    $("#menuBar").css("display", "none");
                    $("#SubmenuBar").css("display", "none");
                }
            }

        }

    });

});

$(window).resize(function () {
    "use strict";
 
    if ($(window).width() < 639) {
        $("#menuBar").css("display", "none");
        $("#btnMenu1 img").attr("src", "assests/images/Applications.png");
        $("#menu2 img").attr("src", "assests/images/Admin.png");
        $("#menu3 img").attr("src", "assests/images/Dashboard.png");
        $("#menu4 img").attr("src", "assests/images/Support.png");
        $(".menuItems").unbind().bind().hover(function () {
            if ($(this).attr('id') == "menu1") {
                $("#menu1 img").attr("src", "assests/images/Applications - sel.png");
            }
            if ($(this).attr('id') == "menu2") {
                $("#menu2 img").attr("src", "assests/images/Admin - Sel.png");
            }
            if ($(this).attr('id') == "menu3") {
                $("#menu3 img").attr("src", "assests/images/Dashboard - Sel.png");
            }
            if ($(this).attr('id') == "menu4") {
                $("#menu4 img").attr("src", "assests/images/Support - Sel.png");
            }
        });

        $(".menuItems").unbind().bind().mouseleave(function () {
            if ($(this).attr('id') == "menu1") {
                $("#menu1 img").attr("src", "assests/images/Applications.png");
            }
            if ($(this).attr('id') == "menu2") {
                $("#menu2 img").attr("src", "assests/images/Admin.png");
            }
            if ($(this).attr('id') == "menu3") {
                $("#menu3 img").attr("src", "assests/images/Dashboard.png");
            }
            if ($(this).attr('id') == "menu4") {
                $("#menu4 img").attr("src", "assests/images/Support.png");
            }
        });
    }
    else {
        $(".menuItems").unbind('hover mouseleave')
       
        $("#menuBar").css("display", "block");
        if (window.location.href.toUpperCase().indexOf("APPLICATIONPAGE") !== -1) {
            $("#btnMenu1 img").attr("src", "assests/images/Applications - sel.png");
            $("#btnMenu1").addClass('selectedMenuColor').removeClass('MenuColor');
        }
        if (window.location.href.toUpperCase().indexOf("ADMIN") !== -1) {
            $("#btnMenu2 img").attr("src", "assests/images/Admin - Sel.png");
            $("#btnMenu2").addClass('selectedMenuColor').removeClass('MenuColor');
        }
        if (window.location.href.toUpperCase().indexOf("DASHBOARD") !== -1) {
            $("#btnMenu3 img").attr("src", "assests/images/Dashboard - Sel.png");
            $("#btnMenu3").addClass('selectedMenuColor').removeClass('MenuColor');
        }
        if (window.location.href.toUpperCase().indexOf("SUPPORT") !== -1) {
            $("#btnMenu4 img").attr("src", "assests/images/Support - Sel.png");
            $("#btnMenu4").addClass('selectedMenuColor').removeClass('MenuColor');
        }
           
    }

   
});
