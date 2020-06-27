// Initialize database (ADD DATA)
let config = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
};
// addadatbase.initializeApp(config);

// Reference messages to our database
// let messagesRef = adddatabase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(event){
  event.preventDefault();

  // Get values
  let name = getInputVal('name');
  let stock = getInputVal('stock');
  let amountInvested = getInputVal('invested');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let message = getInputVal('message');

  // Save message
  saveMessage(name, stock, email, amountInvested, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to database
function saveMessage(name, stock, email, amountInvested, phone, message){
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    stock:stock,
    amountInvested:amountInvested,
    email:email,
    phone:phone,
    message:message
  });
}
