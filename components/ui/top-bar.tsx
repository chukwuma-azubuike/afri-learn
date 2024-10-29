import React from 'react';
import { Button } from './button';
import VectorIcon from '../icon/vector';
import InfoIcon from '../icon/info';
import EyeIcon from '../icon/eye';
import PlayIcon from '../icon/play';

const TopBar: React.FC = () => {
	return (
		<div className="w-full fixed z-20 h-[76px] box-border p-5 flex items-center shadow-md gap-10">
			<Button variant="link" className="p-0">
				<VectorIcon />
				Assessment
			</Button>
			<div className="flex w-full justify-between items-center gap-2">
				<div className="flex gap-3 font-semibold">
					<h3 className="max-w-max">Primary 1</h3>
					<h3>.</h3>
					<h3 className="truncate max-w-max">Mid Term Test</h3>
					<h3>.</h3>
					<h3 className="truncate max-w-max">Agricultural Science</h3>
				</div>
				<div className="flex gap-4 font-semibold items-center">
					<Button variant="link" className="p-0">
						<InfoIcon />
						Test Info
					</Button>
					<p className="font-normal text-xl text-gray-300">|</p>
					<Button variant="link" className="p-0">
						<EyeIcon />
						Test preview
					</Button>
					<Button className="p-3">
						<PlayIcon />
						Activate test
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
