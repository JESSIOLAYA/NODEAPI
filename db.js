const mongoose = require('mongoose');

const USER = 'sa';
const PASSWORD = 'sa';
const DATABASE_NAME = 'VENTAS';


const URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0.ntz7wrc.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;
mongoose.connect(URL)
.then(() => {
    console.log('Database connected!');
})
.catch((error)=> {
    console.log('Error connecting:', error);
});



// const bookings = mongoose.Schema({
//     first_name: String,
//     last_name: String,
//     address: String,
//     city: String
// });


// const Bookings = new mongoose.model('booking', bookings);

// const newbooking = new Bookings({
//     first_name: 'jessica',
//     last_name: 'Olaya',
//     address: 'Kennedy Norte',
//     city: 'Guayaquil'
// })
// .save()
// .then((b) => {
//     console.log('orden:', b);
// })
// .catch((error) => {
//     console.log('Error:', error);
// })
// Bookings.find({ first_name: 'Jessica'})
// .then((b) => {
//  console.log('orden:', b)
// })
// .catch((error) => {
//  console.log('Error:', error);
// })




