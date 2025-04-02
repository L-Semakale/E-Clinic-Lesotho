const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://e-clinic:cWUR7RPKuJ0bwVcg@e-clinic.w5bpv.mongodb.net/?retryWrites=true&w=majority&appName=e-clinic";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected!"))
.catch(err => console.error("MongoDB Connection Error:", err));

module.exports = mongoose;
