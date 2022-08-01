import styles from "./styles.module.css";
import { Navigate } from "react-router-dom";

const Mai = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const user = localStorage.getItem("token");

	if (!user) {
		return <Navigate to="/signup" replace />;
	}

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Mai;