import { Layout } from '../Layout/Layout'
import { ArrowBoldLeft } from '../../icons/ArrowBoldLeft'

export const EditionInfoEmpty = () => {
	return (
		<Layout classNameLayoutContent='editionInfo-empty'>
			<ArrowBoldLeft />
			<p>Выберите тираж</p>
		</Layout>
	)
}
