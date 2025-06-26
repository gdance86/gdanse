import Image from "next/image";
import { FaPhone, FaEnvelope, FaChevronDown } from "react-icons/fa";



export default function Home() {
  return (
 
    <div className="flex flex-col items-center justify-items-center min-h-screen p-5 gap-20  font-[family-name:var(--font-raleway)]">
      <main className="flex flex-col gap-10 row-start-1 h-screen justify-center items-center sm:items-start">
          <Image
            src="/logo1.png"
            width={600}
            height={200}
            alt="G'Danse logo"
          />

        

      
      </main>

      
      <footer className="row-start-3 flex gap-2 flex-col flex-wrap items-center justify-center">
        <h2 className="text-xl font-bold">G'Danse</h2>
     
       
          <div className="flex flex-col items-center align-center gap-2">
               
                <div className="flex flex-col items-center align-center">
                    <p>Presidente de l'association: Mme LECOMPTE Angelique</p>
                    <p>N: 06 88 92 82 10</p>
                
                </div>
                <div className="flex flex-col items-center align-center" >
                    <p>Siege social: 12 Place de Gaulle</p>
                    <p>BP 40049</p>
                    <p>86400 Civray</p>
                </div>
                <div className="flex flex-col items-center align-center">
                    <p>Numero siret: 940 869 621 000 18</p>
                </div>
                    
            </div>
        
      </footer>
    </div>
  );
}
