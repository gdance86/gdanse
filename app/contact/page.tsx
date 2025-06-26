
import { FaPhone, FaEnvelope } from "react-icons/fa"


export default function Contact(){

      return (
      <div className="h-screen flex flex-col gap-4 text-xl justify-center items-center">

                <h1 className="text-xl text-black font-bold">Contactez-nous</h1>
                <div className="flex gap-2"><FaPhone/><p>0611918244</p></div>
                <div className="flex gap-2"><FaEnvelope /><p>assogdanse@yahoo.com</p></div>         



      </div>
      )
}