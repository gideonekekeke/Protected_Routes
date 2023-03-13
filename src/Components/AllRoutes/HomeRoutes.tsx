import decode from "jwt-decode";
import React, { useEffect } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import HomeScreen from "../HomeScreen";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";
import { user } from "../UserData";

const HomeRoutes = () => {
	const navigate = useNavigate();
	const decoder: any = decode(user?.token);

	useEffect(() => {
		if (decoder?.name) {
			navigate("/dashboard", { replace: true });
		}
	}, []);

	let element = useRoutes([
		{
			path: "/",
			element: <HomeScreen />,
		},
	]);
	return (
		<>
			{decoder?.name ? null : <Header />}
			{element}
			{decoder?.name ? null : <Footer />}
		</>
	);
};

export default HomeRoutes;
