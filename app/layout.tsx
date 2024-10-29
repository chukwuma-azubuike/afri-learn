import type { Metadata } from 'next';
import { Wix_Madefor_Text } from 'next/font/google';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import TopBar from '@/components/ui/top-bar';
import './globals.css';

const Wix_Madefor = Wix_Madefor_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Afri learn',
	description: '',
};

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
	return (
		<html lang="en">
			<body className={Wix_Madefor.className}>
				<TopBar />
				<SidebarProvider>
					<AppSidebar />
					<main className="mt-[76px] py-10 px-7 bg-background w-full">{children}</main>
				</SidebarProvider>
			</body>
		</html>
	);
};

export default RootLayout;
