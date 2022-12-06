const moogoose = require('mongoose');

moogoose.connect('mongodb://127.0.0.1:27017/antoan', {
    useNewUrlParser: true,
})


// const me = new New({
//     name:'Chong tham nhung',
//     newspaper: 'Thanh nien',
//     country: 'Viet Nam',
//     author: 'Duong'
// })

// me.save().then(()=>{
//     console.log(me);
// }). catch((error)=>{
//     console.log('Error', error);
// })

//Goal: Create a model for tasks 
//
//1. Define the model with description and completed fields
//2. Create a new instance of the model
//3. Save the model to the database
//4. Test your work!