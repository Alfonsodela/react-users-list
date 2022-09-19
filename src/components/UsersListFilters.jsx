import InputSearch from './forms/InputSearch';
import style from './UsersListFilters.module.css';

const UsersListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<form className={style.form}>
		<InputSearch
			placeholder='Buscar...'
			value={search}
			onChange={ev => setSearch(ev.target.value)}
			InputSearch
		/>
		<div className={style.active}>
			<input
				type='checkbox'
				checked={onlyActive}
				onChange={ev => setOnlyActive(ev.target.checked)}
			></input>
			<span>Sólo activos</span>
		</div>
		<select value={sortBy} onChange={ev => setSortBy(Number(ev.target.value))}>
			<option value={0}>Por defecto</option>
			<option value={1}>Por nombre</option>
			<option value={2}>Por rol</option>
			{!onlyActive && <option value={3}>Por activación</option>}
		</select>
	</form>
);

export default UsersListFilters;
