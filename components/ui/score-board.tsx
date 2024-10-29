import { Card, CardContent } from './card';
import QuestionScoreBar from './question-score';
import scores from '@/data/scores.json';

const ScoreBoard: React.FC = () => {
	return (
		<Card className="w-full">
			<CardContent className="p-6 min-h-48">
				<h1 className="text-sm text-gray-500 font-semibold mb-7">SCORE PER QUESTION TOPIC (9)</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
					{scores.map((score, index) => (
						<QuestionScoreBar key={`score-${index}`} {...score} />
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ScoreBoard;
