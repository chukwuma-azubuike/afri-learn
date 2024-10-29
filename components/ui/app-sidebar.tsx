'use client';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import SettingsIcon from '../icon/settings';
import SettingsSlidersIcon from '../icon/settings-sliders';
import AppsIcon from '../icon/apps';
import HomeIcon from '../icon/home';
import ClockIcon from '../icon/clock';
import DocumentIcon from '../icon/document';
import ChartIcon from '../icon/chart';
import AcceptDocumentIcon from '../icon/accept-document';
import StatisticsIcon from '../icon/statistics';
import { useCallback } from 'react';
import isActiveRoute from '@/hooks/use-active-route';

interface INavItem {
	title: string;
	route: string;
	icon: React.FC;
}

const testConfiguration: Array<INavItem> = [
	{ title: 'Basic Settings', route: '/basic-setting', icon: SettingsIcon },
	{ title: 'Question manager', route: '/question-manager', icon: SettingsSlidersIcon },
	{ title: 'Question settings', route: '/question-settings', icon: AppsIcon },
	{ title: 'Test start page', route: '/test-start-page', icon: HomeIcon },
	{ title: 'Time settings', route: '/time-settings', icon: ClockIcon },
	{ title: 'Grading and summary', route: '/grading-and-summary', icon: DocumentIcon },
];

const testProgressAndResults: Array<INavItem> = [
	{ title: 'Test results', route: '/test-results', icon: ChartIcon },
	{ title: 'Test sheets review', route: '/test-sheets-review', icon: AcceptDocumentIcon },
	{ title: 'Statistics', route: '/statistics', icon: StatisticsIcon },
];

export const AppSidebar: React.FC = () => {
	const handleActiveRoute = useCallback((route: string) => isActiveRoute(route), []);

	return (
		<Sidebar className="bg-white mt-[76px]">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Test configuration</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{testConfiguration.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild isActive={handleActiveRoute(item.route)}>
										<a href={item.route}>
											<item.icon />
											<span className="ml-2">{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Test progress and results</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{testProgressAndResults.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild isActive={handleActiveRoute(item.route)}>
										<a href={item.route}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
