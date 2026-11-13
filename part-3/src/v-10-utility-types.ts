// Utility Types

//*partial

interface User {
  id: string;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

// interface OptionalUser {
//     id?: string;
//     name: string;
//     email: string
// }

// We ca use partial utility to manage another interface with optional data
// Partial --- > Make all properties in T optional
const updateProfile = (id: string, date: Partial<User>) => {
  // console.log(date);
};

/* 
Type 
 is missing the following properties from type 
 :
id
name
*/
updateProfile("292", { email: "asa" });

// Required, polar opposite of Partial
interface Config {
  apiKey?: string;
  timeOut?: number;
}

// Make all properties in T required
const initialize = (config: Required<Config>) => {};

initialize({ apiKey: "12312931231", timeOut: 300 });

//* Pick utility class, name description amar lagbe preview banabo, mane only name , desc pick korsi
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// 2 Ta argument ney, 1st hcche je interface theke pick korte chacchi sheTa pass korbo & second argument e oi property gula nibo
type ProductPreview = Pick<Product, "name" | "description">;

// we can make it optional but
const preview: ProductPreview = {
  name: "ABC",
  description: "EFG",
};

// Omit

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
  id: 403,
  name: "Bob",
  // Sensitive info omit korbo
  // nid: '23421412',
  // salary: 20
};

//* Record,
type Environment = "development" | "staging" | "production";

// ei environment ki ki type hote pare, ei union type diye amra ekTa record create kore felte pari
// interface IEnvironment {
//     development: string,
//     staging: string,
//     production: string
// }

// const apiUrls : IEnvironment= {
//     development: "http://localhost:4000",
//     staging: "http://localhost:4000",
//     production: "http://localhost:4000"
// }

const apiUrls: Record<Environment, string> = {
  development: "http://localhost:4000",
  staging: "http://localhost:4000",
  production: "http://localhost:4000",
  // Object literal may only specify known properties, and 'testing' does not exist in type 'Record<Environment, string>
  //   testing: "",
};
