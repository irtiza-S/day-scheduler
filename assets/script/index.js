
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
        console.log(currentHr)
        const timeblock = $('.time-block')
    
        timeblock.each(function () {
            var timeblockId = $(this).attr('id') 
            var textareaSibling = $(this).siblings('.time-slot').find('textarea');
            console.log(timeblockId)
            var blockHours = parseInt(timeblockId)

            if (currentHr == blockHours) {
                $(this).removeClass('past')
                $(this).removeClass('future')
                $(this).addClass("present");
                textareaSibling.removeClass('past')
                textareaSibling.removeClass('future')
                textareaSibling.addClass("present");
                textareaSibling.prop('disabled', false)
            }
            else if (currentHr > blockHours) {
                $(this).removeClass('present')
                $(this).removeClass('future')
                $(this).addClass('past')
                textareaSibling.removeClass('present')
                textareaSibling.removeClass('future')
                textareaSibling.addClass('past')
                textareaSibling.prop('disabled', true)
            } else {
                $(this).removeClass('present')
                $(this).removeClass('past')
                $(this).addClass('future')
                textareaSibling.removeClass('present')
                textareaSibling.removeClass('past')
                textareaSibling.addClass('future')
                textareaSibling.prop('disabled', false)
            }
        }) 
    }
    
    currentDate()
    timeState()
  });