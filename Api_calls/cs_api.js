/**
 * Call the API
 * https://api.restful-api.dev/objects
 * that will give you list of all the gadgets that we sell on our 
 * platform
 * [
  {
    "id": "1",
    "name": "Google Pixel 6 Pro",
    "data": {
      "color": "Cloudy White",
      "capacity": "128 GB"
    }
  },
  {
    "id": "2",
    "name": "Apple iPhone 12 Mini, 256GB, Blue",
    "data": null
  }
]

-- create a function to display all record in following structure 
{id,name,color,price} <-- display these 3 properties from objects
-- create a function to display records based on particular id
getRecordById(4/5/6) 
if you do not have any matching record then display "Invalid ID " in the terminal 
*/

// Function to fetch and display all records in the required format
const displayAllRecords = () => {
    fetch('https://api.restful-api.dev/objects')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            console.log({
                id: item.id,
                name: item.name,
                color: item.data?.color || "N/A", // Handle null values
                price: item.data?.price || "N/A"  // Handle missing price field
            });
        });
    })
    .catch(error => console.log("Error fetching data:", error));
};

// Function to fetch and display a record based on a given ID
const getRecordById = (id) => {
    fetch('https://api.restful-api.dev/objects')
    .then(response => response.json())
    .then(data => {
        let record = data.find(item => item.id === id.toString()); // Convert to string for comparison
        if (record) {
            console.log({
                id: record.id,
                name: record.name,
                color: record.data?.color || "N/A",
                price: record.data?.price || "N/A"
            });
        } else {
            console.log("Invalid ID");
        }
    })
    .catch(error => console.log("Error fetching data:", error));
};

// Call functions
displayAllRecords();  // Fetch and display all records
getRecordById(4);  // Fetch and display a record by ID (example)


// BY using async wait

const displayrec=async(id)=>{
    try {
        const re= await fetch('https://api.restful-api.dev/objects');
        const data= await re.json();
    }
    catch(err){
        
    }
}