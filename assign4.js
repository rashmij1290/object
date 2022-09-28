// const person={
//     name:"john",
//     jobTitle:"Developer",
//     email:"almabetter.com",
//     isVerified:false   
// }
// console.log(person.name);
// console.log(person.isVerified);
// person.isVerified=true;
// delete person.name;
// person.firstName="John";
// person.lastName ="Snow";
// console.log(person);

// const userDetails = { 
//     name:{
//       first:"Rashmi",Last:"Joshi"},
//     jobTitle:"Job seeker",
//     email:{work:"rashmij1290@gmail.com",personal:"rashmij1290@gmail.com"},
//     status:{isOnline: true, isVerified: false}

// }
// userDetails.isProMember=false;
// console.log(userDetails);

const userActivity3 = { name:"Rahul",
                       jobTitle:"JS Instructor@almabetter.com",
                       work:"rahul@microsoft.com", 
                       region:"Hyderabad" 
                      }
const {name,jobTitle,work} = userActivity3;
console.log(name+" "+jobTitle+" "+work);