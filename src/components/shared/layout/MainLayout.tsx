import { useState } from 'react';

import { logo } from 'src/assets/media';
import UserCard from 'src/components/shared/cards/UserCard';
import SidebarMenu from 'src/components/shared/menus/sidebar-menu/SidebarMenu';
import UserMenu from 'src/components/shared/menus/user-menu/UserMenu';
import HamburgerMenu from 'src/components/shared/menus/sidebar-menu/HamburgerMenu';

type Props = {
	activeMenuItem: string;
	children: React.ReactNode;
};

const MainLayout = ({ activeMenuItem, children }: Props) => {
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

	return (
		<div className='flex min-h-screen'>
			<div
				className='hidden items-center gap-[10px] border-r border-opal-mist bg-gradient-to-b from-frost-white to-seafoam-green md:block'
				style={{ minWidth: '300px' }}
			>
				<img src={logo} className='w-2/3 py-[30px] pl-7 pr-0' />
				<UserCard
					className='mx-[14px] my-[10px] rounded-md border border-ashen-grey'
					isUserMenuOpen={isUserMenuOpen}
					onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
				/>
				<div className='relative'>
					{isUserMenuOpen && (
						<UserMenu className='right-0 top-0 w-[15vw] overflow-hidden rounded-md border border-ashen-grey bg-seafoam-green shadow-[3px_3px_3px_rgba(0,0,0,0.3)]' />
					)}
				</div>
				<div>
					<SidebarMenu activeMenuItem={activeMenuItem} />
				</div>
			</div>
			<HamburgerMenu activeMenuItem={activeMenuItem} />
			<div className='flex-1'>{children}</div>
		</div>
	);
};

export default MainLayout;
