import { ArrowBoldLeft } from '../../icons/ArrowBoldLeft'
import { Layout } from '../Layout/Layout'

export const EditionInfoEmpty = () => {
	return (
		<Layout classNameLayoutContent='editionInfo-empty'>
			<ArrowBoldLeft />
			<p>Выберите тираж</p>
		</Layout>
	)
}
