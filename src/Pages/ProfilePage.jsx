import Headers from "../components/Profile/Headers.jsx";
import Navbar from "../components/Profile/Navbar.jsx";
import ProfileSection from "../components/Profile/ProfileSection.jsx";
import SectionOfConsultation from "../components/Profile/SectionOfTelephoneConsultation.jsx"

export default function ProfilePage(){
    return(
        <>
          <Headers/>
          <Navbar/>
          <ProfileSection/>
          <SectionOfConsultation/>
        </>
    )
}