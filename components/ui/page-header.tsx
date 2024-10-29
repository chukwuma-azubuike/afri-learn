import { IconProps } from '@/types/icons';

interface IPageHeaderProps {
	title: string;
	icon: React.FC<IconProps>;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, ...props }) => {
	return (
		<div className="flex gap-4 items-center">
			{<props.icon size={30} />}
			<h1 className="text-xl text-gray-700 font-semibold">{title}</h1>
		</div>
	);
};

export default PageHeader;
