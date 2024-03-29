import Image from "next/image";
import Head from "next/head";

//we dont need it anymore
export default function Henry({ data}){
    const { content } = data;
    const {image} = content;
    return (
        <>
        <Head> <title>{data.title}</title> </Head>
        <h1>{content.heading}</h1>
        <p>{content.text}</p>
        <Image 
        //first
        //  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
        //  alt="Cute dog"
        //  width="4240"
        //  height="2832"
        //  sizes="(max-width: 750px) 100vw, 750px"
        
        //after
        src={content.image.src}
         alt={content.image.alt}
         width={content.image.width}
         height={content.image.height} //
         sizes="(max-width: 750px) 100vw, 750px"
        />
        </>
    );
    
}

export async function getStaticProps(){
    const api= "https://bucolic-bombolone-857476.netlify.app/api/dogs/henry"
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);

    return{
        props:{
            data: data,
        }
    }
}