jQuery(document).ready(function ($) {    
    // -------------------------
    // Mobile Search & Menu Toggle
    // -------------------------
    $(".navbar-toggle").click(function() {
        $("#navmenu").toggle();
        $("#vz-search-form").hide();
        $(this).toggleClass("active-btn");
        $(".search-toggle").removeClass("active-btn");
    });

    $(".search-toggle").click(function() {
        $('#navmenu').hide();
        $('#vz-search-form').toggle();
        $(this).toggleClass('active-btn');
        $('button.navbar-toggle').removeClass('active-btn');
    });

    $('#vz-search-mobile-close').click(function(){
        $('#vz-search-form').hide();
    });

    // -------------------------
    //  Search Auto Suggest Dropdown
    // -------------------------
    $('#search_content').keyup(function() {
        if ($(this).val().length > 1) {
            $('#searchOverlayTop1, #span_arrow_top').show();
        } else {
            $('#searchOverlayTop1, #span_arrow_top').hide();
        }

        $('body').on("click", closeSarchDD);

        function closeSarchDD(event) {
            if (!$(event.target).closest('#searchOverlayTop1').length) {
                $("#searchOverlayTop1, #span_arrow_top").hide();
                $('body').unbind();
            }
        }
    });

});   //document.ready close