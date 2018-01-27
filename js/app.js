jQuery(document).ready(function($) {
    function setActiveTab(tabNumber) {
        if (tabNumber == 0) {
            $(".tab, .close").addClass("hidden");
        } else {
            $(".tab").addClass("hidden");
            var className = "tab-" + tabNumber;
            $("." + className + ", .close").removeClass("hidden");
        }
    }

    $(".toggle").on("click", function() {
        setActiveTab($(this).data("tab"));
    });

    $(".close").on("click", function() {
        setActiveTab(0);
    });
});
