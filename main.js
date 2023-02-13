// EXERCISE #1
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

// output each of the values to your terminal using dot notation.
console.log(wardrobe.height)
console.log(wardrobe.manufacturer)
console.log(wardrobe.contents)
console.log(wardrobe.depth)
console.log(wardrobe.depth)
console.log(wardrobe.width)

wardrobe.material = "Cedar"

console.log(wardrobe)


//////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE #2

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Use dot notation to output all of the dimensions of the Empire State Building to the terminal.
console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)

// Use square bracket notation to output the remaining 5 properties to the terminal. 
// Create 5 variables first with the keys as their values. Use those variables to look up the values.

let address = empireStateBuilding['address']
let constructionDate = empireStateBuilding['constructionDate']
let cost = empireStateBuilding['cost']
let owner = empireStateBuilding['owner']
let architect = empireStateBuilding['architect']

console.log('the address is ' + address)
console.log('the construction date was ' + constructionDate)
console.log('the cost was ' + cost)
console.log('the owner is ' + owner)
console.log('the architect was ' + architect)


//////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE #3

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// Output the names of the part-time instructors 
// followed by the names of the full-time instructors 

console.log(nashvilleSoftwareSchool.instructors.fullTime)
console.log(nashvilleSoftwareSchool.instructors.partTime)

// Output only Andy and Zoe in the terminal.
console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])

