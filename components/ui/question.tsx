'use client';

import { useCallback, useState } from 'react';
import QuestionIndexIcon from '../icon/question-index';
import { Card, CardContent } from './card';
import { RadioGroup, RadioGroupItemBox } from './radio-group';
import { Button } from './button';
import SortIcon from '../icon/sort';
import PlusIcon from '../icon/plus';

type IQuestionProps = Readonly<{ children: React.ReactNode; index?: number; questionText?: string }>;

const Question: React.FC<IQuestionProps> = ({ children, index, questionText }) => {
	return (
		<Card className="w-full">
			<CardContent className="p-6 min-h-48 space-y-8">
				<div className="flex w-full justify-between items-center">
					<div className="flex gap-5 text-sm font-semibold items-center">
						<QuestionIndexIcon />
						{index && `Q. ${index}`}
					</div>
					<div className="flex gap-5 items-center">
						<QuestionHeaderItem title="Topic" value="Farm tools" />
						<QuestionHeaderItem title="Type" value="Single choice" />
						<QuestionHeaderItem title="Points" value="1" />
					</div>
				</div>
				<div className="space-y-8 ml-12">
					{questionText && <p className="text-sm">{questionText}</p>}
					{children}
				</div>
			</CardContent>
		</Card>
	);
};

export default Question;

const QuestionHeaderItem: React.FC<{ title: string; value: string }> = ({ title, value }) => {
	return (
		<div className="flex gap-4 text-sm">
			<p className="truncate text-gray-400">{title}</p>
			<p className="truncate">{value}</p>
		</div>
	);
};

const answerOptions = [
	{
		title: 'Answer option 1',
		value: '1',
	},
	{
		title: 'Answer option 2',
		value: '2',
	},
	{
		title: 'Answer option 3',
		value: '3',
	},
	{
		title: 'Answer option 4',
		value: '4',
	},
];

export const AnswerOptions: React.FC = () => {
	const [selectedValue, setValues] = useState<string>();

	const handleSelect = useCallback(
		(e: string) => {
			setValues(e);
		},
		[setValues]
	);

	return (
		<RadioGroup defaultValue={selectedValue} className="gap-2" onValueChange={handleSelect} id="userTypeId">
			{answerOptions.map((answerOption, index) => (
				<RadioGroupItemBox
					id={answerOption.value}
					key={`option-${index}`}
					value={answerOption.value}
					isActive={selectedValue === answerOption.value}
				>
					<div>
						<p className="truncate text-sm">{answerOption.title}</p>
						<label htmlFor={answerOption.value} className="text-muted cursor-pointer" />
					</div>
				</RadioGroupItemBox>
			))}
		</RadioGroup>
	);
};

export const QuestionControl: React.FC<{ current: number; total: number }> = ({ current, total }) => {
	return (
		<Card className="w-full">
			<CardContent className="p-6 space-y-8">
				<div className="flex w-full justify-between items-center">
					<div className="flex gap-5 text-sm font-semibold items-center">
						<QuestionIndexIcon />
						<p className='text-gray-400' >QUESTIONS</p>
						<p className="font-semibold">
							{current} / {total}
						</p>
					</div>
					<div className="flex gap-5 items-center text-sm">
						<Button variant="link" className="p-0 font-normal">
							<SortIcon />
							Reorder questions
						</Button>
						<Button className="p-3 font-normal">
							<PlusIcon />
							Add question
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
