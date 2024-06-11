import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className="flex justify-between py-4 px-4 sm:px-4 sticky top-0 z-50 bg-white bg-opacity-90 ">
      <h2 className="">{`< react developer />`}</h2>
      <p className="font-medium text-2xl font-syne">michael soofian</p>
      {/*  ADD EMAIL, LINKEDIN, GITHUB ICONS */}
      <ul className="flex gap-4 sm:gap-1">
        <li>
          {/* use alternate email adress? */}
          <Link href="mailto:mksoofian@gmail.com">
            <Image
              src="/icons8-email-64.png"
              width={25}
              height={25}
              alt="email icon"
            />
          </Link>
        </li>
        <li>
          <Link href="www.linkedin.com/in/msoofian03">
            <Image
              src="/icons8-linkedin-50.png"
              width={25}
              height={25}
              alt="LinkedIn icon"
              className="w-auto h-auto"
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/mksoofian">
            <Image
              src="/icons8-github-50.png"
              width={25}
              height={25}
              alt="GitHub icon"
              className="w-auto h-auto"
            />
          </Link>
        </li>
      </ul>
      {/* <ContactSheet /> */}
    </nav>
  );
}
