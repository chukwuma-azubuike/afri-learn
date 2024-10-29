import React from 'react';
import { IconProps } from '@/types/icons';

const QuestionIndexIcon: React.FC<IconProps> = (props) => {
	return (
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<rect x="1" y="1" width="28" height="28" rx="5" fill="white" />
			<rect x="1" y="1" width="28" height="28" rx="5" stroke="#989CAD" strokeWidth="2" />
		</svg>
	);
};

export default QuestionIndexIcon;
