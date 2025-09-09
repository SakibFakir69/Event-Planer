
// use dry , ssot , oop , 


$(document).ready(function () {
  console.log("loaded");

  // calender
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });




    calendar.render();
  });



})