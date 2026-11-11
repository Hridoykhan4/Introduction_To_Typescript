// Type of
// let x = 123;

// console.log(typeof x);

// Type Guard

// const print = (value : string | number) => {
//     if(typeof value === 'string') {
//         return value.toUpperCase()
//     }
//     else if(typeof value === 'number') {
//         return value
//     }
//     else {
//         // ekhane value never set hye gese
//         return value
//     }
// }

// console.log(print(22));

// Truthiness
// ekhane ami null dite partasina as a fallback, coz interface e eTa kaj kore na
// interface User {
//     name: string;
//     address: {
//         street: string
//     }
// } | null

// type User = {
//   name: string;
//   address: {
//     street: string;
//   };
// } | null;

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "Mir",
  address: {
    street: "ABC",
  },      
};


const showAddress = (user: User) => {
    // user is possibly 
    // console.log(user.address.street);

    // shobshomoy user thakbe kono guarantee nai, so ekhane narrowing korte hbe
    if(user && user.address) {


      // user.address is possibly undefined jokhon optional chaining dibo

      console.log(user.address.street);
      return;
    }
    throw new Error('User not found ')
    // console.log(user!.address.street);

}

// showAddress(loggedInUser)


