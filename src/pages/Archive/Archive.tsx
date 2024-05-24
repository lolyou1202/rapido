import './Archive.style.scss'
import { useState } from 'react'
import { EditionBlock } from '../../components/features/EditionBlock/EditionBlock'
import { useAppSelector } from '../../redux/hooks/useAppRedux'
import { ArchiveTable } from '../../components/ui/ArchiveTable/ArchiveTable'
import { FrequentlyNumsSwich } from '../../components/ui/FrequentlyNumsSwich/FrequentlyNumsSwich'
import { FrequentlyNumsList } from '../../components/ui/FrequentlyNumsList/FrequentlyNumsList'
import { findFrequentlyNums } from '../../hooks/findFrequentlyNums'
import { FieldVariant } from '../../types/ticketTypes'

export const Archive = () => {
	const editionsList = useAppSelector(state => state.game.editionsList)

	const [selectedEdition, setSelectedEdition] = useState<null | number>(null)

	const frequentlyNumsList = findFrequentlyNums({ editionsList })

	const [selectedFrequentlyNum, setSelectedFrequentlyNum] = useState({
		first: frequentlyNumsList.first.map(item => {
			return {
				...item,
				active: false,
			}
		}),
		second: frequentlyNumsList.second.map(item => {
			return {
				...item,
				active: false,
			}
		}),
	})

	const handleClickTableRow = (indexRow: number) => {
		setSelectedEdition(indexRow)
	}
	const handleClickFrequentlyNum = ({
		variantField,
		num,
	}: {
		variantField: FieldVariant
		num: number
	}) => {
		setSelectedFrequentlyNum(prevState => {
			switch (variantField) {
				case 'first':
					return {
						first: [
							...prevState.first.map(field => ({
								...field,
								active:
									field.num === num
										? (field.active = true)
										: (field.active = false),
							})),
						],
						second: {
							...prevState.second,
							active: false,
						},
					}
				case 'second':
					return {
						first: [
							...prevState.first.map(field => ({
								...field,
								active: false,
							})),
						],
						second: {
							...prevState.second,
							active: true,
						},
					}
			}
		})
	}

	return (
		<div className='archive-grid'>
			<FrequentlyNumsList
				frequentlyNumsList={selectedFrequentlyNum}
				onClickFrequentlyNum={handleClickFrequentlyNum}
			/>
			<FrequentlyNumsSwich />
			<ArchiveTable
				editionsList={editionsList}
				onClickTableRow={handleClickTableRow}
			/>
			<span>
				<EditionBlock
					edition={
						selectedEdition === null
							? selectedEdition
							: editionsList[selectedEdition]
					}
				/>
			</span>
		</div>
	)
}
