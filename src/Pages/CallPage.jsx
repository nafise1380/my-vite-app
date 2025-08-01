import Information from "../components/Account/Information"
import ChooseMinutes from "../components/Call/ChooseMinutes"
import ListItem from "../components/Call/ListItem"
import Profile from "../components/Call/Profile"
import Headers from "../components/Profile/Headers"


function CallPage() {
  return (
    <>
       <Headers text='تماس فوری با نیما سلیمانی'/>
       <Profile/>
       <ListItem/>
       <div>
          <Information span='فایل' imgSrc='/icon-plus.svg'   text='افزودن'/>
          <Information span='توضیحات' imgSrc='/icon-plus.svg'  text='افزودن'/>
          <Information span='تخفیف' imgSrc='/icon-plus.svg'  text='افزودن'/>
          <ChooseMinutes/>
       </div>
    </>
  )
}

export default CallPage