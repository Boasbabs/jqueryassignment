//THE JS SOLUTIONS WAS MODIFIED TO JQUERY.


 function q1() {
 	$("#para1").text("I am Id of para1");
 	 }

function q2() {
 	$(".class1").text("I am class1");
 	 }

function q3() {
	console.log($("p"));
}
function q4() {
	// body...
	$("#block1").css("background-color", "blue");
}

function questionFive() {
	$("#block2").css("font-size", "2.5em");
}
function mOver() {
	$("#block3").css("color","red");
}
function mOut() {
	$("#block3").css("color", "black");
	// body...
}
function hide() {
	$("#block4").css("visibility", "hidden");
}
function q8() {
	$(".box1").css("background-color", "green");
}
 function q9() {
	$(".box2").css("background-color", "blue");
 }
 function q11() {
 	$("<p>I got generated on the fly...</p>").insertAfter("#para2");
 }

 function q12() {
 	// var parent = document.getElementById("para3");
 	// var child = document.getElementById("para4");
 	$("#para4").remove();
 }

 function q14() {
 	// $("#box5").fadeIn("slow");
 	$("#box5").slideUp(2000).slideDown(2000);
 }
//channge the color of the div boxes
 function changeColor(element) {
 	$(element).toggleClass('blue');
 	//$(element).hasClass("blue") ? $(element).removeClass("blue") : $(element).addClass("blue");
 }
 function changeColor2(element) {
 	$(element).toggleClass("hotpink");
 }
 function changeColor3(element) {
 	$(element).toggleClass("lime");
 }