const userEnteredDate = "12/20/1989";
const parts = userEnteredDate.split("/");

const userEnteredDateISO = parts[2] + "-" + parts[0] + "-" + parts[1];
const userEnteredDateObj = new Date(userEnteredDateISO + "T00:00:00Z");
