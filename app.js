$(document).ready(function(){

	counter = $("span").val();

	var messages = ["Allez faire autre chose", "Il fait beau dehors", "Courage fuyons", "Le fond de l'air est frais"];

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}

	$(".cake").click(function() {
		counter++;
		$("span").html(counter);

		if (counter % 20 === 0) {
			var i = getRandomIntInclusive(1, 3);
			alert(messages[i]);
		}

	});

});


