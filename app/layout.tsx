import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import './globals.css';
import TopBar from '@/components/ui/top-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Afri learn',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TopBar />
				<SidebarProvider>
					<AppSidebar />
					<main className="mt-[76px] pt-10 px-7 bg-background w-full">{children}</main>
				</SidebarProvider>
			</body>
		</html>
	);
}
