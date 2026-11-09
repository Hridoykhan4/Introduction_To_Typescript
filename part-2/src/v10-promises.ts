// Applying generic type to handle promise
// promise holo ekTa placeholder, 

interface User {
    name: string
    role: string
}

interface ApiResponse<T> {
    data: T,
    success: boolean
    statusCode: number,
    message: string
}

// Amra promise er generic type Ta return type hishebe diye dite pari
// return type hobe promise jeTa promise er data resolve hye User er data hye jabe
const fetchUser = async () : Promise<User | undefined> => {

    try {
        const res = await fetch('/api/v1/some-endpoint');
        // const data = await res.json()
        // amra api response type er data py User type er na, data: any hye ase
    
        const data =  (await res.json()) as ApiResponse<User>
    
        if(!res.ok || !data.success) {
            throw new Error(`Failed to Fetch User Data: ${data.message}`);
        }

        // So amra data k assertion kore dicchi
        return data.data
    }
    catch(err) {
        if(err instanceof Error){
            console.error(err.message);
        }
        else {
            console.error('Something went wrong')
        }
    }   

}

// const userData: Promise<Response>
const userData = await fetchUser()
if(userData) {
    console.log(userData.name);
}
