
import DropdownView from "./Dropdown";
import Icons from "./Icons";


export default function Navbar(){

const navlist = [{id: '1', title: 'Accueil', route: '/'}, {id: '2', title: 'Inscriptions'}, {id: '3', title: 'Contact'}, {id: '4', title:'Photos'}, {id: '4', title:'Stage'}, , {id: '5', title:'Planning'}]

return (

    <div className="w-screen flex justify-between pl-3 pr-10 pt-2">

        <DropdownView navList={navlist} />
        <Icons size={30}/>


    </div>



)
}