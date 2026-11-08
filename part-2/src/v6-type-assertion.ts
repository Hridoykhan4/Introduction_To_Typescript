// * Type assertion
//  "as" syntax

type Status = "pending" | "approved" | "rejected";

const someStatus : string = 'pending'

const showStatus = (status: Status) => {
  console.log("Your current application status is ", status);
};

// string type Ta k amra Status er jekono ekTa diye assert kore dicchi, So amra ekhane core types er type sheTak amra assert kore literal types er moddhe niye ashsi
// showStatus((someStatus as Status));


// non-null assertion

interface Config {
    port?: number
}

const config :Config = {
    port: 5000
}

/* Type 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'
  jehetu optional disi eijnne
  */

//   Ami 100 % sure ekhane number ashbe, !  / as number sign use krbo

// const currentPort : number = config.port! 
const currentPort : number = config.port as number

// constant assertion

// readonly

/* const configuration: {
    readonly port: 8080;
    readonly prefix: "/api/v1";
} */

    // Lockdown hoye gese readonly
const configuration = {
    port: 8080,
    prefix: "/api/v1"
} as const
