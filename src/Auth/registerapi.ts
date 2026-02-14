import axios from 'axios';
export default async function Register(Values: object){
    const respone = await axios.post("http://localhost:3000/api/register", Values)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
    return respone
}