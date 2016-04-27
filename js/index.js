$(document).ready(function(finish) {

  var stored = "";
  var current = "";
  var operator = "";

// number click controller

  $(".number").click(function() {
    input = $(this).attr("value");
    current += input;
    $('.calcScreen').html(current);
  });

// operator + - ÷ * controller

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

// decimal place controller

  $(".dec_place").click(function() {
    hasDec = current.indexOf(".");
    if (hasDec == -1) {
      current += ".";
    }
  });

// AC button controller

  $(".allClear").click(function() {
    stored = "";
    current = "";
    operator = "";
    $('.calcScreen').html('');
  });

// CE button controller

  $(".clearLast").click(function() {
    current = "";
  });

// percent button controller

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

// equals button controller

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

// error fallback funtion

  window.onerror = function() {
    $('.calcScreen').html('Error');
    stored = "";
    current = "";
    operator = "";
  };

});
