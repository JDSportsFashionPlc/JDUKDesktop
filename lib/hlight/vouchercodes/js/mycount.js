/*
* Basic Count Down to Date and Time
* Author: @mrwigster / trulycode.com
*/
(function (e) {
	e.fn.countdown = function (t, n) {
	function i() {
		eventDate = Date.parse(r.date) / 1e3;
		currentDate = Math.floor(e.now() / 1e3);
		if (eventDate <= currentDate) {
			n.call(this);
			clearInterval(interval)
		}
		sec = eventDate - currentDate;
		days = Math.floor(sec / 86400);
		sec -= days * 60 * 60 * 24;
		hrs = Math.floor(sec / 3600);
		sec -= hrs * 60 * 60;
		min = Math.floor(sec / 60);
		sec -= min * 60;
		days == 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
		hrs == 1 ? thisEl.find(".timeRefHours").text("hrs") : thisEl.find(".timeRefHrs").text("hrs");
		min == 1 ? thisEl.find(".timeRefMinutes").text("min") : thisEl.find(".timeRefMin").text("min");
		sec == 1 ? thisEl.find(".timeRefSeconds").text("sec") : thisEl.find(".timeRefSec").text("sec");
		if (r["format"] == "on") {
			days = String(days).length >= 2 ? days : "0" + days;
			hrs = String(hrs).length >= 2 ? hrs : "0" + hrs;
			min = String(min).length >= 2 ? min : "0" + min;
			sec = String(sec).length >= 2 ? sec : "0" + sec
		}
		if (!isNaN(eventDate)) {
			thisEl.find(".days").text(days);
			thisEl.find(".hours").text(hrs);
			thisEl.find(".minutes").text(min);
			thisEl.find(".seconds").text(sec)
		} else {
			alert("Invalid date. Example: 30 Tuesday 2013 15:50:00");
			clearInterval(interval)
		}
	}
	var thisEl = e(this);
	var r = {
		date: null,
		format: null
	};
	t && e.extend(r, t);
	i();
	interval = setInterval(i, 1e3)
	}
	})(jQuery);
	$(document).ready(function () {
	function e() {
		var e = new Date;
		e.setDate(e.getDate() + 60);
		dd = e.getDate();
		mm = e.getMonth() + 1;
		y = e.getFullYear();
		futureFormattedDate = mm + "/" + dd + "/" + y;
		return futureFormattedDate
	}
});