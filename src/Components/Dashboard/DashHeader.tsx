import React from "react";
import styled from "styled-components";
import DashSiderBar from "./DashSiderBar";

const DashHeader = () => {
	return (
		<div>
			<Head>Dashboard header</Head>
			<Side>
				<DashSiderBar />
			</Side>
		</div>
	);
};

export default DashHeader;

const Side = styled.div``;
const Head = styled.div`
	height: 60px;
	width: 100%;
	background-color: black;
	color: white;
	position: fixed;
`;
