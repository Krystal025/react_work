import { Component } from "react"
import ContactList from "./ContactListComponent";

class ContactComponent extends Component{
    render(){
        return(
            <div>
                <h3>연락처 목록</h3>
                <ContactList></ContactList>
            </div>
        )
    }
}
export default ContactComponent;