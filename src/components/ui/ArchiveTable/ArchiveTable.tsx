import './ArchiveTable.style.scss'
import { Edition } from '../../../types/editionTypes'
import { ContainerBox } from '../Container/ContainerBox/ContainerBox'

export const ArchiveTable = ({
	editionsList,
	handleClickTableRow,
}: {
	editionsList: Edition[]
	handleClickTableRow: (indexRow: number) => void
}) => {
	return (
		<ContainerBox>
			<table className='archive-table'>
				<thead>
					<tr>
						<th>
							<p>Дата</p>
						</th>
						<th>
							<p>Время</p>
						</th>
						<th>
							<p>Тираж</p>
						</th>
						<th>
							<p>Выпавшие числа</p>
						</th>
					</tr>
				</thead>
				<tbody>
					{editionsList.map((edition, indexRow) => (
						<tr
							key={edition.idEdition}
							onClick={() => handleClickTableRow(indexRow)}
						>
							<td>
								<p>{edition.date}</p>
							</td>
							<td>
								<p>{edition.time}</p>
							</td>
							<td>
								<p>{edition.idEdition}</p>
							</td>
							<td>
								<ul>
									{edition.droppedNums.first.map(num => (
										<li key={num}>{num}</li>
									))}
									<li className='action'>
										{edition.droppedNums.second[0]}
									</li>
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</ContainerBox>
	)
}
