'use client';

import { IQuestionScore } from '@/types/questions';
import { Card, CardContent } from './card';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type IStatisticCardProps = IQuestionScore;

const StatisticCard: React.FC<IStatisticCardProps> = ({ percentage, score, total, title, ...props }) => {
	return (
		<Card className="w-full" {...props}>
			<CardContent className="p-6 h-48">
				<div className="flex justify-between h-full items-start">
					<h1 className="text-lg text-gray-500 font-semibold">{title}</h1>
					<div className="relative h-full">
						<CircularProgressbar
							className="w-full h-full"
							value={percentage}
							text={`${percentage}%`}
							strokeWidth={8}
							styles={buildStyles({
								// Rotation of path and trail, in number of turns (0-1)
								rotation: 0,
								// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
								strokeLinecap: 'round',
								// Text size
								textSize: '16px',
								// How long animation takes to go from one percentage to another, in seconds
								pathTransitionDuration: 0.5,
								// Can specify path transition in more detail, or remove it entirely
								pathTransition: 'none',
								// Colors
								pathColor: percentage < 70 ? (percentage < 30 ? 'red' : '#FFDF37') : '#0BC279',
								textColor: '#000',
								trailColor: '#f1f5f8',
							})}
						/>
						{score && total && (
							<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-5 text-gray-500 text-xs">
								{score} / {total}
							</div>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default StatisticCard;
