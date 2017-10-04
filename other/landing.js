(function(){
	var avengers = document.getElementsByClassName("avengers"), avengerCount = 0;
	var spiderman = document.getElementsByClassName("movingSpiderman")[0], 
		web = document.getElementsByClassName("mainWeb")[0],
		fury = document.getElementsByClassName("mainNickFury")[0];

	window.addEventListener("load", function(){
		document.getElementsByClassName("hillffair")[0].style.top = "-500px";
		document.getElementsByClassName("nit")[0].style.top = "-500px";
		setTimeout(avengersUnite, 200);
	});

	function avengersUnite(){
		avengers[avengerCount].className = avengers[avengerCount].className.slice(0, avengers[avengerCount].className.indexOf("notUnited"));
		++avengerCount;

		if(avengerCount < 6){
			setTimeout(avengersUnite, 200);
		}

		else {
			//document.getElementsByClassName("hillffair")[0].className = "hillffair";
			document.getElementsByClassName("hillffair")[0].style.top = "0px";
			setTimeout(function(){
				//document.getElementsByClassName("nit")[0].className = "nit";
				document.getElementsByClassName("nit")[0].style.top = "0px";
				goSpidy();
				setTimeout(goFury, 1000);
			}, 200);
		}
	}

	var furyStat = 0;
	function goFury(){
		if(furyStat == 0){
			furyStat = 1;
			fury.className = "mainNickFury avengers final";
			setTimeout(goFury, 3000);
		}

		else {
			furyStat = 0;
			fury.className = "mainNickFury avengers default";
			setTimeout(goFury, 3000);
		}
	}

	var spidyStat = 0;
	function goSpidy(){
		//if(spidyStat == 0){
			spidyStat = 1;
			spiderman.className = "movingSpiderman avengers final";
			//setTimeout(goSpidy, 3000);
		//}

		/*else {
			spidyStat = 0;
			spiderman.className = "movingSpiderman avengers default";
			setTimeout(goSpidy, 3000);
		}*/
	}

	document.getElementsByClassName("aboutLink")[0].addEventListener("click", function(){
		scrollTo(0, window.innerHeight*3.5);
	});

	document.getElementsByClassName("sponsorLink")[0].addEventListener("click", function(){
		scrollTo(0, window.innerHeight*4.5);
	});

})();