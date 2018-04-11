// Do not change any of the function names


const makeCat = {
  name:'Sam',
  age:'50',
  meow: function (){
    return 'Meow!';
  }
  };
  makeCat.meow();
     // create a new object with a name property with the value set to the name argument
    // add an age property to the object with the value set to the age argument
   // add a method called meow that returns the string 'Meow!'
  // return the object


 
   
  const object = {
    x: 1,
    y: 2,
  };
  const updatedObject = {
    x: 1,
    y: 2,
    z: null,
  };
  function addProperty() {
  return updatedObject;
  }
  addProperty(object, 'z');
     // add the property to the object with a value of null
    // return the object
   // note: the property name is NOT 'property'.
  //The name is the value of the argument called property (a string)



 
  invokeMethod(object, method),
  function() {
    const object = {
      x: 0,
      incrementX: function(){
        this.x++;
      }
    };
    invokeMethod(object, 'incrementX');
  };
   // method is a string that contains the name of a method on the object
  // invoke this method
 // nothing needs to be returned



 const mysteryNumberObject = {
  mysteryNumber: -5,
  multiplyMysteryNumberByFive: function(){
  return this.mysteryNumber * 5;
  }
  };
mysteryNumberObject.multiplyMysteryNumberByFive();
 // mysteryNumberObject has a property called mysteryNumber
// multiply the mysteryNumber property by 5 and return the product



const object = {
  x: 1,
  y: 2,
  z: null,
};
  function deleteProperty () {
    delete object.z;
    return object;
  }
    deleteProperty();




    const user = {
      name: 'Ben',
      email: 'ben@lambdaschool.com',
      password: 'correcthorsebatterystaple',
    };
  
    const user2 = {
      name: 'Austen',
      email: 'austen@lambdaschool.com',
      password: 'password',
   };
    
    function newUser(name, email, password) {
     const newUser = user2;
     return newUser;
    }
      newUser(user2.name, user2.email, user2.password);
   
   // create a new object with properties matching the arguments passed in.
  // return the new object


  user1 = {
    username: 'SunJieMing',
    email: 'ben@lambdaschool.com',
  };
  
  user2 = {
    username: 'Austen',
    email: null,
  };
  
  user3 = {
    username: 'Ryan',
  };
  
   function hasEmail() {
     if (user3.email){
      return true;
    } else 
      return false;
   }
     hasEmail(user3);
  
   // return true if the user has a value for the property 'email'
   // otherwise return false


   const obj = {
    x: true,
  };
  function hasProperty() {
    const prop = obj.x;
    if (prop) {
      return true;
    } else 
      return false;
  }
     
  
  const obj = {
    x: true,
  };
  function hasProperty() {
    if (obj.x) {
      return true;
   } else 
      return false;
  }
   hasProperty(obj, 'x');
   //return true if the object has the value of the property argument
  //property is a string
 // otherwise return false



const user = {
    password: 'I love js!',
  }; 
function verifyPassword() {
  if(user.password==='I love js!'){
    return true;
  } else 
    return false;
} 
    verifyPassword(user, 'password');
  // check to see if the provided password matches the password property on the 
 //user object, return true if they match
//otherwise return false



const user = {
  password: 'I love js!',
};
  function updatePassword() {
    user.password = 'I love js even more!';
    return user;
}
 updatePassword(user, 'I love js even more!');
// replace the existing password on the user object with the value of newPassword
// return the object


const user = { 
    friends: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'], 
  }; 
function addFriend(user, newFriend) {
    newFriend = user.friends;
    newFriend.push('Shay');
  return user.friends;
  }
    addFriend(user, 'Shay');
   // user has a property called friends that is an array
  // add newFriend to the end of the friends array
 // return the user object


function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
}

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};
