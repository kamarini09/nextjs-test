import Image from "next/image";
import Head from "next/head";

export default function Dogs({data}){
    const { content } = data;
    const {image} = content;
    return (
        <>
        <Head> <title>{data.title}</title> </Head>
        <h1>{content.heading}</h1>
        <p>{content.text}</p>
        <Image 
        src={content.image.src}
         alt={content.image.alt}
         width={content.image.width}
         height={content.image.height}
         sizes="(max-width: 750px) 100vw, 750px"
        />
        </>
    );
    
}


export async function getServerSideProps(context){
    //console.log(context.params.slug);
    const slug = context.params.slug;
    const api= "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
    const res = await fetch(api);
  
    //console.log(data);
    console.log(res.status);
    if (res.status !=200){
        return {
            notFound: true,
        };
    }

   const data = await res.json();

    return {
        props: {
            data: data,
        }
    }
}