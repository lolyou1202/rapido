import { Edition } from '../types/editionTypes'
import { generateRandomNums } from './generateRandomNums'

export const generateIdEdition = ({
	editionsList,
}: {
	editionsList: Edition[]
}) => {
	const [editionId] = generateRandomNums({
		min: 100000,
		max: 999999,
		numberRandom: 1,
		currentList: editionsList.map(edition => edition.idEdition),
	})
	return editionId
}
