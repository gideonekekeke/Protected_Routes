import React from "react";
import DashBoardRoutes from "./Components/AllRoutes/DashBoardRoutes";
import HomeRoutes from "./Components/AllRoutes/HomeRoutes";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";

const App = () => {
	return (
		<div>
			<HomeRoutes />

			<PrivateRoutes>
				<DashBoardRoutes />
			</PrivateRoutes>
		</div>
	);
};

export default App;
