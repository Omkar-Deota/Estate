// schema
const propertyModel = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  available: String,
});

module.exports = mongoose.model('Property', propertyModel);