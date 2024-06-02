import './MobileDrawer.style.scss'
import { Drawer, DrawerProps } from '@mui/material'

export const MobileDrawer = ({ children, ...props }: DrawerProps) => {
	return (
		<Drawer {...props}>
			<div className='drawerContainer'>{children}</div>
		</Drawer>
	)
}
