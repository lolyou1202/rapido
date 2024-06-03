import './Archive.style.scss'
import { useEffect, useMemo, useState } from 'react'
import { EditionInfo } from '../../components/ui/EditionInfo/EditionInfo'
import { useAppSelector } from '../../redux/hooks/useAppRedux'
import { ArchiveTable } from '../../components/ui/ArchiveTable/ArchiveTable'
import { findFrequentlyNums } from '../../hooks/findFrequentlyNums'
import { FieldVariant } from '../../types/ticketTypes'
import { FrequentlyNumsDropSwich } from '../../types/editionTypes'
import { EditionInfoEmpty } from '../../components/ui/EditionInfo/EditionInfoEmpty'
import { FrequentlyNums } from '../../components/ui/FrequentlyNums/FrequentlyNums'
import { useWindowSize } from '../../hooks/useWindowSize'
import { MobileDrawer } from '../../components/ui/MobileDrawer/MobileDrawer'

export const Archive = () => {
	const editionsList = useAppSelector(state => state.game.editionsList)

	const [isOpenDrawer, setOpenDrawer] = useState(false)

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

	const [width] = useWindowSize()

	const handleClickTableRow = (indexRow: number) => {
		setSelectedEdition(indexRow)
		if (width < 1168 && !isOpenDrawer) setOpenDrawer(true)
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
	const toggleDrawer = () => {
		setOpenDrawer(prevState => !prevState)
	}

	useEffect(() => {
		if (width >= 1167 && isOpenDrawer) setOpenDrawer(false)
	}, [width])

	const frequentlyNum = {
		variantField: selectedFrequentlyNum.variantField,
		num: frequentlyNumsList[selectedFrequentlyNum.variantField][
			selectedFrequentlyNum.indexNum
		].num,
	}

	return (
		<>
			<div className='archive-grid'>
				<FrequentlyNums
					selectedFrequentlyNum={selectedFrequentlyNum}
					frequentlyNumsList={frequentlyNumsList}
					variant={frequentlyNumsVariant}
					onClickFrequentlyNum={handleClickFrequentlyNum}
					onClickVariant={handleChangeFrequentlyNumsVariant}
				/>
				<ArchiveTable
					frequentlyNum={frequentlyNum}
					editionsList={editionsList}
					onClickTableRow={handleClickTableRow}
				/>
				{width >= 1167 && (
					<span>
						{selectedEdition === null ? (
							<EditionInfoEmpty />
						) : (
							<EditionInfo
								edition={editionsList[selectedEdition]}
							/>
						)}
					</span>
				)}
			</div>
			<MobileDrawer
				anchor='bottom'
				open={isOpenDrawer}
				onClose={toggleDrawer}
			>
				<EditionInfo edition={editionsList[selectedEdition!]} />
			</MobileDrawer>
		</>
	)
}
