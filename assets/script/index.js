
$(document).ready(function() {

    // Extend Day.js with the relativeTime plugin
    dayjs.extend(window.dayjs_plugin_relativeTime);

    // display current date - Day, Month, Date
    function currentDate() {
        var today = dayjs().format('dddd, MMMM DD');
        $('#currentDay').text(today); 
    }



    function timeState() {
        const currentHr = dayjs().format('H')
        console.log(`current hr: ${currentHr}`)
        const timeblock = $('.time-block')

        timeblock.each(function () {
            var timeblockId = $(this).attr('id') 
            var textareaSibling = $(this).siblings('.timeslot').find('textarea');
            console.log(`textarea sibling of ${timeblockId}: ${textareaSibling}`)
            var blockHours = parseInt(timeblockId)

            if (currentHr == blockHours) {
                textareaSibling.removeClass('past')
                textareaSibling.removeClass('future')
                textareaSibling.addClass("present");
                textareaSibling.prop('disabled', false)
            }
            else if (currentHr > blockHours) {
                textareaSibling.removeClass('present')
                textareaSibling.removeClass('future')
                textareaSibling.addClass('past')
                textareaSibling.prop('disabled', true)
            } else {
                textareaSibling.removeClass('present')
                textareaSibling.removeClass('past')
                textareaSibling.addClass('future')
                textareaSibling.prop('disabled', false)
            }
        }) 
    }
    

    function loadData() {
      if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
        var nineAm = $("<p>" + localStorage["9am"] + "</p>");
        $("#nineAm").append(nineAm[0].innerText);
      } else {
        ("");
      }
      if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
        var tenAm = $("<p>" + localStorage["10am"] + "</p>");
        $("#tenAm").append(tenAm[0].innerText);
      } else {
        ("");
      }
      if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
        var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
        $("#elevenAm").append(elevenAm[0].innerText);
      } else {
        ("");
      }
      if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
        var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
        $("#twelvePm").append(twelvePm[0].innerText);
      } else {
        ("");
      }
      if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
        var onePm = $("<p>" + localStorage["1pm"] + "</p>");
        $("#onePm").append(onePm[0].innerText);
      } else {
        ("");
      }
      if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
        var twoPm = $("<p>" + localStorage["2pm"] + "</p>");
        $("#twoPm").append(twoPm[0].innerText);
      } else {
        ("");
      }
      if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
        var threePm = $("<p>" + localStorage["3pm"] + "</p>");
        $("#threePm").append(threePm[0].innerText);
      } else {
        ("");
      }
      if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
        var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
        $("#fourPm").append(fourPm[0].innerText);
      } else {
        ("");
      }
      if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
        var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
        $("#fivePm").append(fivePm[0].innerText);
      } else {
        ("");
      }
    }


    $(".saveBtn").on("click", function (event) {
        var calendarItem =
          event.target.parentElement.previousElementSibling.children[0].value;
        localStorage.setItem(event.target.attributes[0].value, calendarItem);
    });

    loadData()
    currentDate()
    timeState()
    

  })