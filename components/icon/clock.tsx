import React from 'react';
import { IconProps } from '@/types/icons';

const ClockIcon: React.FC<IconProps> = (props) => {
	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath="url(#clip0_340_451)">
				<path
					d="M10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20ZM10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667ZM14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667H10.8333V5C10.8333 4.53917 10.46 4.16667 10 4.16667C9.54 4.16667 9.16667 4.53917 9.16667 5V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10Z"
					fill="#75819A"
				/>
			</g>
			<defs>
				<clipPath id="clip0_340_451">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default ClockIcon;
