const mongoose = require('mongoose')



mongoose.connect(process.env.MONGO_URL, {
    // urlencodedParser:true,
    // urlNew

}).then(() => {
    console.log(`database connection established`);
}).catch((err) => {
    console.log(`Connection is not established due to error: ${err}`);
})