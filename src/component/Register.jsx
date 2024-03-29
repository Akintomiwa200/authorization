import Button from '../App'

import NavBar from './NavBar'
const Register = ()=>{
    return(
        <>

            <NavBar/> 
            <div>
                <form>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="*********"/>
                   
                    <Button  name="Login"/>
                </form>
            </div>       
            
        </>
    )
}

export default Register