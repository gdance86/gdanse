
import Image from "next/image"

export default function Accueil(){



    return (

        <div className="h-screen flex justify-center items-center">
            <section>
                <Image
                    src="/Planning-cours-de-danse 2025-2026-1.png"
                    width={1000}
                    height={200}
                    alt="G'Dance affiche May 2025"
                    />
            </section>

        </div>
    )
}