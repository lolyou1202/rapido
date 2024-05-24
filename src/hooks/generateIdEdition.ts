import { Edition } from '../types/editionTypes'
import { generateRandomNums } from './generateRandomNums'

export const generateIdEdition = ({
	editionsList,
	countGenerate = 1,
}: {
	editionsList: Edition[]
	countGenerate?: number
}) => {
	return generateRandomNums({
		min: 100000,
		max: 999999,
		numberRandom: countGenerate,
		currentList: editionsList.map(edition => edition.idEdition),
	})
}
