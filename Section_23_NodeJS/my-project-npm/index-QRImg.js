/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'

inquirer
  .prompt([
    {"message":"what is ur name: ","name":"Name"}
  ])
  .then((answers) => {
    console.log(`hello ${answers["Name"]}`);
    var qr_img = qr.image(answers["Name"]);
    qr_img.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error");
    } else {
      console.log("Other error")
    }
  });