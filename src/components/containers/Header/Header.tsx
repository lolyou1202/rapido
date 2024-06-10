import './Header.style.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../../ui/Logo/Logo'
import { HeaderNav } from '../../ui/HeaderNav/HeaderNav'
import { HeaderBurger } from '../../ui/Button/HeaderBurger/HeaderBurger'
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
		<header className='header'>
			<Logo onClick={handleClickLogo} />
			<HeaderNav variant='desktop' onClick={handleClickNavButton} />
			<HeaderBurger onClick={toggleDrawer} />
			<MobileDrawer
				anchor='right'
				open={isOpenDrawer}
				onClose={toggleDrawer}
			>
				<HeaderNav variant='mobile' onClick={handleClickNavButton} />
			</MobileDrawer>
		</header>
	)
}
