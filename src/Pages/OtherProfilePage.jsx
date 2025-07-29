import BottomOfThePage from "../components/Account/BottomOfThePage"
import Information from "../components/Account/Information"
import ProfileImage from "../components/Account/ProfileImage"
import ButtomOfThePage from "../components/AccountInformation/ButtomOfThePage"


function OtherProfilePage() {
  return (
    <>
      <ProfileImage/>
       <Information question='نام و نام خانوادگی' text='عل رضایی' imageSrc='/edit.png'/>
      <Information question='موبایل' text='۰۹۳۳۱۲۳۴۵۶۷' imageSrc='/edit.png'/>
      <div className="mt-10 ">
          <Information question='/Letter.svg' span='پیام ها' imageSrc='/alt-arrow-left.svg'/>
      </div>
      <div className="">
        <BottomOfThePage/>
        <ButtomOfThePage/>
      </div>
    </>
  )
}

export default OtherProfilePage