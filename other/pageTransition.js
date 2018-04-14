(function(){
	var menuitems = document.getElementsByClassName("menuItem"), i = 0, active = 0, item, flag = 1;

	var bodies = document.getElementsByClassName("content");

	for(i = 0; i < menuitems.length; i++){
		item = menuitems[i];
		item.menuid = i;

		item.addEventListener("click", function(e){
			var id = this.menuid;
			if(id != active && flag){
				bodies[active].className = bodies[active].className.slice(0, bodies[active].className.indexOf("active"));
				bodies[active].className = bodies[active].className + " transition";
				bodies[id].className = bodies[id].className.slice(0, bodies[id].className.indexOf("inactive"));
				bodies[id].className = bodies[id].className + " active";

				flag = 0;
				setTimeout(function(){
					bodies[active].className = bodies[active].className.slice(0, bodies[active].className.indexOf("transition"));
					bodies[active].className = bodies[active].className + " inactive";
					active = id;
					flag = 1;
				}, 900);

			}
		});
	}
})();