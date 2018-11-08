$(document).ready(function(){
    pjaxNavigation();
    moreButton();
    navigation();
    mobileNavigation();
    mobileProjectsNavigation();
    $(document).trigger('page_load');
});

// pjax navigation
function pjaxNavigation() {
    var container = $('#pjaxContainer');
    var body = $('body');

    $(document).pjax('a','#pjaxContainer');
/*
    $('.navigation-item').pjax({
        container: '#pjaxContainer',
        timeout: 500
    });
*/
    container.on('pjax:start', function() {
        // get page tree
        var url = document.URL.toString();
        var page = url.substring(url.lastIndexOf('?pageID=') + 1);
        var project = url.substring(url.lastIndexOf('&project=') + 1);;

        // trim pageID=
        page = page.replace(/pageID=/g,'');
        project = project.replace(/project=/g,'');

        // if is page is nested under a category,
        // trim all content after an &
        if(page.indexOf('&') > 0) {
            page = page.substring(0, page.indexOf("&"));
        }

        // switch statement to determine what state the navigation is in.
        navigationSwitch(page,project);
    });


    // Events

    var pageLoad;

    $(document).on('pjax:end', function(){
        currentPage = '';
        //after replace success
        pageLoad = setTimeout(function(){
            $(document).trigger('page_load');
        }, 80);

    });
    $(document).on('pjax:beforeReplace', function() {
        // on send
        clearTimeout(pageLoad);
        $(document).trigger('page_leave');
        currentPage = '';
    });

    $(window).resize(function(){
        waitForFinalEvent(function () {
            $(document).trigger('page_resize');
        }, 200);
    });
}



var elem;
var mobileNav;
var current;
var hover;
var body;
var navOpen = false;
var currentPage;

function navigation() {
    // nav hover effect
    body = $('body');
    elem = $('.js-navigation');
    mobileNav = $('.js-mobile-navigation');

    if(elem.hasClass('nav--1')){current = 'nav--1';}
    if(elem.hasClass('nav--2')){current = 'nav--2';}
    if(elem.hasClass('nav--3')){current = 'nav--3';}
    if(elem.hasClass('nav--4')){current = 'nav--4';}

    console.log(current);

    $('.navigation-item').each(function(){
        var index = $(this).index()+1;
        var className = 'nav--'+index;

        $(this).mouseenter(function(){
            elem.removeClass('nav--1 nav--2 nav--3 nav--4');
            elem.addClass(className);
            hover = className;
        });

        $(this).mouseleave(function(){
            elem.removeClass('nav--1 nav--2 nav--3 nav--4');
            elem.addClass(current);
        });
    });
}


// called on pjax start
// ONLY after a link click
function navigationSwitch(page,project) {
    switch(page) {
        case 'home':
            current='nav--1';
            mobileProjectsControl('none');
            break;
        case 'caseStudies':
            current='nav--2';
            mobileProjectsControl(project);
            break;
        case 'blogPost':
            current='nav--3';
            mobileProjectsControl('none');
            break;
        case 'contact':
            current='nav--4';
            mobileProjectsControl('none');
            break;
        default:
            current='nav--1';
            mobileProjectsControl('none');
    }
    elem.removeClass('nav--1 nav--2 nav--3 nav--4');
    elem.addClass(current);

    mobileNav.removeClass('nav--1 nav--2 nav--3 nav--4');
    mobileNav.addClass(current);

    body.removeClass('nav-open');
    navOpen = false;

}

// need a function that closes and removes projects accordion on navigation AWAY


// mobile navigation control (open||close)
function mobileNavigation() {
    var trigger = $('.js-toggle-navigation');

    //body.addClass('nav-open');

    trigger.click(function(){
       mobileNav();
    });

    function mobileNav() {
        if (navOpen == true) {
            navOpen = false;
            body.removeClass('nav-open');
        } else {
            navOpen = true;
            body.addClass('nav-open');
        }
    }
}

var accordion;
var isOpen = false;

// projects accordion functionality
function mobileProjectsNavigation() {
    accordion = $('.js-projects-accordion');
    var trigger = $('.js-projects-toggle');

    trigger.click(function(){
        if (isOpen == true) {
            isOpen = false;
            accordion.removeClass('accordion-open');
        } else {
            isOpen = true;
            accordion.addClass('accordion-open');
        }
    });
}

//projects control
function mobileProjectsControl(project) {

    var linkAll = $('.js-mobile-project-1');
    var linkRaygun = $('.js-mobile-project-2');
    var linkCanvasLayers = $('.js-mobile-project-3');
    var linkMindscape = $('.js-mobile-project-4');
    var linkRoofRaider = $('.js-mobile-project-5');

    linkAll.removeClass('is-active');
    linkRaygun.removeClass('is-active');
    linkCanvasLayers.removeClass('is-active');
    linkMindscape.removeClass('is-active');
    linkRoofRaider.removeClass('is-active');

    switch(project) {
        case 'raygun':
            linkRaygun.addClass('is-active');
            break;
        case 'canvasLayers':
            linkCanvasLayers.addClass('is-active');
            break;
        case 'mindscape':
            linkMindscape.addClass('is-active');
            break;
        case 'roofRaider':
            linkRoofRaider.addClass('is-active');
            break;
        case 'none':
            return false;
        default:
            linkAll.addClass('is-active');
    }
}












// more button
function moreButton() {
    // more button
    var moreBtn = $('.navigation-more');

    moreBtn.mouseenter(function() {

        var el     = $('.more-button'),
            newone = el.clone(true);

        el.before(newone);

        $("." + el.attr("class") + ":last").remove();
    });
}
