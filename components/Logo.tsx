import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" width={54} height={54} priority alt="" />
    </Link>
  );
}

export default Logo;
