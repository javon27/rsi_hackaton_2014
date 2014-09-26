	function validate(){
		var firstname = window.document.pfs.firstname.value;
		var lastname = window.document.pfs.lastname.value;
		var asuid = window.document.pfs.asuid.value;
		var username = window.document.pfs.username.value;
		var email = window.document.pfs.email.value;
		
		if(!emptyTest(firstname)){
			alert('Please provide the first name of the person you are adding to the system.');
			return false;
		}

		if(!emptyTest(lastname)){
			alert('Please provide the last name of the person you are adding to the system');
			return false;
		}
		if(!emptyTest(asuid)){
			alert('Please provide the ASU ID of the person you are adding to the system');
			return false;
		}

		if(!emptyTest(username)){
			alert('Please provide the username of the person you are adding to the system');
			return false;
		}

		if(!emptyTest(email)){
			alert('Please provide the email address of the person you are adding to the system');
			return false;
		}
		// }	// if(emptyTest(window.document.pfs.firstname.value);
		// 	alert('correct input');
		// 	return true;
		// }
		// else{
		// 	alert('Please provide the your first name');
		// 	return false;
		// }



		// if(window.document.crnSelection.Crn_Key.selectedIndex == 0){
		// 	alert('Please choose a CRN to see your course roster');
		// 	return false;
		// }

		// if(window.document.EAP.chooseStudent.selectedIndex==0){
		// 	alert('Please choose a student from the drop down menu before submitting.');
		// 	return false;
		// }
						
		// ebdChecked = window.document.EAP.EBD.checked;
		// if(ebdChecked){
		// 	var str = window.document.EAP.commentEBD.value;
		// 	var newStr = str.replace(" ", "");
		// 	var length = newStr.length;
		// 	if(newStr == 0){
		// 		alert('Please provide a comment in the \"Emotional Behavioral Displine\" section');
		// 		return false;	
		// 	}
		// }

		// var assistance1 = window.document.EAP.assistance1.checked;
		// var assistance2 = window.document.EAP.assistance2.checked;
		// var assistance3 = window.document.EAP.assistance3.checked;
		// var assistance4 = window.document.EAP.assistance4.checked;
		// var assistance5 = window.document.EAP.assistance5.checked;

		// var rec1checked = window.document.EAP.rec1.checked;  
		// var rec2checked = window.document.EAP.rec2.checked; 
		// var rec3checked = window.document.EAP.rec3.checked;
		// var rec4checked = window.document.EAP.drop.checked;
		// var rec5checked = window.document.EAP.action.checked;
						
		// var reason1checked = window.document.EAP.reason1.checked;
		// var reason2checked = window.document.EAP.reason2.checked;
		// var reason3checked = window.document.EAP.reason3.checked;

		// if(!reason1checked && !reason2checked && !reason3checked 
		// 	&& !rec1checked && !rec2checked && !rec3checked 
		// 	&& !rec4checked && !rec5checked && !assistance1
		// 	&& !assistance2 && !assistance3 && !assistance4
		// 	&& !assistance5 && !ebdChecked){
		// 	alert('Please make a selection.');
		// 	return false;
		// }
		
		// if(reason1checked || reason2checked || reason3checked){
		// 	if(!rec1checked && !rec2checked && !rec3checked && !rec4checked && !rec5checked){
		// 		alert('Because you selected a reason in the "Poor Academic Performance" section, a recommendation is required.  Please select a recommendation.');
		// 		return false;	
		// 	}
		// }

		// if(assistance5 || assistance1 || assistance2 || assistance3 || assistance4){
		// 	var str = window.document.EAP.commentAssistance.value;
		// 	var newStr = str.replace(" ", "");
		// 	var length = newStr.length;
		// 	if(newStr == 0){
		// 		alert('Please provide a comment in the \"Needs non-academic assistance\" section');
		// 		return false;	
		// 	}

		return true;
	}

	function emptyTest(mystring){
		if(!mystring.match(/\S/)){
			return false
		}
		else{
			return true;
		}
	}

	function confirmDelete(){
		var r = confirm("Are you sure that you want to delete the selected user?");
		if (r == true){
			return true
		}
		else{
		 	return false;
		}
	}

	function searchValidate(){
		var GPA = window.document.searchOptions.GPA.value;
		var HS_GPA = window.document.searchOptions.HS_GPA.value;
		var ACT_SCORE = window.document.searchOptions.ACT_SCORE.value;
		
		if(isNaN(GPA) == true){
			alert("Please enter a valid GPA.");
			return false;
		}
		else{
			return true;
		}

		if(isNaN(HS_GPA) == true){
			alert("Please enter a valid High School GPA.");
			return false;
		}
		else{
			return true;
		}

		if(isNaN(ACT_SCORE) == true){
			alert("Please enter a valid ACT score.");
			return false;
		}
		else{
			return true;
		}
	}



