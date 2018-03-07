
$(document).ready(function() {


        $("#theMessage").animate({right: '200px'}, "slow");
        $("#theMessage").fadeOut(2000);
        $("#theMessage").fadeIn(2000);
        $("#theMessage").animate({left: '200px'}, "slow");
        $("#theMessage").fadeOut(2000);
        $("#theMessage").fadeIn(2000);
        $("#theMessage").animate({right: '400px'}, "slow");

        $("#theMessage").fadeOut(2000, function(){
          // our last fadeOut is done, let's center it
          $('#theMessage').attr('style', '');
          $("#theMessage").fadeIn(2000);

        });

});
