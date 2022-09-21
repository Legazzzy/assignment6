const ProfileActions = ({ logout }) => {
    const handleLogoutClick = () => {
        if(window.confirm('Are you sure you want to log out?')){
            // Send event to parent
            logout();
        }

    }

    return (
        <ul>
            <li><button>Clear History</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul>
    )
}
export default ProfileActions;