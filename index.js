//Comparing Dates

const userEnteredDate = "12/20/1989";
const parts = userEnteredDate.split("/");

const userEnteredDateISO = parts[2] + "-" + parts[0] + "-" + parts[1];
const userEnteredDateObj = new Date(userEnteredDateISO + "T00:00:00Z");

const dateFromAPI = new Date("1989-12-20T00:00:00Z");

const result = userEnteredDateObj.getTime() == dateFromAPI.getTime(); // true

//This also works if you don’t specify the time since that will default to midnight (i.e., 00:00:00Z):
const userEnteredDate = new Date("1989-12-20");
const dateFromAPI = new Date("1989-12-20T00:00:00Z");
const result = userEnteredDate.getTime() == dateFromAPI.getTime(); // true

//JavaScript provides a neat Date.UTC() function that you can use to get the UTC time stamp of a date. We extract the components from the date and pass them to the function.

const userEnteredDate = new Date("12/20/1989");
const userEnteredDateTimeStamp = Date.UTC(
  userEnteredDate.getFullYear(),
  userEnteredDate.getMonth(),
  userEnteredDate.getDate(),
  0,
  0,
  0
);

const dateFromAPI = new Date("1989-12-20T00:00:00Z");
const result = userEnteredDateTimeStamp == dateFromAPI.getTime(); // true



// Finding the Difference Between Two Dates
//

