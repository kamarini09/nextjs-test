import Anchor from "./Anchor";

export default function Layout({children, navData}){
    console.log(navData);
    return (
    <>
    <nav>
        {/* every time i map i should put a key so it knows what changed */}
        {navData.map((obj) => {
            return <Anchor key={obj.slug} href= {"/dogs/" + obj.slug}> {obj.title} </Anchor>
        }

        )}
    </nav>
    {children}
    <footer> Footer</footer>
    </>
    );
}