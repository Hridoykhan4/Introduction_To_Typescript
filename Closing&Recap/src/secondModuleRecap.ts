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
} as const;
// configuration.port = 201

// const print2 = (value : string | number) => {
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

// console.log(print2('1292'));

// const printAll = (x : number | number[] | null) => {
//     if(x && typeof x === 'object') {
//         for (const element of x) {
//             console.log(element);
//         }
//     }
//     else if(typeof x === 'number') {
//         console.log(x);
//     }
//     else {
//         console.log('');
//     }
// }

// // printAll([2,3,_, 4])

// const compare = (x : string | number, y: number | boolean) => {
//     if(x === y) {
//         console.log(x + y);
//     }
// }
// compare(10, 10)

// type Bird = { fly: () => void };
// type Fish = { swim: () => void };

// const move = (animal : Bird | Fish) => {
//     if('fly' in animal) {
//     animal.fly()
//     return
//     }
//     animal.swim()
// }

// const wrapInArray = <T> (value: T) : T[] => {
//     return [value]
// }

// function wrap <T> (value: T) : T[] {
//     return [value]
// }

// const numArr = wrap(101)
// numArr.map(n => n.toFixed())

interface UserResponse {
  // data er bhetore jekono kisu hoite pare, er moddhe user er shape or blog er shape hoite pare

  name: string;
  role?: string;
}

interface BlogResponse {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  success: boolean;
  statusCode?: number;
  data: T;
}

const user: ApiResponse<UserResponse> = {
  success: true,
  statusCode: 200,
  data: {
    name: "Jamal",
  },
};

interface User {
  name: string;
  role: string;
}

interface ApiResponse <T> {
    data: T;
    message: string;
    success: boolean;
}

const fetchUser = async () => {
  const res = await fetch(`v1/api/users`);
  const data = (await res.json()) as ApiResponse<User>;
  return data.data
};

const userdata = await fetchUser();
