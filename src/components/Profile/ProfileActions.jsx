import { translationClearHistory } from "../../api/translation";

const ProfileActions = ({ logout, userId, updateUser }) => {

    //Handles logging out the user
    const handleLogoutClick = () => {
        if(window.confirm('Are you sure you want to log out?')){
            // Send event to parent
            logout();
        }

    }

    //Function for handling deleting history both locally and in database
    const handleClearHistoryClick = async () => {
        if(window.confirm('Are you sure you want to clear history?')){
            console.log(userId);
            const [ error, result ] = await translationClearHistory(userId);
            updateUser();
        }
    }

    //Returns the buttons the user can interact with
    return (
        <ul>
            <div class="profileBtns">
                <ul><button class="profileBtn" onClick={ handleClearHistoryClick }>Clear History</button></ul>
                <ul><button class="profileBtn" onClick={ handleLogoutClick }>Logout</button></ul>
            </div>
        </ul>
    )
}
export default ProfileActions;