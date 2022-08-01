import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { login } from "../../actions/auth";

const Login = () => {
	const navigate = useNavigate()
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(data);
		login(data.email, data.password).then((response) => {
			console.log("response ====>", response)
			navigate("/")
		});
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
						<button type="button" className={styles.white_btn} onClick={() => navigate('/signup')}>
							Sign Up
						</button>
				</div>
			</div>
		</div>
	);
};

export default Login;