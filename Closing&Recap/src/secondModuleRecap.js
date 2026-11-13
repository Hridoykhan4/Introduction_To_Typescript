"use strict";
// // type id = number | string;
// // interface User {
// //   name: string;
// //   id: id; // type id abar interface e use kora jabe
// //   // role: Role
// //   // shorashori union bananor chance nai interface e
// //   role: "admin" | "manager" | "seeker";
// // }
// // const user : User = {
// //     id: '101',
// //     name : "Salam",
// //     role: 'manager'
// // }
// type Animal = {
//   species: string;
// }
// type Cat = Animal &  {
//     color: string
// }
// const cat : Cat = {
//     color: 'brown',
//     species: 'Hulo'
// }
// // console.log(cat);
// // Duplicate Identifier, merge hye jay interface e
// // type TEmployee = {
// //     name: string
// // }
// // type TEmployee = {
// //     id: 101
// // }
// // let something2 : unknown;
// // const num : number = 10;
// // something2 = num;
// // console.log(something2);
// // let nothing: void;
// // // const num : number = 10;
// // // Type 'number' is not assignable to type 'void'
// // // nothing = num;
// // let something3: unknown;
// // something3 = nothing;
// // console.log(something3);
// // interface User {
// //   name: string;
// // }
// // type loggedInUser = User | null
// // const currentUser : loggedInUser = {
// //     name: ""
// // }
// // const getError = (msg: string) : number => {
// //   throw new Error(msg);
// // };
// interface Config {
//   port?: number;
// }
// const config: Config = {
//   port: undefined,
// };
// const currentPort = config.port as undefined;
// console.log(currentPort);
const configuration = {
    port: 8080,
    prefix: "/api/v1",
};
const user = {
    success: true,
    statusCode: 200,
    data: {
        name: "Jamal",
    },
};
const fetchUser = async () => {
    const res = await fetch(`v1/api/users`);
    const data = (await res.json());
    return data.data;
};
const userdata = await fetchUser();
