

import PhotosCarousel from './_components/carousel'



export default function Photos(){

    const images = ['/photos/photo_danse_gaelle.jpg']


    return (
        <div className='h-screen flex justify-center items-center'>

            <PhotosCarousel images={images} width={400} />
        </div>
        
    )


}