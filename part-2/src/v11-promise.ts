const sendInvite = (f1: string, ...rest: string[]) => {
    rest.forEach((fr: string): void => console.log(fr))
}

sendInvite('Jamal', 'Salam', 'Gelam')