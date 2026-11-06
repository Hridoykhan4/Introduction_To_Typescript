// * Type assertion
//  "as" syntax

type Status = "pending" | 'approved' | 'rejected';

const showStatus = (status : Status) => {
    console.log('Your current application status is ', status);
}


// non-null assertion



// contant assertion
