'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

/*
* Function that is called when the document is ready.
*/
function initializePage() {
    $("#testjs").click(function(e) {
        $('.jumbotron h1').text("Javascript is connected");
        $(this).text("Javascript Tested!");
        $('.jumbotron p').toggleClass("active");
    });

    // Add any additional listeners here
    // example: $("#div-id").click(functionToCall);
    $(".project").click (function(e) {
        e.preventDefault();
        var containingProject = $(this).closest(".project");
        var description = $(containingProject).find(".project-description");
        if (description.length === 0) {
            $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
        } else {
            description = $(containingProject).find(".project-description:hidden");
            console.log (description);
            if (description.length === 0) {
                description = $(containingProject).find(".project-description");
                $(description).fadeOut();
            }
            else {
                $(description).fadeIn();
            }
        }
    })
}
