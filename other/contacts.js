(function(){
	var batman = document.getElementsByClassName("lightRay")[0],
		contact = document.getElementsByClassName("contactDetails")[0],
		title = document.getElementsByClassName("batmanTitle")[0];

	contactTransition = function(){
		setTimeout(changeBat, 0);
	}

	function changeBat(){
		batman.className = "lightRay animated";
		setTimeout(getContacts, 3000);
	}

	function getContacts(){
		batman.className = "lightRay animated gone";
		title.className = "batmanTitle gone";
		contact.className = "contactDetails insideBody";
	}


})();
