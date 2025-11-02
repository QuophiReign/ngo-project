function animateValue(id, start, end, duration) {
    var obj = document.getElementById(id);
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
      current += increment;
      obj.textContent = "+" + current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  
  // Usage example: animateValue("counter", 0, 100, 2000);
  // Parameters: id of the element, start value, end value, duration in milliseconds
  animateValue("counter1", 0, 1200, 2000);
  animateValue("counter2", 0, 800, 2000);
  animateValue("counter3", 0, 5, 2000);
  