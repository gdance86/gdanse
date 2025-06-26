
import Image from "next/image"

export default function Inscriptions(){





    return (

         <div className="flex flex-col gap-4 text-xl justify-center items-center">
            
           <a target="_blank" href="/fiche_d'inscription.pdf">
            
            <Image 
                src="/fiche_d'inscription-1.png"
                width={600}
                height={200}
                alt="G'Dance inscription May 2025"

            />
            </a> 
          
            <a target="_blank" href="/Grille_tarifaire.pdf">
            <Image 
                src="/grille_tarifaire-1.png"
                width={600}
                height={200}
                alt="G'Dance tarif May 2025"
            
            />

            <img src="/fiche_d'inscription.pdf"></img>         
            </a>



         </div>
    )
}