import {
	NUM_LAST_FEW_EDITIONS,
	NUM_SELECTED_CELLS_FIRST_FIELD,
	NUM_SELECTED_CELLS_SECOND_FIELD,
} from '../constants/settings'
import { Edition, FrequentlyNumsDropSwich } from '../types/editionTypes'
import { FieldVariant } from '../types/ticketTypes'

export const findFrequentlyNums = ({
	editionsList,
	frequentlySwich,
}: {
	editionsList: Edition[]
	frequentlySwich: FrequentlyNumsDropSwich
}): {
	[key in FieldVariant]: {
		num: number
		count: number
		percentEditions: number
		lastTime: number
	}[]
} => {
	let counter: {
		[key in FieldVariant]: {
			num: number
			count: number
			percentEditions: number
			lastTime: number
		}[]
	} = {
		first: [],
		second: [],
	}

	switch (frequentlySwich) {
		case 'wholeGame':
			break
		case 'lastFew':
			editionsList = editionsList.slice(0, NUM_LAST_FEW_EDITIONS)
			break
	}
	const editionsListLength = editionsList.length

	editionsList.forEach((edition, indexEdition) => {
		Object.entries(edition.droppedNums).forEach(
			([key, droppedNumsList]) => {
				const fieldKey = key as FieldVariant

				droppedNumsList.forEach(droppedNum => {
					const counterField = counter[fieldKey]
					const numFromCounter = counterField.findIndex(
						field => field.num === droppedNum
					)
					if (numFromCounter !== -1) {
						const counterNum = counterField[numFromCounter]
						counterNum.percentEditions = Math.round(
							((counterNum.count + 1) / editionsListLength) * 100
						)
						counterNum.count = counterNum.count + 1
					} else {
						counterField.push({
							num: droppedNum,
							count: 1,
							percentEditions: Math.round(
								(1 / editionsListLength) * 100
							),
							lastTime: indexEdition,
						})
					}
				})
			}
		)
	})

	Object.values(counter).forEach(field => {
		field.sort((a, b) => {
			return b.count - a.count
		})
	})

	counter = {
		first: [...counter.first].splice(0, NUM_SELECTED_CELLS_FIRST_FIELD),
		second: [...counter.second].splice(0, NUM_SELECTED_CELLS_SECOND_FIELD),
	}

	return counter
}
