(function(){
	var fields = document.getElementsByTagName("input"), i,
		emailPattern = new RegExp("[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,5}");

	for(i = 0; i < fields.length; i++){
		if(fields[i].type.toLowerCase() === 'text'){
			fields[i].defaultVal = fields[i].value;
			fields[i].addEventListener("focus", function(){
				if(this.value == this.defaultVal){
					this.value = "";
				}
			});

			fields[i].addEventListener("blur", function(){
				if(this.value.trim() == "")
					this.value = this.defaultVal;
			});
		}
	}

	function validate(form){
		var status = true;

		name = form.name.value.trim(),
		email = form.email.value.trim(),
		city = form.city.value.trim(),
		college = form.college.value.trim(),
		phone = form.phone.value.trim(),
		gender = form.gender.value.trim(),
		 year = -1, events = [];

		//captcha = grecaptcha.getResponse();

		//console.log(captcha);

		var genders = document.getElementsByName("gender");

		var i;
		for(i = 0; i < genders.length; i++){
			if(genders[i].checked){
				gender = genders[i].value;
				break;
			}
		}

		var years = document.getElementsByName("year");

		for(i = 0; i < years.length; i++){
			if(years[i].checked){
				year = years[i].value;
				break;
			}
		}

		var eventCheck = document.getElementsByName("events");

		for(i = 0; i < eventCheck.length; i++){
			if(eventCheck[i].checked){
				events.push(eventCheck[i].value);
			}
		}

		if(name === form.name.defaultVal || name.length < 3){
			document.getElementsByClassName("warningName")[0].className = "warningName visible";
			status = false;
		} else {
			document.getElementsByClassName("warningName")[0].className = "warningName";
		}

		if(city === form.city.defaultVal || city.length < 2){
			document.getElementsByClassName("warningCity")[0].className = "warningCity visible";
			status = false;
		} else {
			document.getElementsByClassName("warningCity")[0].className = "warningCity";
		}

		if(college === form.college.defaultVal || college.length < 2){
			document.getElementsByClassName("warningCollege")[0].className = "warningCollege visible";
			status = false;
		} else {
			document.getElementsByClassName("warningCollege")[0].className = "warningCollege";
		}

		if(phone === form.phone.defaultVal || phone.length != 10){
			document.getElementsByClassName("warningPhone")[0].className = "warningPhone visible";
			status = false;
		} else {
			document.getElementsByClassName("warningPhone")[0].className = "warningPhone";
		}

		if(year === -1 || Number(year) != Number(year) || Number(year) < 0 || Number(year) > 5){
			document.getElementsByClassName("warningYear")[0].className = "warningYear visible";
			status = false;
		} else {
			document.getElementsByClassName("warningYear")[0].className = "warningYear";
		}

		if(events.length == 0){
			document.getElementsByClassName("warningEvent")[0].className = "warningEvent visible";
			status = false;
		} else {
			document.getElementsByClassName("warningEvent")[0].className = "warningEvent";
		}

		if(gender === form.gender.defaultVal || gender.length < 2){
			document.getElementsByClassName("warningGender")[0].className = "warningGender visible";
			status = false;
		} else {
			document.getElementsByClassName("warningGender")[0].className = "warningGender";
		}

		if(!(emailPattern.test(email) && email.indexOf(" ") == -1)){
			document.getElementsByClassName("warningEmail")[0].className = "warningEmail visible";
			status = false;
		} else {
			document.getElementsByClassName("warningEmail")[0].className = "warningEmail";
		}

		//if(captcha.length == 0){
			//document.getElementsByClassName("captchaNotice")[0].innerHTML = "Fill out the captcha!";
		//}

		return status;
	}

	document.getElementsByTagName("form")[0].addEventListener("submit", function(e){
		var res = validate(this);
    console.log(res);
		if(res){
			document.getElementsByClassName("reg")[0].disabled = true;
			document.getElementsByClassName("reg")[0].value = "Registering...";

			var objectToSend = {
				"name": name,
				"members": gender,
				"email": email,
				"city": city,
				"college": college,
				"phone": phone,
				"year": year,
				"events": events
			};
      console.log(objectToSend);
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("POST", "/adduser");
			xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xmlhttp.send(JSON.stringify(objectToSend));

			xmlhttp.onreadystatechange = function(){
				if(xmlhttp.readyState == 4){
					var res = JSON.parse(xmlhttp.responseText);
					console.log(res);
					if(res==500){
					  document.getElementsByClassName("darkLayer")[0].className = "darkLayer shown";
						document.getElementsByClassName("notice")[0].className = "notice shown";
						document.getElementsByClassName("msgNotice")[0].innerHTML = "You cannot be Registered";
						document.getElementsByClassName("noticeContent")[0].className = "noticeContent shown";
					}
					else{
				  document.getElementsByClassName("darkLayer")[0].className = "darkLayer shown";
					document.getElementsByClassName("notice")[0].className = "notice shown";
					document.getElementsByClassName("msgNotice")[0].innerHTML = "You Are Now Registered";
					document.getElementsByClassName("noticeContent")[0].className = "noticeContent shown";
				}
				}
			}
		}

		document.getElementsByClassName("cross")[0].addEventListener("click", function(){
			document.getElementsByClassName("darkLayer")[0].className = "darkLayer";
			document.getElementsByClassName("notice")[0].className = "notice";
			document.getElementsByClassName("noticeContent")[0].className = "noticeContent";
			document.getElementsByClassName("reg")[0].disabled = false;
			document.getElementsByClassName("reg")[0].value = "Register";
			setTimeout(function(){
				window.location="/";
			},0);
			grecaptcha.reset();
			});

		e.preventDefault();
	});
})();
