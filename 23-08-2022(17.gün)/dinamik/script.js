document
.getElementById("startDate")
.setAttribute("min", new Date().toISOString().split("T")[0]);

document
.getElementById("endDate")
.setAttribute("min", new Date().toISOString().split("T")[0]);

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 7);
              
document
.getElementById("startDate")
.setAttribute("max", tomorrow.toISOString().split("T")[0]);

document
.getElementById("endDate")
.setAttribute("max", tomorrow.toISOString().split("T")[0]);