const addPersonToDB = (data, callback) => {
    console.log('Processing data.... Destructuring.....');

    // Destructuring: Extract `name`, `city`, and `contact` from the `data` object
    let { name, city, contact } = data;  

    // Transform the extracted data into the correct structure
    let structData = {
        fname: name.split(' ')[0],  // Extract first name
        lname: name.split(' ')[1],  // Extract last name
        city: city,  
        countryCode: contact.split('-')[0],  // Extract country code
        phoneNo: contact.split('-')[1]  // Extract phone number
    }

    // Call the callback function (which will insert the structured data into the DB)
    callback(structData);
}

// Function that simulates inserting data into a database
const dbInsert = (data) => {
    console.log('Data added to DB');
    console.log(data);
}

// Calling `addPersonToDB` with user details and passing `dbInsert` as a callback
addPersonToDB({
    name: 'harry potter',
    city: 'london',
    contact: '44-775869978'
}, dbInsert);
