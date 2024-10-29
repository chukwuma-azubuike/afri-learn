import React from 'react';
import PieChartIcon from '@/components/icon/pie-chart';
import PageHeader from '@/components/ui/page-header';
import StatisticCard from '@/components/ui/statistic-card';

const Statistics: React.FC = () => {
	return (
		<main className="space-y-10">
			<PageHeader title="Class performance statistics" icon={PieChartIcon} />
			<div className="flex flex-col lg:flex-row gap-6 w-full">
				<StatisticCard percentage={100} score={30} total={30} title="Attended" />
				<StatisticCard percentage={75} score={22} total={30} title="Above Avg." />
				<StatisticCard percentage={50} title="Average score" />
			</div>
		</main>
	);
};

export default Statistics;
