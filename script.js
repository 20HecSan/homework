$(document).ready(function () {
$('.saveBtn').on('click', function () {

  var value = $(this).siblings(".description").value();
  var time = $(this).parent().attribute("id");

  localStorage.setItem(time,value);
})

});






$(function hourUpdate () {
 var currentHour = dayjs().hour();

$(".time-block").each(function() {


if (blockHour < currentHour){
 $(this).addClass('past');
} else if (blockHour = = currentHour) {
$(this).removeClass("past");
$(this).addClassClass("present");
} else {
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");
}
});


hourUpdate();

setInterval(hourUpdate, 12000);

 $("hour-9 .description".value(localStorage).getItem('hour-9'));
 $("hour-10 .description".value(localStorage).getItem('hour-10'));
 $("hour-11 .description".value(localStorage).getItem('hour-11'));
 $("hour-12 .description".value(localStorage).getItem('hour-12'));
 $("hour-1 .description".value(localStorage).getItem('hour-1'));
 $("hour-2 .description".value(localStorage).getItem('hour-2'));
 $("hour-3 .description".value(localStorage).getItem('hour-3'));
 $("hour-4 .description".value(localStorage).getItem('hour-4'));
 $("hour-5 .description".value(localStorage).getItem('hour-5'));
 

 $("#currentDay").text(dayjs().format("dddd,MMMM D, YYYY"));
});