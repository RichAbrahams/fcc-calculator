$(document).ready(function(finish) {

  var stored = "";
  var current = "";
  var operator = "";

  $(".number").click(function() {
    input = $(this).attr("value");
    current += input;
    $('.calcScreen').html(current);
  });

  $(".operator").click(function() {
    opVal = $(this).attr("value");
    if (current === "" && stored === "" && opVal == "-") {
      current += opVal;
    } else {
      output = (stored) + operator + current;
      output = eval(output);
      output = output.toFixed(6);
      output = Number(output);
      stored = output;
      current = "";
      operator = "";
      $('.calcScreen').html(output);
      switch (opVal) {
        case "x":
          operator = "*";
          break;
        case "÷":
          operator = "/";
          break;
        default:
          operator = $(this).attr("value");
      }
    }
  });

  $(".dec_place").click(function() {
    hasDec = current.indexOf(".");
    if (hasDec == -1) {
      current += ".";
    }
  });

  $(".allClear").click(function() {
    stored = "";
    current = "";
    operator = "";
    $('.calcScreen').html('');
  });

  $(".clearLast").click(function() {
    current = "";
  });

  $(".percent").click(function() {
    if (stored === "") {
      $('.calcScreen').html('Error');
      stored = "";
      current = "";
      operator = "";
    } else {
      current = (stored / 100) * current;
    }
  });

  $(".equals").click(function() {
    output = (stored) + operator + current;
    output = eval(output);
    output = output.toFixed(6);
    output = Number(output);
    stored = output;
    current = "";
    operator = "";
    $('.calcScreen').html(output);
  });

  window.onerror = function() {
    $('.calcScreen').html('Error');
    stored = "";
    current = "";
    operator = "";
  };

});
