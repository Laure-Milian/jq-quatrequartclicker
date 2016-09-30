$(document).ready(function(){

	counter = $("span").val();

	var messages = ["message a", "message b", "message c"];

	var len = messages.length;

	$(".cake").click(function() {
		counter++;
		$("span").html(counter);

		if (counter % 20 === 0) {
			alert("Déja " + counter + " clics ! Allez faire autre chose. Svp. Si vous voulez bien. Faire la vaisselle. Peut-être. Désolée. Je veux pas insister non plus.");
			var i = 0;
			console.log(messages[i]);
	
		}

	});

});
