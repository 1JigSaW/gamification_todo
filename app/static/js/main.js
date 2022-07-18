function complete_task(clicked_id) {
	if (document.getElementById(clicked_id).style.textDecoration === 'none') {
		
		document.getElementById(clicked_id).style.textDecoration = "line-through";
	} else {
		document.getElementById(clicked_id).style.textDecoration = 'none';
	}
}