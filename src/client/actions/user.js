import axios from "axios";

export const signup = async (firstName, lastName, email, password) => {
    try {
        console.log("SUBMIT REQUEST")
        const response = await axios.post("http://localhost:8080/api/users", {firstName, lastName, email, password});
        console.log("GET RESPONSE")
    } catch (error) {
        return error.response.data.message;
    }
}