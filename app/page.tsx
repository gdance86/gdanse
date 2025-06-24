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

      <section className="row-start-2">
        <Image
              src="/affiche1.png"
              width={600}
              height={200}
              alt="G'Dance affiche May 2025"
            />
      </section>
      <footer className="row-start-3 flex gap-2 flex-col flex-wrap items-center justify-center">
        <h1>G'Danse</h1>
        <p>Gaelle Faiz</p>
        <div className="flex gap-2"><FaPhone/><p>0611918244</p></div>
        <div className="flex gap-2"><FaEnvelope /><p>assogdanse@yahoo.com</p></div>

        
      </footer>
    </div>
  );
}
