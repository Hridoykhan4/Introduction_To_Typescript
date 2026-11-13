type Address = {
  streetName: string;
  holdingNumber: number;
};

type UserName = string;


type TUser = {
    name: UserName,
    id: number,
    address: Address
}

const newUser: TUser = {
    name: 'salam',
    id: 212,
    address: {
        holdingNumber: 1212,
        streetName: ""
    }

}