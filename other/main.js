(function(){
	// Resposive Skrollr
	function adjust(){
		var width = window.innerWidth,
			height = window.innerHeight;

		if(width >= 750){
			var s = skrollr.init({
				forceHeight: false
			});
		}

		else {
			var s = skrollr.init();
			s.destroy();
		}
	}

	var adjustObj = {
		match: function(){
			adjust();
		},
		unmatch: function(){
			adjust();
		}
	};

	var menuState = 0, menu = document.getElementsByClassName("menu")[0],
		navIcon = document.getElementsByClassName("navIcon")[0],
		menuItemImg = Array.prototype.slice.call(document.getElementsByClassName("menuItemImg")),
		menuItemName = Array.prototype.slice.call(document.getElementsByClassName("menuItemName"));

	var scrollNotice = document.getElementsByClassName("scrollNotice")[0],
		scrollNoticecount = 0;

	var menuitems = document.getElementsByClassName("menuItem"), i = 0, active = 0, item, flag = 1;
	var bodies = document.getElementsByClassName("content");

	for(i = 0; i < menuitems.length; i++){
		item = menuitems[i];
		item.menuid = i;

		item.addEventListener("click", function(e){
			var id = this.menuid;
			toggleMenu();
			if(id != active && flag){
				setTimeout(function(){
					bodies[active].className = bodies[active].className.slice(0, bodies[active].className.indexOf("active"));
					bodies[active].className = bodies[active].className + " transition";

					if(active == 0) {
						document.getElementsByClassName("intro")[0].className = "intro absoluteIntro";
					}

					else if(active == 3){
						document.getElementsByClassName("contactDetails")[0].className = "contactDetails outsideTop";
						document.getElementsByClassName("lightRay")[0].className = "lightRay";
						document.getElementsByClassName("batmanTitle")[0].className = "batmanTitle";
					}

					else if(active == 2){
						bodies[active].getElementsByClassName("left")[0].className = "left invisible";
						bodies[active].getElementsByClassName("title")[0].className = "title invisible";
						var gallerySvg = Array.prototype.slice.call(bodies[active].getElementsByClassName("galleryPage"));
						gallerySvg.forEach(function(item){
							item.setAttribute('stroke-dashoffset', 50);
						});
					}

					bodies[id].className = bodies[id].className.slice(0, bodies[id].className.indexOf("inactive"));
					bodies[id].className = bodies[id].className + " active";

					flag = 0;
					setTimeout(function(){
						if(id == 0){
							document.getElementsByClassName("intro")[0].className = "intro fixedIntro";
						}

						else if(id == 3){
							contactTransition();
						}

						else if(id == 2){
							bodies[id].getElementsByClassName("left")[0].className = "left visible";
							bodies[id].getElementsByClassName("title")[0].className = "title visible";
							var gallerySvg = Array.prototype.slice.call(bodies[id].getElementsByClassName("galleryPage"));
							gallerySvg.forEach(function(item){
								item.setAttribute('stroke-dashoffset', 0);
							});
						}

						bodies[active].className = bodies[active].className.slice(0, bodies[active].className.indexOf("transition"));
						bodies[active].className = bodies[active].className + " inactive";

						active = id;
						flag = 1;
					}, 400);
				}, 400);
			}
		});
	}

	function toggleMenu(){
		if(menuState == 0){
			menuState = 1;
			menu.className = "menu visible";
			navIcon.className = "navIcon clicked";

			//menuItemImg[0].getElementsByTagName('path')[0].setAttribute('stroke-dashoffset', 0);
			menuItemImg.forEach(function(item){
				item.className = "menuItemImg inview";
			});

			menuItemName.forEach(function(item){
				item.className = "menuItemName inview";
			});

			//document.getElementsByClassName("menuItemRegister")[0].className = "menuItemRegister inview";
		}

		else{

			menuItemImg.forEach(function(item){
				item.className = "menuItemImg notinview";
			});

			menuItemName.forEach(function(item){
				item.className = "menuItemName notinview";
			});

		//	document.getElementsByClassName("menuItemRegister")[0].className = "menuItemRegister";
			setTimeout(function(){
				menu.className = "menu invisible";
				navIcon.className = "navIcon notClicked";
			}, 300);
			 menuState = 0;
		}
	}
	navIcon.addEventListener("click", toggleMenu, false);

	enquire.register("screen and (min-width: 750px)", adjustObj, false);


	window.addEventListener("load", function(){
		setTimeout(function(){
			document.getElementsByClassName("progress")[0].style.display = "none";
			document.getElementsByClassName("content")[0].className = "content introBody active";
		}, 300);
	});

})();
