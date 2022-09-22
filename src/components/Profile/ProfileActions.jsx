import { translationClearHistory } from "../../api/translation";

const ProfileActions = ({ logout, userId, updateUser }) => {

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure you want to log out?')){
            // Send event to parent
            logout();
        }

    }

    const handleClearHistoryClick = async () => {
        if(window.confirm('Are you sure you want to clear history?')){
            console.log(userId);
            const [ error, result ] = await translationClearHistory(userId);
            updateUser();
        }
    }

    return (
        <ul>
            <li><button onClick={ handleClearHistoryClick }>Clear History</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul>
    )
}
export default ProfileActions;