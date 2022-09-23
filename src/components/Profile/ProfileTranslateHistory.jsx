import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";

const ProfileTranslateHistory = ({ translations }) => {

    //Creates a list by mapping items from translation. Using index to avoid duplicates
    const translationList = translations.map((translation, index) => <ProfileTranslateHistoryItem key={ index + '-' + translation } translation={ translation }/>);
    
    //Splices the list into a new list, showing the last 10
    const last10 = translationList.splice(-10);
    
    //Returns the list
    return (
        <section>
            <h4>Your translation history</h4>
            <ul>
                { last10 }
            </ul>
        </section>
    )
}
export default ProfileTranslateHistory;