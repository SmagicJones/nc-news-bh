import {useEffect} from 'react'
import {fetchUsers} from '../utils/api.js';

const Login = ({user, setUser})=>{
//    console.log(user)

let isValidUser = false





  

   function handleSubmit(e){
    e.preventDefault();
    console.log(isValidUser)
    useEffect(()=>{
        fetchUsers().then(({users})=>{
            console.log(users)
            users.forEach(userInDatabase => {
                if (userInDatabase === user){
                       isValidUser = true
                        }
                })
        })
    },[])
   
   }


   

    return(
        <>
        <form id='comment-form' onSubmit={handleSubmit}>
        <fieldset>
        <legend>Please Login</legend>
        <label htmlFor="username">Enter your name: </label>
        <input id="username" type="text" name="username" value={user} onChange={(e)=>{setUser(e.target.value)}}/>
        <button>submit</button>
        </fieldset>
        </form>
        <p>You are logged in as:  {user}</p>
        </>
    )

}

export default Login;