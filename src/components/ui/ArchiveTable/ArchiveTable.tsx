import { Edition } from '../../../types/editionTypes'
import './ArchiveTable.style.scss'

export const ArchiveTable = ({ editionsList }: { editionsList: Edition[] }) => {
	return (
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
				{editionsList.map(edition => (
					<tr key={edition.idEdition}>
						<td>
							<p>{edition.date}</p>
						</td>
						<td>
							<p>{edition.time}</p>
						</td>
						<td>
							<p>#{edition.idEdition}</p>
						</td>
						<td>
							<ul>
								{edition.droppedNums.first.map(num => (
									<li key={num} onClick={() => {}}>
										{num}
									</li>
								))}
								<li className='action' onClick={() => {}}>
									{edition.droppedNums.second[0]}
								</li>
							</ul>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
