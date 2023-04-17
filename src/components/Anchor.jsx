import { useRouter } from "next/router";

 
//we do that so we dont download data we dont need 
export default function Anchor({ children, href, className }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href)
  }

  return (
    <a
    className={className}
    href={href}
    onClick={handleClick}
    >
      {children}
    </a>
  );
}