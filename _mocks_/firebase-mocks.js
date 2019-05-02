const auth = () =>{
 return {
    createUserWithEmailAndPassword: (email,password) =>{
       return new Promise((resolve)=>{
           resolve('abc@test.la')
       })
    }
 }
}


const firebase = {
    auth: auth
}

export default jest.fn(()=>{
    return firebase;
})