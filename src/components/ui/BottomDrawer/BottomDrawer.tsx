import './BottomDrawer.style.scss'
import { Drawer } from '@mui/material'

export const BottomDrawer = ({
	isOpenDrawer,
	toggleDrawer,
	children,
}: {
	isOpenDrawer: boolean
	toggleDrawer: () => void
	children?: React.ReactNode
}) => {
	return (
		<Drawer open={isOpenDrawer} onClose={toggleDrawer} anchor='bottom'>
			<div className='drawerContainer'>{children}</div>
		</Drawer>
	)
}
