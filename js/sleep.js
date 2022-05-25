// Fastclick
window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);



// open links without opening Safari when added to the homscreen
var a = document.getElementsByTagName("a");
for (var i=0 ;i < a.length; i++)
{
	a[i].onclick=function() {
		window.location=this.getAttribute("href");
		return false;
	};
}

// Provides the link, this has to be done in JS to prevent iOS webapps from switching to Safari
function toSleepNow() {
	window.location = 'sleepnow.html';
}
function toSleepAt() {
	window.location = 'sleepat.html';
}

// sleepnow
var sleepnow = function() {
	var sleepnow = [];
	var html = "";
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes() + 14;
		if (minutes > 60) {
			minutes = minutes - 60;
			hour = hour + 1;
		}
	for (var i = 0; i < 6; i++) {
		if (minutes < 30) {
			minutes = minutes + 30;
		} else {
			minutes = minutes - 30;
			hour = hour + 1;
		}
		hour = hour + 1;
		if (hour >= 24) {
			hour = hour - 24;
		}
		if (minutes < 10 && hour === 0) {
			sleepnow[i] = "0" + hour + ":0" + minutes;
		} else  if (minutes < 10) {
			sleepnow[i] = hour + ":0" + minutes;
		} else  if (hour === 0) {
			sleepnow[i] = "0" + hour + ":" + minutes;
		} else {
			sleepnow[i] = hour + ":" + minutes;
		}
	}
	for (var j = sleepnow.length-1; j >= 0; j--) {
		var times = sleepnow[j];
		html += "<p>"  + times + "<\/p>";
	}
	document.getElementById("sleepnow").innerHTML = html;
};

// sleepat
var sleepat = function() {
	var sleepat = [];
	var html = "";
	var hour = document.sleepatform.kHour.value;
	var minutes = document.sleepatform.kMinute.value;

	if (hour < 0 || hour > 23 || minutes < 0 || minutes > 59) {
		html = '<img src=\"https:\/\/gimmebar-assets.s3.amazonaws.com\/4e9dfdd63b335.gif\">';
	} else {
		for (var i = 0; i < 6; i++) {
			minutes = minutes - 30;
			hour = hour - 1;
			if (minutes < 0) {
				hour = hour - 1;
				minutes = 60 + minutes;
			}
			if (hour < 0) {
				hour = hour + 24;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			sleepat[i] = hour + ":" + minutes;
		}
		sleepat.splice(0, 2);
		for (var j = sleepat.length-1; j >= 0; j--) {
			var times = sleepat[j];
			html += "<p>"  + times + "<\/p>";
		}
		html = "<p>Considering that the average human takes around 7~14 minutes to fall asleep you should already be sleeping by" + html;
	}
	document.getElementById("sleepat").innerHTML = html;
	document.getElementById('sleepat').scrollIntoView();
};