function truncate(str, maxLength = 20, ending = "...") {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength - ending.length) + ending;
    }
}
  
// Example usage in HTML
document.getElementById("demo").innerHTML = truncate("This is a longer string that needs to be truncated");  