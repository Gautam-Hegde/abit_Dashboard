import Link from "next/link";
import MaxwidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import WalletIcon from "../public/walletIcon.png";
import NotificationIcon from "../public/notificationIcon.png";
import DropdownIcon from "../public/dropIcon.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav
      className="sticky h-24 inset-x-0 top-0  w-full border-b border-black "
      style={{
        backgroundImage: "url(/navTexture.jpg)",
        backgroundSize: "cover",
        opacity: 0.9,
      }}
    >
      <MaxwidthWrapper>
        <div className="flex h-24 items-center justify-between  ">
          <div>
            <strong className="font-bold text-2xl">aBit</strong>
          </div>
          <div className="flex w-1/3 sm:w-1/2 h-24 items-center justify-end gap-4">
            <Link
              href="/"
              className={buttonVariants({
                size: "sm",
                variant: "outline",
                className:
                  "text-purple-600 border-purple-700 rounded-3xl border-2 px-2 py-4 hover:text-purple-900",
              })}
            >
              Share new video
            </Link>
            <Link href="/">
              <Image
                src={WalletIcon}
                alt="Wallet"
                width={28}
                height={28}
                className="opacity-30 hover:opacity-50"
              />
            </Link>
            <Link href="/">
              <Image
                src={NotificationIcon}
                alt="Notifications"
                width={36}
                height={36}
                className="opacity-30 hover:opacity-50"
              />
            </Link>
            <Link href="/">
              {/* <Image
                src={ProfileIcon}
                alt="User Profile"
                width={31}
                height={32}
                className="border border-black rounded-full"
              /> */}
              <Avatar className="border border-black rounded-full">
                <AvatarImage src={'/profileicon.jpg'}   width={31}
                height={32} />
                <AvatarFallback>User Profile</AvatarFallback>
              </Avatar>
            </Link>
            <Link href="/">
              <Image
                src={DropdownIcon}
                alt="DropDown menu"
                width={24}
                height={24}
                className="opacity-40 hover:opacity-50"
              />
            </Link>
          </div>
        </div>
      </MaxwidthWrapper>
    </nav>
  );
};
export default Navbar;
