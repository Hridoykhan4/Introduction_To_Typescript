abstract class UIElement {
    constructor(protected id: string) {}
    abstract render() : string;
}

class Input extends UIElement {
    constructor(id: string, private type: string, private placeholder: string){
        super(id)
    }

    render(): string {
        return `<input type=${this.type} id=${this.id} name=${this.id} placeholder=${this.placeholder} />`
    }
}

class Button extends UIElement {

    constructor(id: string, private label: string) {
        super(id)
    }

    render(): string {
        return `<button id=${this.id}>${this.label}</button>`
    }   
}

class Form extends UIElement {

    /// Kora ja na korao ta, coz ami parent er exact constructor use kortasi 
    // constructor(id: string){
    //     super(id)
    // }

    // class k amra type korte pari
    private children  : UIElement[] = []


    // btn, input etc egula ami children e dhukabo
    // UIElement e amar class definition & also type definition 


    appendChild(child: UIElement) {
        this.children.push(child)
    }

    render(): string {
        // amra object dekhte pacchi, actual string format e nai

        const childrenHTML =  this.children.map(child => child.render()).join('\n ')
        // console.log(childrenHTML);

        return `<form id=${this.id} style="border: 2px solid #ccc; padding: 20px; display: flex; flex-direction: column ; max-width: 300px; border-radius: 10px; gap: 5px">
  \n ${childrenHTML} \n
        </form>`
    }
}


const nameInput = new Input('name', 'text',  'Enter Your Name');
const emailInput = new Input('email', 'email',  'Enter Your Email');
const passwordInput = new Input('pass', 'password',  'Enter Your Password');
const submitButton = new Button('submit-btn', 'Submit')

const formElement = new Form('Login Now!')
formElement.appendChild(nameInput)
formElement.appendChild(emailInput)
formElement.appendChild(passwordInput)
formElement.appendChild(submitButton)
// console.log(emailInput.render());
// console.log(passwordInput.render());
// console.log(submitButton.render());

console.log(formElement.render());

const rootElement = document.getElementById('root')
if(rootElement) {
    rootElement.innerHTML = formElement.render()
}