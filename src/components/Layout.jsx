export default function Layout(props){
    return (
    <>
    <nav>Navigation</nav>
    {props.children}
    <footer>Footer</footer>
    </>
    )
}