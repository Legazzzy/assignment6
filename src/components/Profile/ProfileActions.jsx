import { translationClearHistory } from "../../api/translation";

const ProfileActions = ({ logout, userId }) => {

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure you want to log out?')){
            // Send event to parent
            logout();
        }

    }

    const handleClearHistoryClick = async () => {
        if(!window.confirm('Are you sure you want to clear history?')){
            return;
        }

        console.log(userId);
        const [ error, result ] = await translationClearHistory(userId);

        
    }

    return (
        <ul>
            <li><button onClick={ handleClearHistoryClick }>Clear History</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul>
    )
}
export default ProfileActions;