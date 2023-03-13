import React from "react";
import { Navigate } from "react-router-dom";
import decode from "jwt-decode";
import { user } from "../UserData";
const PrivateRoutes = ({ children }: any) => {
	// const user: any = {};

	const decoder: any = decode(user?.token);

	if (decoder?.name) {
		return children;
	} else {
		<Navigate to='/' replace />;
	}
};

export default PrivateRoutes;
