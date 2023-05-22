const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (error) {
    console.log("Error: ", error);
    console.log("description: ",null);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("breed not found")
  } else {
    console.log("Error: ", error);
    console.log(data[0].description);
  }

});
};


module.exports = { fetchBreedDescription };