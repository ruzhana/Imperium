import { Route, Routes } from "react-router-dom";
import Mai from "../client/comp/Mai/index";
import Signup from "../client/comp/Signup/index";
import Login from "../client/comp/Login/index";

function Pa() {
	const user = localStorage.getItem("token");
	console.log(user);

	return (
		<Routes>
			<Route path="/" exact element={<Mai />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
		</Routes>
	);
}

export default Pa;
