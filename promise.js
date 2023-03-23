//simple Idea

const promise = new Promise((resolve, Reject)=>{
    let sum = 1+3;
    
    if (sum == 3) {
        resolve('Success');
    } else {
        Reject('Failed');
    }
})

promise.then((message) => {
    console.log('This is success resolve' + message);
}).catch((message) => {
    console.log('This is error reject' + message);
})

