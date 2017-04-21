function changeColour(newColour)
{
	document.body.bgColor = newColour;
} // end of function changeColour(newColour)

function openWindow()
{
   // filename, internal name, characteristics
   myWindow = window.open("index.html", "window1", "width=350, height=500, resizable=yes");
   myWindow.moveTo(350, 100);
} // end of function openWindow

function displayDate()
{
	var currentDate = new Date();
	alert("The current date (in default format) is \n" + currentDate + ".");
} // end of function displayDate()

function displayISODate()
{
   var currentDate = new Date();
   
   var month = currentDate.getMonth();
   month++; // because getMonth() returns a value from 0-11
   if (month < 10) month = "0" + month;
   
   var date = currentDate.getDate();
   if (date < 10) date = "0" + date;
   
   var formattedDate = currentDate.getFullYear() + "-" + month + "-" + date;
   alert("The current date (in ISO format) is \n" + formattedDate + ".");
} // end of function displayISODate()

function displayLocalDate()
{
   var currentDate = new Date().toLocaleString();
   alert("The current date (in local format) is \n" + currentDate + ".");
} // end of function displayLocalDate()

function changeParagraphStyle(newStyle)
{
	var element = document.getElementById("mainParagraph");
	if (newStyle == "knockout")
		element.setAttribute("style", "background: grey; color: lightblue; padding: 1em;");
	else
		element.setAttribute("style", "background: white; color: black; padding: 0;");
	// for IE: element.style.cssText = "background: black; color: white; padding: 1em;";
} // end of function changeParagraphStyle()

function ChangeParagraphStyle(newStyle)
{
	var element = document.getElementById("otherMainParagraph");
	if (newStyle == "knockout")
		element.setAttribute("style", "background: black; color: green; padding: 1em;");
	else
		element.setAttribute("style", "background: white; color: black; padding: 0;");
	// for IE: element.style.cssText = "background: black; color: white; padding: 1em;";
} // end of function changeParagraphStyle()
