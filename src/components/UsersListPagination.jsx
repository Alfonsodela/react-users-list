import PageSelector from './forms/PageSelector';
import Select from './forms/Select';
import style from './forms/PageSelector.module.css'

const UsersListPagination = ({
	page,
	itemsPerPage,
	setPage,
	setItemsPerPage,
	totalPages
}) => (
	<div className={style.wrapper}>
		<div className={style.itemsPerPage}>
			<Select
				value={itemsPerPage}
				onChange={ev => setItemsPerPage(Number(ev.target.value))}
			>
				<option value={4}>4</option>
				<option value={6}>6</option>
				<option value={8}>8</option>
			</Select>
			<p>Elementos por página</p>
		</div>
		{/* <IconButton kind='red' filled={false} disabled icon={SearchIcon}/> */}
		<PageSelector page={page} totalPages={totalPages} setPage={setPage} />
	</div>
);

export default UsersListPagination;
