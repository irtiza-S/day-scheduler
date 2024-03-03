$(document).ready(function() {

    // Extend Day.js with the relativeTime plugin
    dayjs.extend(window.dayjs_plugin_relativeTime);
    var today = dayjs().format('dddd, MMMM DD');
    $('#currentDay').text(today);

    // thought process: 
    //user enters into the text area
    //press the save btn - leading to whatever they've entered being saved to localstorage
    var buttons = $('.btn')
    console.log(buttons.children)
  });