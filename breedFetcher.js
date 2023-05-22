const request = require('request');
const arg = process.argv[2]
//console.log("request library: ", request)
//const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {

  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if(error) {
    console.log("Error: ", error); 
    console.log("description: ",null)
  } 
  const data = JSON.parse(body);
if (data.length === 0) {
  //console.log("breed not found");
  console.log("breed not found");
} else {
    console.log("Error: ", error); 
    console.log(data[0]["description"]);
  };
  //console.log('body:', body); // Print the HTML for the Google homepage.

  //console.log(typeof body)

// if (data.length === 0) {
//   //console.log("breed not found");
//   console.log("breed not found");
// } else {
//     console.log(data);
//   }
  //console.log(typeof data);
  //console.log("data first entry:", data[0]["weight"])
}); 
//};


//module.exports = { fetchBreedDescription };