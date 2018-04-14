(function(){

	var i, active = -1, menuState = 0, menu = document.getElementsByClassName("eventsBody")[0].getElementsByClassName("left")[0];
	var clubItems = document.getElementsByClassName("clubItems");

	for(i = 0; i < clubItems.length; i++){
		clubItems[i].hoverId = i;
		clubItems[i].addEventListener("mouseenter", function(){
			document.getElementsByClassName("eventsMenuSpiderman")[0].className = "eventsMenuSpiderman pos" + this.hoverId;
			document.getElementsByClassName("spiderWeb")[0].className = "spiderWeb pos" + this.hoverId;
		});

		clubItems[i].addEventListener("mouseleave", function(){
				document.getElementsByClassName("eventsMenuSpiderman")[0].className = "eventsMenuSpiderman pos" + active;
				document.getElementsByClassName("spiderWeb")[0].className = "spiderWeb pos" + active;
		});

		clubItems[i].addEventListener("click", function(){
			toggleMenu();

				document.getElementsByClassName("events" + active)[0].className = "events" + active + " events outsideRight";
			document.getElementsByClassName("events" + this.hoverId)[0].className = "events" + this.hoverId + " events insideBody";
			active = this.hoverId;
		});
	}


	function toggleMenu(){
		if(menuState == 0){
			menuState = 1;
			menu.className = "left active";
			club=document.getElementsByClassName("clubIcon")[0];
			club.className="clubIcon clicked1";
		}

		else{
			menu.className = "left unactive";
			club=document.getElementsByClassName("clubIcon")[0];
			club.className="clubIcon unclicked";
			menuState = 0;
		}
	}

	document.getElementsByClassName("clubIcon")[0].addEventListener("click", toggleMenu);

})();
