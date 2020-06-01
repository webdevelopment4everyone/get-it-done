function getCurrentDate() {
  let date = new Date();

  let months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ]

  let month = months[date.getMonth()];
  let day = addOrdinalIndicator(date.getDate());
  //console.log("Month", month);
  //console.log("Date", day);
  //console.log(date);

  function addOrdinalIndicator(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        day = day + "st";
        break;
      case 2:
      case 22:
        day = day + "nd";
        break;
      case 3:
      case 23:
        day = day + "rd";
        break;
      default: day = day + "th";
    }
    return day;
  }

  //for(let i = 1; i < 32; i++) {
  //  console.log(addOrdinalIndicator(i));
  //}

  fullDate = `${month} ${day}`;
  return fullDate;
}

//console.log(getCurrentDate());
