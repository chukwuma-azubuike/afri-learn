import React from 'react';
import { Button } from './button';
import VectorIcon from '../icon/vector';
import InfoIcon from '../icon/info';
import EyeIcon from '../icon/eye';
import PlayIcon from '../icon/play';

const TopBar: React.FC = () => {
	return (
		<div className="bg-white w-full fixed z-20 h-[76px] box-border p-5 flex items-center shadow-md gap-10">
			<Button variant="link" className="p-0 font-normal">
				<VectorIcon />
				Assessment
			</Button>
			<div className="flex w-full justify-between items-center gap-2">
				<div className="flex gap-3 font-semibold min-w-4 text-foreground">
					<h4 className="truncate">Primary 1</h4>
					<h4>.</h4>
					<h4 className="truncate">Mid Term Test</h4>
					<h4>.</h4>
					<h4 className="truncate">Agricultural Science</h4>
				</div>
				<div className="flex gap-4 items-center font-normal">
					<Button variant="link" className="p-0 font-normal">
						<InfoIcon />
						Test Info
					</Button>
					<p className="font-normal text-xl text-gray-300">|</p>
					<Button variant="link" className="p-0 font-normal">
						<EyeIcon />
						Test preview
					</Button>
					<Button className="p-3 font-normal">
						<PlayIcon />
						Activate test
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
