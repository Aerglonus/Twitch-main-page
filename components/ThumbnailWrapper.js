import styled from "styled-components";

export const Container = styled.div`
	postion: relative;
	display: inline-block;
	background-color: #9147ff;

	&:before {
		content: "";
		display: block;
		background-color: #9147ff;
		width: 8px;
		height: 8px;
		position: absolute;
		transition: all 0.15s ease;
		top: 0;
		left: 0;
		transform-origin: top left;
		transform: rotate(-45deg) scale(0);
	}
	&:after {
		content: "";
		display: block;
		background-color: #9147ff;
		width: 8px;
		height: 8px;
		position: absolute;
		transition: all 0.15s ease;
		right: 0;
		bottom: 0;
		transform-origin: bottom right;
		transform: rotate(45deg) scale(0);
	}
	&:hover {
		.stream_thumbnail {
			transform: translate(6px, -6px);
		}
		&:before {
			transform: rotate(-45deg) scale(1);
		}
		&:after {
			transform: rotate(45deg) scale(1);
		}
	}
`;
