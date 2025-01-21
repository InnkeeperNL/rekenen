function count_object(object){
	var count = 0;
	for (var k in object) {
	    if (object.hasOwnProperty(k)) {
	       ++count;
	    }
	}
	return count;
}

function round_by_percent(number){

  if(Math.floor(number) < number)
  {
    if((number - Math.floor(number) > Math.random()))
    {
      number = Math.ceil(number);
    }
    else
    {
      number = Math.floor(number);
    }
  }

  return number;
}

function get_highest_key_in_object(object){
	var highest_key = 0;
	$.each(object, function(key, item) {
		highest_key = key;
	});
	return parseInt(highest_key);
}

function get_random_key_from_object(object){
  var object_count = count_object(object);
  var chosen_object = Math.floor(Math.random() * object_count) + 1;
  var chosen_key;
  $.each(object, function(key, item){
    chosen_object --;
    if(chosen_object == 0){
      chosen_key = key;
    }
  });
  return chosen_key;
}

function get_random_key_from_object_based_on_num_value(object){
  var object_count = 0;
  var found_one = false;
  $.each(object, function(key, item){
    object_count += item;
  });
  var chosen_object = Math.floor(Math.random() * object_count) + 1;
  var chosen_key;
  $.each(object, function(key, item){
    chosen_object -= item;
    if(chosen_object <= 0 && chosen_object > item * -1 && found_one == false){
      chosen_key = key;
      found_one = true;
    }
  });
  return chosen_key;
}

function match_array_values(array_1, array_2){
  var matched = false;
  $.each(array_1, function(key_1, value_1){
    $.each(array_2, function(key_2, value_2){
      if(value_1 == value_2)
      {
        matched = true;
      }
    });
  });
  return matched;
};

function objecttoarray(myObj){
	var array = $.map(myObj, function(value, index) {
	    return [value];
	});
	return array;
}


function copyobject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

sortObj = function(obj, type, caseSensitive) {
  var temp_array = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!caseSensitive) {
        key = (key['toLowerCase'] ? key.toLowerCase() : key);
      }
      temp_array.push(key);
    }
  }
  if (typeof type === 'function') {
    temp_array.sort(type);
  } else if (type === 'value') {
    temp_array.sort(function(a,b) {
      var x = obj[a];
      var y = obj[b];
      if (!caseSensitive) {
        x = (x['toLowerCase'] ? x.toLowerCase() : x);
        y = (y['toLowerCase'] ? y.toLowerCase() : y);
      }
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  } else {
    temp_array.sort();
  }
  var temp_obj = {};
  for (var i=0; i<temp_array.length; i++) {
    temp_obj[temp_array[i]] = obj[temp_array[i]];
  }
  return temp_obj;
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function get_percent_color(var_1, var_2){
  var percent = Math.floor(var_1 / var_2 * 100);
  var red = Math.floor(400 - (percent * 2.5));
  var green = Math.floor(150 + (percent * 1));
  if(green < 150){green = 150;}
  var color = 'rgba(' + red + ',' + green + ',150,0.7)';
  if(var_1 == 0)
  {
    color = 'rgba(250,50,50,1)';
  }
  if(var_1 >= var_2)
  {
    color = 'rgba(100,220,100,1)';
  }
  return color;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}