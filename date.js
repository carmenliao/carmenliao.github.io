  const date = new Date();
  var d = date.getDate();
  var yy = date.getFullYear();
  const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

  document.write('<h4 class = "actual-date">' + d  + " " + monthNames[date.getMonth()] + " " + yy + '</h4>');
