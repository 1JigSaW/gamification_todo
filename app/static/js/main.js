function complete_task(clicked_id) {
	if (document.getElementById(clicked_id).style.textDecoration === 'none') {
		document.getElementById(clicked_id).style.textDecoration = "line-through";
	} else {
		document.getElementById(clicked_id).style.textDecoration = 'none';
	}
	let form = document.getElementById(clicked_id); // selecting the form

	form.addEventListener('submit', function(event) { // 1
	    event.preventDefault()
	    
	    let data = new FormData(); // 2
	    
	    data.append("title", document.getElementById('title').value)  
	    data.append("note", document.getElementById('note').value)
	    data.append("csrfmiddlewaretoken", '{{csrf_token}}') // 3
	    
	    axios.post('create_note/', data) // 4
	     .then(res => alert("Form Submitted")) // 5
	     .catch(errors => console.log(errors)) // 6

	})

}