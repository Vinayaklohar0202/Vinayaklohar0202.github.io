<<<<<<< HEAD
function sendMail() {
	var params = {
	  from_name: document.getElementById("name").value,
	  email_id: document.getElementById("email").value,
	  message: document.getElementById("message").value,
	};
  
	const serviceID = "service_yiveiqr";
	const templateID = "template_mq97tzc";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("email").value = "";
		  document.getElementById("message").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!")
  
	  })
	  .catch(err=>console.log(err));
  
=======
function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  email: document.getElementById("email").value,
	  message: document.getElementById("message").value,
	};
  
	const serviceID = "service_yiveiqr";
	const templateID = "template_mq97tzc";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("email").value = "";
		  document.getElementById("message").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!")
  
	  })
	  .catch(err=>console.log(err));
  
>>>>>>> 2870fe552ab2467db50edce70af76cfb76d1ccec
  }