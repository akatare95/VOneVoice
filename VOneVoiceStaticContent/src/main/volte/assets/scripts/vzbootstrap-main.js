//
//  Global scripts Initialization
// -------------------------------------------------- 
jQuery(document).ready(function($) {

    // -------------------------
    // Global Menu
    // -------------------------
    $('.navbar .dropdown').each(function() {
        $(this).mouseover(function() {
            $('body').addClass('vzbs-menu-overflow')
        });
        $(this).mouseout(function() {
            $('body').removeClass('vzbs-menu-overflow');
        });
    });

    // -------------------------
    // Mobile devices being targetted
    // -------------------------
    var windowWidth = $(document).width();
    if(windowWidth <= 767){

        /* Mobile - Global Menu Toggle */
        $('.navbar .dropdown > a').each(function() {
            $(this).on('click touch', function (e) {
                e.preventDefault();
                if  ($(this).parent().hasClass("mobile-expanded")){
                    $(this).parent().removeClass("mobile-expanded");
                }
                else{
                    $('.navbar .dropdown').removeClass('mobile-expanded');
                    $(this).parent().addClass('mobile-expanded');    
                }
            });
        });

        /* Mobile - Help and Feedback tabs*/
        var HFelm = jQuery('#help-feedback');
        if(HFelm.length === 1){
            HFelm.hide();
            HFelm.clone().appendTo('body > div.container').addClass('mobile-help-feedback');
        }

    }

    // -------------------------
    // Global Header - Logo alignments for multiple scenarios
    // -------------------------
    var appName = $('#vz-app-name');
    if (appName.length == 0)
        $('.navbar-header .navbar-brand').show();

    var navbarToggle = $('.navbar-header .navbar-toggle');
    if (navbarToggle.length == 0)
        $('.navbar-header .navbar-brand').css('margin', '0px');

    // -------------------------
    // Tree Menu
    // -------------------------

    $('.tree-toggler').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().children('.tree.stem').toggle();
        $("span", this).toggleClass("fa-plus fa-minus");
    });

    // -------------------------
    // Tooltip
    // -------------------------

    $('[data-toggle="tooltip"]').tooltip();

    //modal
    $('.modal').on('shown.bs.modal', function(e) {
        $('.modal-body').scrollTop(0);
    });

    // -------------------------
    // Timepicker
    // -------------------------
    $('.timepicker input').each(function() {
        $(this).click(function() {
            $(this).timepicker('showWidget')
        });
    });

    //data-placeholder fields
    $('input.data-placeholder').each(function() {
        $(this).parent('.form-group').css('position', 'relative')
        $(this).attr('placeholder', $(this).attr('data-placeholder'));
        $(this).after("<span class='placeholder-label hidden' >" + $(this).attr('placeholder') + "</span>");
        $(this).keyup(function() {
            if ($(this).val() != '') $(this).next().removeClass('hidden');
            else $(this).next().addClass('hidden');
        });
    });

    //just in case, user refreshes page.
    $('input.data-placeholder').keyup();

    //**************radio-checkboxes*****************--

    $('.vzbs-checkbox label > input').each(function() {
        $(this).hover().parent('label').toggleClass('vzbs-checkbox-hovered-label');
        $(this).click(function() {
            $(this).parent('label').toggleClass('vzbs-checkbox-checked-label');
        });

    });

    $('.vzbs-radio label > input').each(function() {
        $(this).hover().parent('label').toggleClass('vzbs-radio-hovered-label');
        $(this).click(function() {
            $(this).parent('label').toggleClass('vzbs-radio-checked-label');
        });

    });



}); //document.ready close

//-------------------
//  vzdropdown
//-------------------

function vzbsDropdown() {
    jQuery('.vzbs-dropdown').each(function(index, value) {
        //gets number of elements to fix the overflow
        var len = jQuery(this).find(jQuery('.dropdown-menu li')).length;
        if (len > 8) {
            jQuery(this).find('.dropdown-menu').addClass('adjust-block');
        }
        //takes cares of user selections
        jQuery('.vzbs-dropdown').eq(index).find(jQuery('.dropdown-menu li')).bind('click', function() {
            //removes selected globally and applies selected on list item click
            jQuery(this).parent().find(jQuery('li')).removeClass('selected');
            jQuery(this).addClass('selected');
            //getting span
            var cache = jQuery(this).parent().prev().children('span');
            //displays value on button
            jQuery(this).parent().prev().text(jQuery(this).text()).append(cache);
            //updates value on input field
            jQuery(this).parent().prev().prev('input[type="hidden"]').val(jQuery(this).text());
        });
    });
}