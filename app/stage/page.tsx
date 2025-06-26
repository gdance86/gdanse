
import Image from "next/image"

export default function Accueil(){



    return (

        <div className="h-screen flex justify-center items-center">
            <section className="row-start-2">
                <Image
                    src="/affiche1.png"
                    width={600}
                    height={200}
                    alt="G'Dance affiche May 2025"
                    />
            </section>

        </div>
    )
}