import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection/InfoSection";
//import History from "./InfoSection/History";
function MainSection() {
    return (
        <div className="flex gap-x-4">
            <ImageSection />
            <InfoSection /> 
        </div>
    );
}

export default MainSection;