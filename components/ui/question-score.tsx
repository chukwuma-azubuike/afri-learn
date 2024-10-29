import { IQuestionScore } from '@/types/questions';
import { Progress } from './progress';

type IQuestionScoreBarProps = IQuestionScore;

const QuestionScoreBar: React.FC<IQuestionScoreBarProps> = ({
	percentage,
	score,
	total,
	title,
	color,
	...props
}) => {
	return (
		<div className="w-full h-full flex gap-1.5 relative" {...props}>
			<div className="w-2 h-full bg-red-300 rounded-lg" style={{ background: color }} />
			<Progress value={percentage} indicatorStyle={{ background: color }} />
			<div className="flex items-center justify-between absolute w-full pl-6 pr-4 py-2">
				<h4 className="text-xs font-bold truncate">{title.toUpperCase()}</h4>
				<div className="flex items-center justify-between gap-5">
					<h4 className="font-semibold truncate">{percentage}%</h4>
					<h4 className="text-gray-500 truncate">
						{score} / {total}
					</h4>
				</div>
			</div>
		</div>
	);
};

export default QuestionScoreBar;
