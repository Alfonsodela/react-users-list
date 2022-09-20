import { USER_ROLE } from '../constants/userRoles';
import style from './UserRole.module.css';

const UserRole = ({ role }) => {
	const ROLE_STYLES = {
		[USER_ROLE.TEACHER]: ['Profesor', style.teacher],
		[USER_ROLE.STUDENT]: ['Alumno', style.student],
		[USER_ROLE.OTHER]: ['Otro', style.other]
	};

	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;
	
    // return <span className={roleClassname}>{roleName}</span>;
    return <span className={`${style.role} ${roleClassname}`}>{roleName}</span>;
};

export default UserRole;
