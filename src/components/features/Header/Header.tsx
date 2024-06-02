import './Header.style.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderNav } from './HeaderNav'
import { Burger } from '../../icons/Burger'
import { MobileDrawer } from '../../ui/MobileDrawer/MobileDrawer'

export type NavigationVariant = 'desktop' | 'mobile'

export const Header = () => {
	const [isOpenDrawer, setOpenDrawer] = useState(false)

	const navigate = useNavigate()

	const toggleDrawer = () => {
		setOpenDrawer(prevState => !prevState)
	}
	const handleClickNavButton = ({
		name,
		variant,
	}: {
		name: string
		variant: NavigationVariant
	}) => {
		navigate(`/${name}`)
		variant === 'mobile' && toggleDrawer()
	}
	const handleClickLogo = () => {
		navigate(`/tickets`)
	}

	return (
		<div className='header'>
			<h2 className='header-logo' onClick={handleClickLogo}>
				Rapido
			</h2>
			<HeaderNav variant='desktop' onClick={handleClickNavButton} />
			<span className='header-burger' onClick={toggleDrawer}>
				<Burger />
			</span>
			<MobileDrawer
				anchor='right'
				open={isOpenDrawer}
				onClose={toggleDrawer}
			>
				<HeaderNav variant='mobile' onClick={handleClickNavButton} />
			</MobileDrawer>
		</div>
	)
}
