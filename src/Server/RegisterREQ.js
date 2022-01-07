
import MovieDB from './MovieDB';


const RegisterREQ = async (props)=> {
  
    const user= {
      username:props.username,
      firstName:props.firstName,
      lastName:props.lastName,
      email:props.email,
      password:props.password,
      role:props.role,
    }
    console.log('data sent is: ',user)
  await MovieDB.post("/sign-up", user)
  .then((response) => {
    console.log(response.data);
    return response.data.status
  })
  .catch((e) => {
    console.log(e);
    return
  });
}

export default RegisterREQ;
