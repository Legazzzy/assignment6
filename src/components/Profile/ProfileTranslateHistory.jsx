import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";

const ProfileTranslateHistory = ({ translations }) => {

    const translationList = translations.map(translation => <ProfileTranslateHistoryItem key={ translation } translation={ translation }/>);
    
    const last10 = translationList.splice(-10);
    
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