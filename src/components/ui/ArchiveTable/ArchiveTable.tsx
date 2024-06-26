import './ArchiveTable.style.scss'
import { Edition, EditionDroppedNums } from '../../../types/editionTypes'
import { FieldVariant } from '../../../types/ticketTypes'
import { Layout } from '../Layout/Layout'
import { ArchiveTableDroppedNumsList } from './ArchiveTableDroppedNumsList'

export const ArchiveTable = ({
	frequentlyNum,
	editionsList,
	onClickTableRow,
}: {
	frequentlyNum: { variantField: FieldVariant; num: number }
	editionsList: Edition[]
	onClickTableRow: (indexRow: number) => void
}) => {
	const droppedNumsBlock = (droppedNums: EditionDroppedNums) =>
		Object.entries(droppedNums).map(([key, value]) => {
			const variantField = key as FieldVariant

			return (
				<ArchiveTableDroppedNumsList
					key={variantField}
					droppedNums={value}
					variantField={variantField}
					frequentlyNum={frequentlyNum}
				/>
			)
		})
	return (
		<Layout
			classNameLayoutRoot='archive-table-root'
			classNameLayoutContent='archive-table-content'
		>
			<table className='archive-table'>
				<thead>
					<tr>
						<th>
							<p>Тираж</p>
						</th>
						<th>
							<p>Дата</p>
						</th>
						<th>
							<p>Выпавшие числа</p>
						</th>
					</tr>
				</thead>
				<tbody>
					{editionsList.map((edition, indexRow) => {
						const { idEdition, droppedNums, date } = edition
						return (
							<tr
								key={idEdition}
								onClick={() => onClickTableRow(indexRow)}
							>
								<td>
									<p>{idEdition}</p>
								</td>
								<td>
									<p>{date}</p>
								</td>
								<td>
									<ul>{droppedNumsBlock(droppedNums)}</ul>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</Layout>
	)
}
