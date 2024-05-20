export const generateRandomNums = ({
	min,
	max,
	numberRandom,
	currentList,
}: {
	min: number
	max: number
	numberRandom: number
	currentList?: number[]
}) => {
	let numbersSet = new Set<number>()

	while (numbersSet.size < numberRandom) {
		const newRandomNum = Math.floor(Math.random() * (max - min + 1)) + min

		if (currentList) {
			if (!currentList.includes(newRandomNum)) {
				numbersSet.add(newRandomNum)
			}
		} else {
			numbersSet.add(newRandomNum)
		}
	}

	return Array.from(numbersSet)
}
