//DOM/Browser
export default function RandomDog({imgUrl}){
   
    return(
        <>
        <h1>Random Dog</h1>
        <img src={imgUrl} alt="Random Dog" />
        </>
    )
}
//BACKEND/Server
//every time i reload the image is changing
export async function getServerSideProps(){
    const api = "https://dog.ceo/api/breeds/image/random";
    const res = await fetch(api);
    const data = await res.json();
    console.log(data); //this will only be shown in the terminal not in the console

    return {
        props:{
            imgUrl:data.message,
        },
    };
}