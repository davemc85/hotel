use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "David McAllister",
    email: "bigdave@codeclan.com",
    status: true
  },
  {
    name: "Lindsey",
    email: "lindsey@codeclan.com",
    status: true
  },
  {
    name: "Darren Shankland",
    email: "darren@codeclan.com",
    status: true
  }
]);