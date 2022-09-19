import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";

const ProfileTranslateHistory = ({ translations }) => {

    const translationList = translations.map(translation => <ProfileTranslateHistoryItem key={ translation } translation={ translation }/>);
    
    return (
        <section>
            <h4>Your translation history</h4>
            <ul>
                { translationList }
            </ul>
        </section>
    )
}
export default ProfileTranslateHistory;