// var generateName = require('sillyname');

import generateName from "sillyname"
import superHero,{randomSuperhero} from "superheroes"
var sillyName = generateName();
var superheroname=superHero
var randSuprHero=randomSuperhero()
console.log("My name is "+ sillyName)
console.log(`Super Hero name in Order ${superheroname.toString().split(',')[0]}`)
console.log(`Random Superhero ${randSuprHero}`)