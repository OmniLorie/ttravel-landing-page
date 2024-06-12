const btn = document.getElementById('btn-btn')
btn.onclick = function(){
   alert('Wait, more locations coming soon')
}
const btn2 = document.getElementById('btn-header')
btn2.onclick = function()
   alert('The World of Travel')
}

//write a function that will take a user with firstname, lastname and return a full name;

function fullName(user) {
   return {
     ...user,
     fullName: '${user.firstname} ${user,lastname}'
    };
   }
   
   const user = {
   firstname: 'lorie',
   lastname: 'Osibe'
   }
   fullName(user);
   
   //Array map 
   const users = [
   {firstname: 'Michael', lastname: 'Hammond'},
   {firstname: 'Elon', lastname: 'Musk'},
   {firstname: 'Berry', lastname: 'Allen'},
   {firstname: 'Oliver', lastname: 'Queen'},
   {firstname: 'Will', lastname: 'Smith'},
   ]
   // users.map(fullName);
   
   //Square of numbers
   function square(number) {
     return number **2;
   }
   square(10);
   const numbers = [9, 8, 7, 6];
   numbers.map(square);
   
   //Array filter
   function isEven(number) {
     return number % 2 === 0;
   }
   isEven(6);
   numbers.filter(isEven);