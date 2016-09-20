$('.btn_rps').hover(function() {
  $(this).css('font-size', "80px");
}, function() {
	$(this).css('font-size', "30px");
  });

var user;
var comp;

$(".rock").click(function() {
	user = "rock";
	comp = Math.random();
    game(comp, user);
    
	
});

$(".paper").click(function() {
	user = "paper";
	comp = Math.random();
    game(comp, user);
    
	
});

$(".scissors").click(function() {
	user = "scissors";
	game(comp, user);
    comp = Math.random();
    
	
});

var game = function(comp, user) {
    	if (comp < 0.34) {
				comp = "rock";
			} else if(comp <= 0.67) {
				comp = "paper";
			} else {
				comp = "scissors";
		}
        $(".panel-heading").html("Computer picks " + comp);
	if(comp === user) {
        $(".panel-body").html("The result is a tie!");
    } else if (comp === "rock") {
        if (user === "scissors") {
            $(".panel-body").html("Computer wins!");
        } else {
            $(".panel-body").html("You Win!");
            }
        } else if (comp === "paper") {
            if (user === "rock") {
                $(".panel-body").html("Computer Wins!");
            } else {
                $(".panel-body").html("You Win!");
            }
        } else if (comp === "scissors") {
            if (user === "rock") {
                $(".panel-body").html("You Win!");
            } else {
                $(".panel-body").html("Computer Wins!");
            }
        }
};