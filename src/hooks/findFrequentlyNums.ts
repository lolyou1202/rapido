import { Edition } from '../types/editionTypes'
import { FieldVariant } from '../types/ticketTypes'

export const findFrequentlyNums = ({
	editionsList,
}: {
	editionsList: Edition[]
}): {
	[key in FieldVariant]: {
		num: number
		count: number
	}[]
} => {
	const counter: {
		[key in FieldVariant]: Map<number, number>
	} = {
		first: new Map(),
		second: new Map(),
	}

	let result: {
		[key in FieldVariant]: {
			num: number
			count: number
		}[]
	} = {
		first: [],
		second: [],
	}

	editionsList.forEach(edition => {
		Object.entries(edition.droppedNums).forEach(([key, value]) => {
			const fieldKey = key as FieldVariant

			value.forEach(num => {
				const numFromCounter = counter[fieldKey].get(num)
				if (numFromCounter) {
					counter[fieldKey].set(num, numFromCounter + 1)
				} else {
					counter[fieldKey].set(num, 1)
				}
			})
		})
	})

	Object.entries(counter).forEach(([key, value]) => {
		const fieldKey = key as FieldVariant

		value.forEach((value, key) => {
			result[fieldKey].push({
				num: key,
				count: value,
			})
		})
	})

	Object.values(result).forEach(field => {
		field.sort((a, b) => {
			return b.count - a.count
		})
	})

	return {
		first: result.first.splice(0, 8),
		second: result.second.splice(0, 1),
	}
}
