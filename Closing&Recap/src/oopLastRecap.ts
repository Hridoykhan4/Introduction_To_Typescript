// abstract class UIElement {
//     constructor(protected id: string) {}

//     abstract render () : string

// }


// class Input extends UIElement {
//     constructor(id: string, private type: string, private placeholder : string) {
//         super(id)
//     }
//     render(): string {
//         return `<input type=${this.type} id=${this.id} name=${this.id} placeholder=${this.placeholder} />`
//     }
// }

// class Button extends UIElement {
//     constructor(id: string, private label: string) {
//         super(id)
//     }
//     render(): string {
//         return `
//         <button id=${this.id}>${this.label}</button>
//         `   
//     }
// }

// class Form extends UIElement {
//     // ei class er baire children er kono kaj nai so amra etak contructor e rakhtasi na
//     private children : UIElement[] = [];

//     appendChild(child : UIElement) {
//         this.children.push(child)    
//     }

//     render(): string {
//         const childrenHTML = this.children.map(child => child.render()).join('\n ')
//         return `<form id=${this.id}>\n ${childrenHTML} \n</form>`
//     }
// }



// const nameInput = new Input("name", "text", "Enter Your Name");
// const emailInput = new Input("email", "email", "Enter Your Email");
// const passwordInput = new Input("pass", "password", "Enter Your Password");
// const submitButton = new Button('submit-btn', "Submit")
// const formElement = new Form('login-form')



// formElement.appendChild(nameInput)
// formElement.appendChild(emailInput)
// formElement.appendChild(passwordInput)
// formElement.appendChild(submitButton)


// const rootElement = document.getElementById('root')
// if(rootElement) {
//     rootElement.innerHTML = formElement.render()
// }

// interface User {
//     id: string;
//     name: string;
//     email: string
// }

// interface OptionalUser {
//     id?: string;
//     name: string;
//     email?: string
// }

// type PartialUser = Partial<User>

// // const updateProfile = (id: string, data: OptionalUser) => {
// //     return ''    
// // }
// const updateProfile = (id: string, data: Partial<User>) => {
//     return ''    
// }

// updateProfile('101', {name: "Jamal"})

interface Config {
  apiKey?: string;
  timeOut?: number;
}

const initialize = (config : Required<Config>) => {}

// initialize({apiKey: '123123'})

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductOverview = Pick<Product, 'name' | 'description'>

const preview : ProductOverview = {
    description: "",
    name: ""
}

// Omit

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

type PublicEmployee = Omit<Employee, 'salary' | 'nid'>

const employee : PublicEmployee = {
    id: 21,
    name: 'Salam'
}


// Record

type Environment = 'development' | "staging"  | "production"

// interface IEnvironment {
//     development: string;
//     staging: string;
//     production: string;
// }

const apiURLs : Record<Environment, string> = {
     development: 'ss',
     production:"",
     staging: '',
    //  testing: ''
}