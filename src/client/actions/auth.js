import axios from "axios";

export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:8080/api/auth", {email, password});
        localStorage.setItem('token', response.data);
        console.log("LOGIN");
        return response;  
    } catch (error) {
        console.log("ERROR");
        console.log(error);
    }
}