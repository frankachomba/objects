const person ={
firstName :"FRANK",
LastName : "ACHOMBA",
age : 30,
eMail : "frankachomba@gmail.com",
}
const fullName = person.firstName + " " + person.LastName

console.log(fullName)



let birthday = person.age +1
if(birthday){
    display = `happy birthday ${person.firstName}, you are now ${birthday}, years old`

console.log(display)
}else{
    console.log("not a new age")
}

const addressBook = {
    contact : [ "paul", "frank", "tony", "luke"],
}
const addcontact = {
    addcontact:addressBook.contact.push("clement", "tobi")
    
}

console.log(addressBook.contact)
console.log(addcontact)
let fullname;
let reply;
let findcontact =addressBook.contact 
if(findcontact){
let responce = prompt("what is your name")
if(responce === "paul"){
    fullname= "paul okoye"
    reply = alert(`your name is ${fullname} you are now ${birthday}, years old`)
}if(responce === "frank"){
    fullname = "frank Achomba"
    reply = alert(`your name is ${fullname} you are now ${birthday}, years old`)
}if(responce === "tony"){
    fullname='Tony Blair'
    reply = alert(`your name is ${fullname}you are now ${birthday}, years old`)
}if(responce === "luke"){
    fullname ="Luke Abi"
    reply = alert(`your name is ${fullname} you are now ${birthday}, years old`)
}else{
    reply = alert('contact not found')
}alert('thank you')
    
}