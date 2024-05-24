import './Archive.style.scss'
import { useState } from 'react'
import { EditionBlock } from '../../components/features/EditionBlock/EditionBlock'
import { useAppSelector } from '../../redux/hooks/useAppRedux'
import { ArchiveTable } from '../../components/ui/ArchiveTable/ArchiveTable'
import { FrequentlyNumsSwich } from '../../components/ui/FrequentlyNumsSwich/FrequentlyNumsSwich'
import { FrequentlyNumsList } from '../../components/ui/FrequentlyNumsList/FrequentlyNumsList'

export const Archive = () => {
	const editionsList = useAppSelector(state => state.game.editionsList)

	const [selectedEdition, setSelectedEdition] = useState<null | number>(null)
	const [selectedFrequentlyNum, setSelectedFrequentlyNum] = useState(0)

	const handleClickTableRow = (indexRow: number) => {
		setSelectedEdition(indexRow)
	}

	return (
		<div className='archive-grid'>
			<FrequentlyNumsList />
			<FrequentlyNumsSwich />
			<ArchiveTable
				editionsList={editionsList}
				handleClickTableRow={handleClickTableRow}
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
