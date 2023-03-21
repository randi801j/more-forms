import React,{ useState }from "react";

const Form = (props) => {

    const [firstname,setfirstname]= useState('');
    const [lastname, setlastname]=useState('');
    const [email, setemail]=useState('');
    const [password, setpassword]=useState('');
    const [confirm, setconfirm]=useState('');

    const handlefn= (e) =>{
        setfirstname(e.target.value);
    }
    const handleln= (e) =>{
        setlastname(e.target.value);
    }
    const handleemail= (e) =>{
        setemail(e.target.value);
    }
    const handlepassword= (e) =>{
        setpassword(e.target.value);
    }
    const handleconfirm= (e) =>{
        setconfirm(e.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" name="firstname" onChange={handlefn} />
                {
                    firstname.length <2 && firstname.length >0?
                    <p>First Name must be at least 2 characters</p>: null
                }
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" name="lastname" onChange={handleln}/>
                {
                    lastname.length <2 && lastname.length >0?
                    <p>Last Name must be at least 2 characters</p>: null
                }
                
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={handleemail}/>
                {
                    email.length <2 && email.length >0?
                    <p>Email must be at least 2 charactersh</p>: null
                }
                
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" onChange={handlepassword}/>
                {
                    password.length <7 && password.length >0?
                    <p>Password must be at least 8 characters</p>: null
                }
                
                <label htmlFor="confirm">Confirm Password:</label>
                <input type="text" name="confirm" onChange={handleconfirm}/>
                {
                    confirm !== password?
                    <p>Password Must Match</p>: null
                }
            </form>
            <div>
                <p>
                    <label> First Name:</label>{firstname}
                </p>
                <p>
                    <label> Last Name:</label>{lastname}
                </p>
                <p>
                    <label> Email:</label>{email}
                </p>
                <p>
                    <label> Password:</label>{password}
                </p>
                <p>
                    <label> Confirm Password:</label>{confirm}
                </p>
            </div>
        </div>
    )
}
export default Form;