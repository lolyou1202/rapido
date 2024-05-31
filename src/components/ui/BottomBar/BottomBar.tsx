import './BottomBar.style.scss'

export const BottomBar = ({ children }: { children?: React.ReactNode }) => {
	return <aside className='bottomBar'>{children}</aside>
}
