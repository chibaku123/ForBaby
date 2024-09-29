 
function showTime() { 
	
	var currentTimeString = `<label>Tên Của Baby:</label>
		 <input type="text" id="username" name="username" placeholder="Nhập tên nè" required>
		<button id="button1" style="color: red;">Tiếp Tục</button>
		 `
	document.getElementById("show").innerHTML=currentTimeString;
	
	document.getElementById("button1").addEventListener("click", function() {
		var name =  document.getElementById("username").value;

		console.log(name)
		if(name == ""){
			alert("Nhập tên vào baby ơi")
		}
		else{
			localStorage.setItem("username", name);
			window.location = "index1.html"
		}
	
		
		
	  }); 
	window.setTimeout("showTime()", 100000); 
} 