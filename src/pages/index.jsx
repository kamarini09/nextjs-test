import Link from "next/link";
import Anchor from "@/components/Anchor";
import Head from "next/head"



export default function Home(){
   return (
   <>
   <h1>Hello from Home</h1>
   <Head></Head>
   <Anchor href='/dogs/Henry'>Henry</Anchor>
   </>
   )
}