import Button from '../App'

import NavBar from './NavBar'
const Login = ()=>{
    return(
        <>

            <NavBar/> 
            <div>
                <form>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="*********"/>
                    <Button  name="Login"/>
                </form>
            </div>       
            
        </>
    )
}

export default Login