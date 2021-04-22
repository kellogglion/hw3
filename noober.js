// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  // console.log(ride)

  // CODE BEGINS

// Present ride data in readable format

// console.log(`Noober X Passenger:  ${ride.passengerDetails.first} ${ride.passengerDetails.last} - ${ride.passengerDetails.phoneNumber}`)
// console.log(`Pickup at ${ride.pickupLocation.address}, ${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}`)
// console.log(`Dropoff at ${ride.dropoffLocation.address}, ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}`)

//Create simpler variables for each data point

  let FirstName = ride.passengerDetails.first 
  let LastName = ride.passengerDetails.last 
  let Phone = ride.passengerDetails.phoneNumber

  let PickAddress = ride.pickupLocation.address 
  let PickCity = ride.pickupLocation.city 
  let PickState = ride.pickupLocation.state 
  let PickZip = ride.pickupLocation.zip 

  let DropAddress = ride.dropoffLocation.address 
  let DropCity = ride.dropoffLocation.city 
  let DropState = ride.dropoffLocation.state
  let DropZip = ride.dropoffLocation.zip


// console.log(`Noober X Passenger: ${FirstName} ${LastName} - ${Phone}. Pickup at ${PickAddress}, ${PickCity}, ${PickState} ${PickZip}. Dropoff at ${DropAddress}, ${DropCity}, ${DropState} ${DropZip}.`)


// Write code to store what level of service the passenger requires.

let Purple = ride.purpleRequested
let NumberPassengers = ride.numberOfPassengers


// console.log(Purple)
// console.log(NumberPassengers)

let Car

if(Purple == true){
  Car = 'Noober Purple'
}else if(NumberPassengers > 3){
  Car = 'Noober XL'
}else{
  Car = 'Noober X'
}


// console.log(Car)

// Use data to create final detailed ride description.

console.log(`${Car} Passenger: ${FirstName} ${LastName} - ${Phone}.
 
Pickup at ${PickAddress}, ${PickCity}, ${PickState} ${PickZip}. 
Dropoff at ${DropAddress}, ${DropCity}, ${DropState} ${DropZip}.`)



//  CODE ENDS HERE


})
