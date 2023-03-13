import React from "react";
import DashBoardHome from "../Dashboard/DashBoardHome";
import { useNavigate, useRoutes } from "react-router-dom";
import DashHeader from "../Dashboard/DashHeader";
import styled from "styled-components";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const DashBoardRoutes = () => {
	let element = useRoutes([
		{
			path: "/dashboard",
			element: <DashBoardHome />,
		},
	]);
	return (
		<div>
			<DashHeader />
			<Wrapper>{element}</Wrapper>
		</div>
	);
};

export default DashBoardRoutes;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
