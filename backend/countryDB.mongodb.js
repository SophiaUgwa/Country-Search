/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

use('countryDB'); // replace with your actual database name

db.getCollection('countries').insertMany([
  { name: "Albania" },
  { name: "Andorra" },
  { name: "Australia" },
  { name: "Brazil" },
  { name: "Belgium" },
  { name: "Canada" },
  { name: "China" },
  { name: "France" },
  { name: "Germany" },
  { name: "India" },
  { name: "Indonesia" },
  { name: "Ireland" },
  { name: "Italy" },
  { name: "Japan" },
  { name: "Kenya" },
  { name: "Luxembourg" },
  { name: "Mexico" },
  { name: "New Zealand" },
  { name: "Nigeria" },
  { name: "Portugal" },
  { name: "Russia" },
  { name: "South Africa" },
  { name: "South Korea" },
  { name: "Spain" },
  { name: "Sweden" },
  { name: "Thailand" },
  { name: "Ukraine" },
  { name: "United Kingdom" },
  { name: "United States of America" },
  { name: "Vietnam" },
  { name: "Zambia" }
]);

db.getCollection('countries').find
db.getCollection('countries').find({}, { name: 1, _id: 0 });

