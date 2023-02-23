(function ($) {
    buying_fields();
})(jQuery);

function buying_fields(param) {
    $("#buying").load('pages/buying.html');
    $("#buying").show();
    $("#renting").hide();
    $("#selling").hide();
}

function renting_fields() {
    $("#renting").load('pages/renting.html');
    $("#renting").show();
    $("#buying").hide();
    $("#selling").hide();
}


function selling_fields() {
    $("#selling").load('pages/selling.html');
    $("#selling").show();
    $("#renting").hide();
    $("#buying").hide();
}




