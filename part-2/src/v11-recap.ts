interface User {
    name: string;
    phone:  string
}

interface ApiResponse <T>{
    data: T;
    success: boolean; 
    message: string
}

const fetchUser = async () : Promise<User | undefined> => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = (await res.json()) as User[]
        if(!res.ok) {
            throw new Error(`Failed to fetch User data`)
        }
        console.log(data);
        return data[0]
    }
    catch(err) {
        console.log(err);
        if(err instanceof Error) {
            console.log(err.message);
        }
        else{
            console.error('Something went wrong')
        }
    }
    
}

const userData = await fetchUser();
if(userData) {
    console.log(userData.name, userData.phone);
}