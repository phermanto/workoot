$(document).ready(function () {
//    $('#workout_today').append("something");
    var calendarId = "e7mroepihsenprdhvt2q97nk40@group.calendar.google.com";
    var url = "https://www.googleapis.com/calendar/v3/calendars/" + calendarId + "/events?callback=?";
    $.getJSON(url, function (data) {
            var a = data;
        }
    );

    $('#calendar').fullCalendar({
        events: 'https://www.google.com/calendar/feeds/e7mroepihsenprdhvt2q97nk40%40group.calendar.google.com/public/basic'
    })
    $('#workout_tabs').tabs();
    
});