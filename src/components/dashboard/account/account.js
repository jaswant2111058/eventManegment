import "./account.css"
import PostedEvent from "./postedEvent/postedEvent"
import Profession from "./profession/professon"
import ContactDetail from "./contactDetail/contactDetail"
import BankDetail from "./BankAccDetail/bankDetail"
import { FaUser } from 'react-icons/fa';
import { useState} from 'react';


const Account =()=>{
    const [ accboard ,setaccBoard] =useState(1)

    let screen 

      switch (accboard) {
        case 1: screen = <PostedEvent/> 
        break;
        case 2: screen = <Profession/> 
        break;
        case 3: screen = <ContactDetail/> 
        break;
        case 4: screen = <BankDetail/> 
        break;
        default: screen = <PostedEvent/>
        break;
      }


    return(
            <>

    
            <div className="accountMain">
                <div className="profile">
                    <div className="proImg">
                        <FaUser/>
                        {/* <img src="./images/logo.js" alt="Fauser"/> */}
                    </div>
                    <div className="proName">
                        <p>My Name Is This</p>
                    </div>

                </div>
                <hr/>
                <div className="selectBtn">
                    <button className="Btn1" onClick={()=>setaccBoard(1)}>
                        Event View
                    </button>
                    <button className="Btn2" onClick={()=>setaccBoard(2)}>
                        Profession View
                    </button>
                    <button className="Btn3" onClick={()=>setaccBoard(3)}>
                        Contact & Mail
                    </button>
                    <button className="Btn4" onClick={()=>setaccBoard(4)}>
                        Bank Account
                    </button>

                </div>
                <hr/>

                <div className="accountScreen">
                    {screen}
                </div>

            </div>




    </>
    
    )
}
export default Account;
