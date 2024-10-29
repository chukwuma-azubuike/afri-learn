import React from 'react';
import PageHeader from '@/components/ui/page-header';
import SettingsSlidersIcon from '@/components/icon/settings-sliders';
import Question, { AnswerOptions, QuestionControl } from '@/components/ui/question';
import PlantQuestion from '@/components/icon/plant-question';

const QuestionManager: React.FC = () => {
	return (
		<main className="space-y-10">
			<PageHeader title="Test info" icon={SettingsSlidersIcon} />
			<div className="flex flex-col gap-6 w-full">
				<QuestionControl current={33} total={60} />
				<Question
					index={1}
					questionText="This is a suspense novel about the main character who accidentally gets a notebook with the various tracks and plans of a mysterious figure. The main character starts to decipher the contents of the notebook and finds that it contains mysterious codes and riddles."
				>
					<AnswerOptions />
				</Question>
				<Question index={2}>
					<PlantQuestion />
				</Question>
			</div>
		</main>
	);
};

export default QuestionManager;
