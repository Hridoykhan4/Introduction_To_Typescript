// ami ja dibo amak array te wrap kore dibe

// const arr : Array<string> = ['jamal']

// ei value Ta k type korte hbe, amar value te jekono kisu ashte pare
// const wrapInArray = (value: number | string | boolean) => {
//     return [value] 
// }

// Amra ei function k reuasable kori, so here come generic 
const wrapInArray = <T> (value: T) : T => {
    return [value] 
}

const strArr = wrapInArray<string>('ABC')
const numArr = wrapInArray(123)
const boolArr = wrapInArray(true) //ekhane issue hcche ami jodi union e miss kori taw jhamela


// Type any     
//Property toUpperCase does not exist on type number
// numArr.map(n => n.toUpperCase())
// console.log(strArr.map((n) => n.toLowerCase()));

// Function r type k generic banacchi ekhane

// interface UserResponse {
//     // data er bhetore jekono kisu hoite pare, er moddhe user er shape or blog er shape hoite pare
//     data: {
//         name: string;
//         role: string
//     }
//     success: boolean;
//     statusCode: number; 
// }

// interface BlogResponse {
//     data: {
//         title: string;
//         description: string;
//         date: string
//     };
//     success: boolean;
//     statusCode: number
// }


interface User{
    // data er bhetore jekono kisu hoite pare, er moddhe user er shape or blog er shape hoite pare
    name: string;
    role: string
}

interface Blog { 
        title: string;
        description: string;
        date: string
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number
}


// Just user er type Ta paThai dicchi
type UserResponse = ApiResponse<User>
type BlogResponse = ApiResponse<Blog>
// generic er moddhe amra Blog er interface Ta


const user: ApiResponse<User> = {
    // data er bhetorer shape ki hbe sheta amra generic er moddhe shorashori paThai dite pari   
    data: {
        name: 'Salam',
        role: "admin"
    },
    statusCode: 200,
    success: true
}

// const userRes : UserResponse = {
//     data: {
//         name: 'Jamal',
//         role: 'admin'
//     },
//     statusCode: 200,
//     success: true

// }

// const blogRes : BlogResponse = {
//     success: true,
//     statusCode: 200,
//     data: {
//         title: "News",
//         description: "Hasina is KOT",
//         date: '12-12-2027'
//     }
// }

// console.log(userRes, blogRes);





/* Amader ekhane repetition hcche I mean success, statuscode , data o hcche shape Ta ek2 different
amake success, statusCode dui jaygay dekha lagtasena
hoytw amar user er type dorkar hy or blog er ami api interface diye manage kore felbo, apitype er purata type er dorkar nai

*/