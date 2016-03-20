var _layout = $.extend({
    dbdd3: $("#dbdd3"),

    showtabs: function showtabs() {

        $("#tabSelector").removeClass("displayNone");
        $("#tabs").removeClass("displayNone");
    },
    hidetabs: function hidetabs() {

        $("#tabSelector").addClass("displayNone");
        $("#tabs").addClass("displayNone");
    },
    accordian: function accordian() {
        $("#accordion").accordion();

    },
    desktopButtonClicks: function desktopButtonClicks() {
        $("#btnMenu1").click(function () {
            $('#msgBox').hide();
            //            $('#arrowImage').css('display', 'block');
            $('#arrowImage').css('margin-top', '22%');
            $('#id2').css('background-color', '#C6F3FF');
            $('#id1').css('background-color', '#F5F5F5');
            $('#id3').css('background-color', '#F5F5F5');

            $('#id4').css('background-color', '#F5F5F5');
            $('#id5').css('background-color', '#F5F5F5');
            $('#id6').css('background-color', '#F5F5F5');

            $("#btnMenu1").addClass('selectedMenuColor').removeClass('MenuColor');
            $("#menu1 img").attr("src", "assests/images/Applications - sel.png");
            $("#menu2 img").attr("src", "assests/images/Admin.png");
            $("#menu3 img").attr("src", "assests/images/Dashboard.png");
            $("#menu4 img").attr("src", "assests/images/Support.png");
            $("#btnMenu2").removeClass('selectedMenuColor').addClass('MenuColor');
            $("#btnMenu3").removeClass('selectedMenuColor').addClass('MenuColor');
            $("#btnMenu4").removeClass('selectedMenuColor').addClass('MenuColor');
            $('#contentBox').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');

            $("#showItems").css('display', 'block');
            $('#item1').css('display', 'block');
            $('#item2').css('display', 'block');
            $('#item3').css('display', 'block');

            $("#bid1").css("display", "block");
            $("#bid2").css("display", "block");
            $("#bid3").css("display", "block");
            $("#bid4").css("display", "block");
            $("#bid5").css("display", "block");
            $("#bid6").css("display", "block");

            $("#id1").attr("value", "Categories");
            $("#id2").attr("value", "All(3)");
            $("#id3").attr("value", "Manufacturing");
            $("#id4").attr("value", "Finance");
            $("#id5").attr("value", "Retail(2)");
            $("#id6").attr("value", "Logistics(1)");
        });
        $("#btnMenu2").click(function () {
            //debugger;
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
            $('#contentBox').css('display', 'none');
            $('#adminContentBox1').css('display', 'block');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');

            $("#bid4").css("display", "block");
            $("#bid5").css("display", "none");
            $("#bid6").css("display", "none");

            $("#bid1").css("display", "none");
            $("#bid2").css("display", "block");
            $("#bid3").css("display", "block");


            $("#id1").attr("display", "none");
            $("#id2").attr("value", "Add App");
            $("#id3").attr("value", "Edit App");
            $("#id4").attr("value", "Upcoming Apps");

            $("#bid5").css("display", "none");
            $("#bid6").css("display", "none");
        });
        $("#btnMenu3").click(function () {
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
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'block');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'block');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'none');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');

            $("#bid1").css("display", "none");
            $("#bid2").css("display", "none");
            $("#bid3").css("display", "none");
            $("#bid4").css("display", "none");
            $("#bid5").css("display", "none");
            $("#bid6").css("display", "none");

        });
        $("#btnMenu4").click(function () {
            //debugger;
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
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'block');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');
            $('#doctab').css('display', 'block');

            $("#showItems").css('display', 'none');
            $('#item1').css('display', 'none');
            $('#item2').css('display', 'none');
            $('#item3').css('display', 'none');

            $("#bid4").css("display", "block");
            $("#bid5").css("display", "none");
            $("#bid6").css("display", "none");

            $("#bid1").css("display", "none");
            $("#bid2").css("display", "block");
            $("#bid3").css("display", "block");

            $("#id2").attr("value", "Documents");
            $("#id3").attr("value", "Contact Us");
            $("#id4").attr("value", "Log Ticket");


        });

    },
    buttonClicksforMenu1: function buttonClicksforMenu1() {
        $("#btnMenu1").click(function () {
            $('#msgBox').hide();
            $('#contentBox').css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#Menu2-1").css("display", "block");
            $("#Menu2-2").css("display", "block");
            $("#Menu2-3").css("display", "block");
            $("#Menu2-4").css("display", "block");
            $("#Menu2-5").css("display", "block");
            $("#mobilesubMenuHeader").attr("value", "All(3)");
            $("#mobileMenuHeader").attr("value", "All(3)");
            $("#subMenuBtn1").attr("value", "All(3)");
            $("#subMenuBtn2").attr("value", "Manufacturing");
            $("#subMenuBtn3").attr("value", "Finance");
            $("#subMenuBtn4").attr("value", "Retail(2)");
            $("#subMenuBtn5").attr("value", "logistics(1)");
            $("#showItems").css('display', 'block');
            $('#item1').css('display', 'block');
            $('#item2').css('display', 'block');
            $('#item3').css('display', 'block');


        });
        $("#btnMenu2").click(function () {
            $('#msgBox').hide();
            $('#contentBox').css('display', 'none');
            $("#showItems").css('display', 'none');
            $('#adminContentBox1').css('display', 'block');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');

            $("#Menu2-4").css("display", "none");
            $("#Menu2-5").css("display", "none");
            $("#mobilesubMenuHeader").attr("value", "Add App");
            $("#mobileMenuHeader").attr("value", "Add App");
            $("#subMenuBtn1").attr("value", "Add App");
            $("#subMenuBtn2").attr("value", "Edit App");
            $("#subMenuBtn3").attr("value", "Upcoming Apps");



        });
        $("#btnMenu3").click(function () {
            $('#msgBox').hide();
            $('#contentBox').css('display', 'none');
            $("#showItems").css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'block');
            $("#supportContentBox").css('display', 'none');
            $('#dbImage1').css('display', 'block');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');



            $("#Menu2-1").css("display", "none");
            $("#Menu2-2").css("display", "none");
            $("#Menu2-3").css("display", "none");
            $("#Menu2-4").css("display", "none");
            $("#Menu2-5").css("display", "none");
            $("#mobilesubMenuHeader").attr("value", "Dashboard");
            $("#mobileMenuHeader").attr("value", "Dashboard");


        });
        $("#btnMenu4").click(function () {
            $('#msgBox').hide();
            $('#contentBox').css('display', 'none');
            $("#showItems").css('display', 'none');
            $('#adminContentBox1').css('display', 'none');
            $('#adminContentBox2').css('display', 'none');
            $('#adminContentBox3').css('display', 'none');
            $("#dashboardContentBox").css('display', 'none');
            $("#supportContentBox").css('display', 'block');
            $('#dbImage1').css('display', 'none');
            $('#dbImage2').css('display', 'none');
            $('#dbImage3').css('display', 'none');
            $('#contactustab').css('display', 'none');
            $('#logticket').css('display', 'none');

            $("#Menu2-1").css("display", "block");
            $("#Menu2-2").css("display", "block");
            $("#Menu2-3").css("display", "block");
            $("#Menu2-4").css("display", "none");
            $("#Menu2-5").css("display", "none");
            $("#mobilesubMenuHeader").attr("value", "Documents");
            $("#mobileMenuHeader").attr("value", "Documents");
            $("#subMenuBtn1").attr("value", "Documents");
            $("#subMenuBtn2").attr("value", "Contact Us");
            $("#subMenuBtn3").attr("value", "Log Ticket");
            $('#doctab').css('display', 'block');



        });
        $("#btnMenu5").click(function () {
            $('#msgBox').hide();
            $("#mobilesubMenuHeader").attr("value", "Menu 5");
            $("#mobileMenuHeader").attr("value", "Menu 5");
            $("#subMenuBtn1").attr("value", "Menu5 1");
            $("#subMenuBtn2").attr("value", "Menu5 2");
            $("#subMenuBtn3").attr("value", "Menu5 3");
            $("#subMenuBtn4").attr("value", "Menu5 4");
            $("#subMenuBtn5").attr("value", "Menu5 5");


        });
    },

    categoryMenu: function categoryMenu() {

        $("#id1").click(function () {
            var val = $("#id1").val();
            if (val === 'Categories') {

            }

        });
        $("#id2").click(function () {

            var val = $("#id2").val();
            if (val === 'All(3)') {
                $('#msgBox').hide();
                $("#id1").css('background-color', '#f5f5f5');
                $("#id2").css('background-color', '#C6F3FF');
                $("#id3").css('background-color', '#f5f5f5');
                $("#id4").css('background-color', '#f5f5f5');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');
                $('#arrowImage').css('margin-top', '22%');
                $('#contentBox').css('display', 'none');
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
                $('#item3').css('display', 'block');

            } else if (val === 'Add App') {
                $("#id1").css('background-color', '#f5f5f5');
                $("#id2").css('background-color', '#C6F3FF');
                $("#id3").css('background-color', '#f5f5f5');
                $("#id4").css('background-color', '#f5f5f5');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');
                $('#arrowImage').css('margin-top', '5%');
                $('#contentBox').css('display', 'none');
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
                $("#id2").css('background-color', '#C6F3FF');
                $("#id1").css('background-color', '#f5f5f5');
                $("#id3").css('background-color', '#f5f5f5');
                $("#id4").css('background-color', '#f5f5f5');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');

                $('#arrowImage').css('margin-top', '5%');
                $('#contentBox').css('display', 'none');
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
            var val = $("#id3").val();

            if (val === 'Manufacturing') {
                $("#id1").css('background-color', '#f5f5f5');
                $("#id2").css('background-color', '#f5f5f5');
                $("#id3").css('background-color', '#C6F3FF');
                $("#id4").css('background-color', '#f5f5f5');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');

                $('#arrowImage').css('margin-top', '40%');
                $('#contentBox').css('display', 'none');
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

            } else if (val === 'Edit App') {
                $("#id1").css('background-color', '#f5f5f5');
                $("#id2").css('background-color', '#f5f5f5');
                $("#id3").css('background-color', '#C6F3FF');
                $("#id4").css('background-color', '#f5f5f5');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');
                $('#arrowImage').css('margin-top', '22%');
                $('#contentBox').css('display', 'none');
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
                $("#id1").css('background-color', '#f5f5f5');
                $("#id2").css('background-color', '#f5f5f5');
                $("#id3").css('background-color', '#C6F3FF');
                $("#id4").css('background-color', '#f5f5f5');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');
                $('#arrowImage').css('margin-top', '22%');
                $('#contentBox').css('display', 'none');
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

            var val = $("#id4").val();
            if (val === 'Finance') {
                $("#id1").css('background-color', '#f5f5f5');
                $("#id2").css('background-color', '#f5f5f5');
                $("#id3").css('background-color', '#f5f5f5');
                $("#id4").css('background-color', '#C6F3FF');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');

                $('#arrowImage').css('margin-top', '56%');
                $('#contentBox').css('display', 'none');
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
                $("#id1").css('background-color', '#f5f5f5');
                $("#id2").css('background-color', '#f5f5f5');
                $("#id4").css('background-color', '#C6F3FF');
                $("#id3").css('background-color', '#f5f5f5');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');

                $('#arrowImage').css('margin-top', '40%');
                $('#contentBox').css('display', 'none');
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
                $("#id1").css('background-color', '#f5f5f5');
                $("#id2").css('background-color', '#f5f5f5');
                $("#id4").css('background-color', '#C6F3FF');
                $("#id3").css('background-color', '#f5f5f5');
                $("#id5").css('background-color', '#f5f5f5');
                $("#id6").css('background-color', '#f5f5f5');
                $('#arrowImage').css('margin-top', '40%');
                $('#contentBox').css('display', 'none');
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
            $("#id1").css('background-color', '#f5f5f5');
            $("#id2").css('background-color', '#f5f5f5');
            $("#id3").css('background-color', '#f5f5f5');
            $("#id4").css('background-color', '#f5f5f5');
            $("#id5").css('background-color', '#C6F3FF');
            $("#id6").css('background-color', '#f5f5f5');
            var val = $("#id5").val();
            $('#arrowImage').css('margin-top', '73%');
            $('#contentBox').css('display', 'none');
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
            $('#item3').css('display', 'block');

        });
        $("#id6").click(function () {
            $('#msgBox').hide();
            var val = $("#id6").val();
            $("#id1").css('background-color', '#f5f5f5');
            $("#id2").css('background-color', '#f5f5f5');
            $("#id3").css('background-color', '#f5f5f5');
            $("#id4").css('background-color', '#f5f5f5');
            $("#id5").css('background-color', '#f5f5f5');
            $("#id6").css('background-color', '#C6F3FF');
            $('#arrowImage').css('margin-top', '91%');
            $('#contentBox').css('display', 'none');
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
            $('#item3').css('display', 'none');

        });
    },
    buttonClicksforMenu2: function buttonClicksforMenu2() {

        $("#subMenuBtn1").click(function () {
            var val = $("#subMenuBtn1").val();

            $("#mobilesubMenuHeader").attr("value", val);

            if (val === 'All(3)') {
                $('#msgBox').hide();
                $('#contentBox').css('display', 'none');
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
                $('#item3').css('display', 'block');

            } else if (val === 'Add App') {

                $('#contentBox').css('display', 'none');
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

            if (val === 'Manufacturing') {

                $('#contentBox').css('display', 'none');
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

            } else if (val === 'Edit App') {

                $('#contentBox').css('display', 'none');
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
            $('#item3').css('display', 'block');
            $('#msgBox').hide();

        });
        $("#subMenuBtn5").click(function () {

            var val = $("#subMenuBtn5").val();
            $("#mobilesubMenuHeader").attr("value", val);

            $('#contentBox').css('display', 'none');
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
            $('#item3').css('display', 'none');
            $('#msgBox').hide();
        });
    }
});

$(window).load(function () {
    "use strict";
    //debugger;
   $(window).resize();





    $('#mobileMenuHeader').addClass('SlideClass');
    $('#mobilesubMenuHeader').addClass('SubMenuSlideClass');
    $("#menuBar").addClass("displayNone");
    $(".SlideClass").unbind().bind().click(function () {

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

    $('#item1').click(function () {

        $('#showItems').css('display', 'none');
        $('#contentBox').show();
        $('#textBlock').html('iLogistics App');
        $('#imageBlock').html('<img src="assests/images/icon@2x.png" alt="Logistics Logo" />');
        _layout.accordian();
        //        $('#accordianMobileView').css('display', 'block');
        $('#textDivRows').html('<br/>Cateory RI Enterprise Mobility Solutions No.of Downloads: 25 Release Date:06-Mar-2013');
        //            $('#btn1').attr('value', 'Overview');
        //            $('#btn2').attr('value', 'Main Features');
        //            $('#btn3').attr('value', 'Specifications');
        //            $('#btn4').attr('value', 'Artifacts');
        //            $('#btn5').attr('value', 'Demo/Video');
        //            $('#btn6').attr('value', 'Contact');
        $('#btn1').css("background-color", "#C6F3FF");
        $("#tabs").html("An application for board members for viewing board meeting documents on the fly");
    });
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

    if ($(window).width() < 639) {

        _layout.accordian();
        _layout.hidetabs();
        _layout.buttonClicksforMenu1();
        _layout.buttonClicksforMenu2();
        $('#menuBar').css("top", "108px");
        $('#SubmenuBar').css("top", "108px");
        //        $("#mobileSubMenuHeader").css("background-color", "#ffaec9");

    }
    else {


        _layout.desktopButtonClicks();
        $('input:button').click(function () {
            if ($(this).val() === 'Overview') {
                $(this).css("background-color", "#C6F3FF");
                $("#btn2").css("background-color", "#E0E0E0");
                $("#btn3").css("background-color", "#E0E0E0");
                $("#btn4").css("background-color", "#E0E0E0");
                $("#btn5").css("background-color", "#E0E0E0");
                $("#btn6").css("background-color", "#E0E0E0");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("An application for board members for viewing board meeting documents on the fly");

            } else if ($(this).val() === 'Main Features') {
                $("#btn1").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                $("#btn3").css("background-color", "#E0E0E0");
                $("#btn4").css("background-color", "#E0E0E0");
                $("#btn5").css("background-color", "#E0E0E0");
                $("#btn6").css("background-color", "#E0E0E0");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("Ability to view messages sent by company secretary on home screen");

            }
            else if ($(this).val() === 'Specifications') {
                $("#btn1").css("background-color", "#E0E0E0");
                $("#btn2").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                $("#btn4").css("background-color", "#E0E0E0");
                $("#btn5").css("background-color", "#E0E0E0");
                $("#btn6").css("background-color", "#E0E0E0");
                //$("#tabs").html("selected " + $(this).val());
                $("#tabs").html("Application is developerd using native iOS SDK");
            }
            else if ($(this).val() === 'Artifacts') {
                $("#btn1").css("background-color", "#E0E0E0");
                $("#btn2").css("background-color", "#E0E0E0");
                $("#btn3").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                $("#btn5").css("background-color", "#E0E0E0");
                $("#btn6").css("background-color", "#E0E0E0");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("User Guide");
            }
            else if ($(this).val() === 'Demo/Video') {
                $("#btn1").css("background-color", "#E0E0E0");
                $("#btn2").css("background-color", "#E0E0E0");
                $("#btn3").css("background-color", "#E0E0E0");
                $("#btn4").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                $("#btn6").css("background-color", "#E0E0E0");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Contact') {
                $("#btn1").css("background-color", "#E0E0E0");
                $("#btn2").css("background-color", "#E0E0E0");
                $("#btn3").css("background-color", "#E0E0E0");
                $("#btn4").css("background-color", "#E0E0E0");
                $("#btn5").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("Name:<b>Venkatesh Babu</b></br> Email Id: <b>venkatesh.babu@igate.com</b></br> Department-: <b>R&I Mobility-R&I Mobility</b></br> Contact Number-: 98455 98462");
            }

        });
    }
});


$(window).resize(function () {
    "use strict";

    if ($(window).width() < 639) {
        $("#mobilesubMenuHeader").attr("value", "All(3)");
        $("#mobileMenuHeader").attr("value", "All(3)");
        $('#contentBox').css('display', 'none');
        $('#adminContentBox1').css('display', 'none');
        $('#adminContentBox2').css('display', 'none');
        $('#adminContentBox3').css('display', 'none');
        $("#dashboardContentBox").css('display', 'none');
        $("#supportContentBox").css('display', 'none');
        $('#accordianMobileView').css('display', 'block');
        $("#showItems").css('display', 'block');
        $('#item1').css('display', 'block');
        $('#item2').css('display', 'block');
        $('#item3').css('display', 'block');        
        $("#menu1 img").attr("src", "assests/images/Applications.png");
        $('#mobileMenuHeader').addClass('SlideClass').removeClass('SlideClass');
        $('#mobilesubMenuHeader').addClass('SubMenuSlideClass').removeClass('SubMenuSlideClass');
        $("#menuBar").css("display", "none");
        $("#SubmenuBar").css("display", "none");
        _layout.accordian();

        _layout.hidetabs();
        _layout.buttonClicksforMenu1();
        _layout.buttonClicksforMenu2();
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
        //        $("#mobileSubMenuHeader").css("background-color", "#ffaec9");
        $("#menuBar").addClass("displayNone");
        $(".SlideClass").unbind().bind().click(function () {

            $("#menuBar").removeClass("displayNone");
            $("#menuBar").slideToggle('slow');
            $('#menuBar').css("left", "-10px");
            $('#menuBar').css("top", "142px");
        });

        $(".SubMenuSlideClass").unbind().bind().click(function () { 

            $("#SubmenuBar").removeClass("displayNone"); //.addClass("displayBlock");
            $("#SubmenuBar").slideToggle('slow');
            $('#SubmenuBar').css("left", "0%");
            $('#SubmenuBar').css("top", "142px");
            $('#SubmenuBar').css("margin-right", "2%");

        });

    } else {

        $('#mobileMenuHeader').addClass('SlideClass');
        $('#mobilesubMenuHeader').addClass('SubMenuSlideClass');
        $("#menuBar").addClass("displayNone");
        $(".SlideClass").unbind().bind().click(function () {

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
        
       
        $('#accordianMobileView').css('display', 'none');
        _layout.desktopButtonClicks();
        _layout.showtabs();
        $("#id1").attr("value", "Categories");
        $("#id2").attr("value", "All(3)");
        $("#id3").attr("value", "Manufacturing");
        $("#id4").attr("value", "Finance");
        $("#id5").attr("value", "Retail(2)");
        $("#id6").attr("value", "Logistics(1)");
        _layout.categoryMenu();

        $('#contentBox').css('display', 'none');
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
        $('#item3').css('display', 'block');


        $("#menuBar").css('display', 'block');

        $('#mobileMenuHeader').removeClass('SlideClass').addClass('SlideClass');
        $('#mobilesubMenuHeader').removeClass('SubMenuSlideClass').addClass('SubMenuSlideClass');



        $('input:button').click(function () {
            if ($(this).val() === 'Overview') {
                $(this).css("background-color", "#C6F3FF");
                $("#btn2").css("background-color", "#E0E0E0");
                $("#btn3").css("background-color", "#E0E0E0");
                $("#btn4").css("background-color", "#E0E0E0");
                $("#btn5").css("background-color", "#E0E0E0");
                $("#btn6").css("background-color", "#E0E0E0");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("An application for board members for viewing board meeting documents on the fly");

            } else if ($(this).val() === 'Main Features') {
                $("#btn1").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                $("#btn3").css("background-color", "#E0E0E0");
                $("#btn4").css("background-color", "#E0E0E0");
                $("#btn5").css("background-color", "#E0E0E0");
                $("#btn6").css("background-color", "#E0E0E0");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("Ability to view messages sent by company secretary on home screen");

            }
            else if ($(this).val() === 'Specifications') {
                $("#btn1").css("background-color", "#E0E0E0");
                $("#btn2").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                $("#btn4").css("background-color", "#E0E0E0");
                $("#btn5").css("background-color", "#E0E0E0");
                $("#btn6").css("background-color", "#E0E0E0");
                //$("#tabs").html("selected " + $(this).val());
                $("#tabs").html("Application is developerd using native iOS SDK");
            }
            else if ($(this).val() === 'Artifacts') {
                $("#btn1").css("background-color", "#E0E0E0");
                $("#btn2").css("background-color", "#E0E0E0");
                $("#btn3").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                $("#btn5").css("background-color", "#E0E0E0");
                $("#btn6").css("background-color", "#E0E0E0");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("User Guide");
            }
            else if ($(this).val() === 'Demo/Video') {
                $("#btn1").css("background-color", "#E0E0E0");
                $("#btn2").css("background-color", "#E0E0E0");
                $("#btn3").css("background-color", "#E0E0E0");
                $("#btn4").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                $("#btn6").css("background-color", "#E0E0E0");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Contact') {
                $("#btn1").css("background-color", "#E0E0E0");
                $("#btn2").css("background-color", "#E0E0E0");
                $("#btn3").css("background-color", "#E0E0E0");
                $("#btn4").css("background-color", "#E0E0E0");
                $("#btn5").css("background-color", "#E0E0E0");
                $(this).css("background-color", "#C6F3FF");
                // $("#tabs").html("selected " + $(this).val());
                $("#tabs").html("Name:<b>Venkatesh Babu</b></br> Email Id: <b>venkatesh.babu@igate.com</b></br> Department-: <b>R&I Mobility-R&I Mobility</b></br> Contact Number-: 98455 98462");
            }

        });
        $('#item1').click(function () {

            $('#showItems').css('display', 'none');
            $('#contentBox').show();
            $('#textBlock').html('iLogistics App');
            $('#imageBlock').html('<img src="assests/images/icon@2x.png" alt="Logistics Logo" />');
            _layout.accordian();
            //        $('#accordianMobileView').css('display', 'block');
            $('#textDivRows').html('<br/>Cateory RI Enterprise Mobility Solutions No.of Downloads: 25 Release Date:06-Mar-2013');
            //            $('#btn1').attr('value', 'Overview');
            //            $('#btn2').attr('value', 'Main Features');
            //            $('#btn3').attr('value', 'Specifications');
            //            $('#btn4').attr('value', 'Artifacts');
            //            $('#btn5').attr('value', 'Demo/Video');
            //            $('#btn6').attr('value', 'Contact');
            $('#btn1').css("background-color", "#C6F3FF");
            $("#tabs").html("An application for board members for viewing board meeting documents on the fly");
        });
    }


});