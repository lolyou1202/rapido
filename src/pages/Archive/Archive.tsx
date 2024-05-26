import './Archive.style.scss'
import { useMemo, useState } from 'react'
import { SidebarEdition } from '../../components/ui/Sidebar/SidebarEdition/SidebarEdition'
import { useAppSelector } from '../../redux/hooks/useAppRedux'
import { ArchiveTable } from '../../components/ui/ArchiveTable/ArchiveTable'
import { FrequentlyNumsSwich } from '../../components/ui/FrequentlyNumsSwich/FrequentlyNumsSwich'
import { FrequentlyNumsList } from '../../components/ui/FrequentlyNumsList/FrequentlyNumsList'
import { findFrequentlyNums } from '../../hooks/findFrequentlyNums'
import { FieldVariant } from '../../types/ticketTypes'
import { FrequentlyNumsDropSwich } from '../../types/editionTypes'

export const Archive = () => {
	const editionsList = useAppSelector(state => state.game.editionsList)

	const [selectedEdition, setSelectedEdition] = useState<null | number>(null)

	const [frequentlyNumsVariant, setFrequentlyNumsVariant] =
		useState<FrequentlyNumsDropSwich>('lastFew')

	const frequentlyNumsList = useMemo(() => {
		return findFrequentlyNums({
			editionsList,
			frequentlySwich: frequentlyNumsVariant,
		})
	}, [editionsList, frequentlyNumsVariant])

	const [selectedFrequentlyNum, setSelectedFrequentlyNum] = useState<{
		variantField: FieldVariant
		indexNum: number
	}>({
		variantField: 'first',
		indexNum: 0,
	})

	const handleClickTableRow = (indexRow: number) => {
		setSelectedEdition(indexRow)
	}
	const handleChangeFrequentlyNumsVariant = (
		newVariant: FrequentlyNumsDropSwich
	) => {
		setFrequentlyNumsVariant(newVariant)
	}
	const handleClickFrequentlyNum = ({
		variantField,
		indexNum,
	}: {
		variantField: FieldVariant
		indexNum: number
	}) => {
		setSelectedFrequentlyNum({ variantField, indexNum })
	}

	const frequentlyNumsPercent =
		frequentlyNumsList[selectedFrequentlyNum.variantField][
			selectedFrequentlyNum.indexNum
		].percentEditions
	const frequentlyNumsLastTime =
		frequentlyNumsList[selectedFrequentlyNum.variantField][
			selectedFrequentlyNum.indexNum
		].lastTime
	const frequentlyNum = {
		variantField: selectedFrequentlyNum.variantField,
		num: frequentlyNumsList[selectedFrequentlyNum.variantField][
			selectedFrequentlyNum.indexNum
		].num,
	}

	return (
		<div className='archive-grid'>
			<FrequentlyNumsList
				selectedFrequentlyNum={selectedFrequentlyNum}
				frequentlyNumsList={frequentlyNumsList}
				onClickFrequentlyNum={handleClickFrequentlyNum}
			/>
			<FrequentlyNumsSwich
				variant={frequentlyNumsVariant}
				percent={frequentlyNumsPercent}
				lastTime={frequentlyNumsLastTime}
				onClickVariant={handleChangeFrequentlyNumsVariant}
			/>
			<ArchiveTable
				frequentlyNum={frequentlyNum}
				editionsList={editionsList}
				onClickTableRow={handleClickTableRow}
			/>
			<span>
				<SidebarEdition
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
