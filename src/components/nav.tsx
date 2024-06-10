// import { Button } from "./ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="flex justify-between py-4 sticky px-4 sm:px-4">
      <p className="font-medium text-xl">michael soofian</p>
      {/* <ul className="flex items-center gap-4 ">
        <li>
          <Link href={"#Projects"}>projects</Link>{" "}
        </li>
        <li>
          <Link href={"#resume"}>resume</Link>
        </li>
        <li>
          <Link href={"/"} className={buttonVariants({ variant: "default" })}>
            contact
          </Link>
        </li>
      </ul> */}
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        contact
      </Link>
    </nav>
  );
}
