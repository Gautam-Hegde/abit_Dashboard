import MaxwidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import coverImg from "../public/coverImg.png";
import Band from "@/components/Band";
import profileicon from "../public/profileicon.jpg";
import { gloriaHallelujah, reckless_neue } from "./styles/fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



import Footer from "@/components/Footer";

import dynamic from "next/dynamic";

 const Home=()=> {
  return (
    <div className="relative">
      <div
        className=" h-0 border border-black relative"
        style={{ paddingBottom: "30%" }}
      >
        <Image
          src={coverImg}
          alt="cover image"
          className="absolute top-0  w-full h-full object-cover"
          width={1640}
          height={548}
          style={{ objectPosition: "center 35%" }}
        />
      </div>
      <Band text="John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now" />
      <MaxwidthWrapper>
        <Card className=" absolute top-[300px] 2xl:top-[370px] w-[36rem] h-[14.625rem] rounded-3xl flex overflow-hidden">
          <CardHeader className="w-2/5 relative pl-0 pt-0 pb-0 pr-0 border-r border-black">
            <div className="w-full h-full overflow-hidden rounded-l-3xl">
              <Image
                src={profileicon}
                alt="profile image"
                className="w-full h-full object-cover"
              />
            </div>
          </CardHeader>
          <div
            className="w-3/5 p-2"
            style={{
              backgroundImage: "url(/cardTexture.jpg)",
              backgroundSize: "cover",
            }}
          >
            <CardContent>
              <CardTitle>
                <h2 className=" text-2xl font-bold mb-2 mt-4">
                  DAN MACE{" "}
                  <span className="ml-3 text-sm font-normal text-gray-700">
                    /Johny_Films/
                  </span>
                </h2>
              </CardTitle>

              <CardDescription className="h-[5.5rem] w-[16.1rem]  mt-4 ">
                <p>
                  <span className="text-gray-500 font-bold">Bio</span>
                  <br></br>
                  Simply a film fan creating original content for YouTube. Let's
                  Collaborate.
                </p>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <div className="w-[16rem] h-[1.813rem] border border-black rounded flex mt-2">
                <div className="w-1/2 flex justify-center border-r-black">
                  <div className={reckless_neue.className}>Creator</div>
                </div>
                <div
                  className="w-1/2"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))",
                  }}
                ></div>
              </div>
            </CardFooter>
          </div>
        </Card>
      </MaxwidthWrapper>
      
      <div className="w-full h-screen bg-white border-b-gray-400">
      
        <div className="w-[70.5rem] 2xl:w-[85.5rem]  ml-10 p-4 pt-[8rem]">
          <div className="w-full h-full flex items-center justify-between">
            <div className={reckless_neue.className}>
              <span className="font-normal text-3xl">Releases</span>
              <br />
              <span className="italic text-lg">
                Videos that you upload in collaboration with aBit appear here.
              </span>
            </div>
            <div className="flex gap-8 space-x-3">
              {/* <div className="h-16 border border-solid border-gray-400 opacity-50"></div> */}
              <div className="flex flex-col items-center">
                <div>
                  <span className="font-bold  text-gray-600 ">1</span>
                </div>
                <div className="opacity-75">
                  Shared <br />
                  Videos
                </div>
              </div>
              <div className="h-16 border border-solid border-gray-400 opacity-50"></div>
              <div className="flex flex-col items-center">
                <div>
                  <span className="font-bold  text-gray-600">$9510</span>
                </div>
                <div className="opacity-75">
                  Funds <br />
                  Raised
                </div>
              </div>
              <div className="h-16 border border-solid border-gray-400 opacity-50"></div>
              <div className="flex flex-col items-center">
                <div>
                  <span className="font-bold text-gray-600">317</span>
                </div>
                <div className="opacity-75">
                  Co-owner <br />
                  Community
                </div>
              </div>
              <div className="h-16 border border-solid border-gray-400 opacity-50"></div>
              <div className="flex flex-col items-center">
                <div>
                  <span className="font-bold text-gray-600">$3804</span>
                </div>
                <div className="opacity-75">
                  Co-owner <br />
                  Earnings
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="flex space-x-4 ml-10 p-4 mt-2">
          <Card className="relative w-[283.64px] h-[312px] bg-emptyCard rounded-lg flex flex-col items-center justify-center">
            <CardContent className="flex items-center justify-center">
              <div className="w-8 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1.5 h-8 bg-gray-400 absolute rounded-full"></div>
            </CardContent>
            <CardFooter className="absolute bottom-4 text-center flex-col justify-end text-gray-700 opacity-55">
              <p>You haven't uploaded any</p>
              <p>videos with aBit yet. Add now!</p>
            </CardFooter>
          </Card>
          <Card
            className="w-[283.64px] h-[312px] relative flex flex-col justify-between drop-shadow-lg "
            style={{
              backgroundImage: "url(/releases.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardHeader>
              <CardTitle className="font-bold text-sm text-white">
                The Sound of Silence
              </CardTitle>
            </CardHeader>
            <CardFooter className="mb-6">
              <div className="w-[246.76px] h-[52.36px] absolute rounded-xl bg-white/30 backdrop-blur-md flex items-center justify-around p-2 text-white">
                <div><span className="font-medium text-xs">Shares</span>
                  <br/><span className="text-[14px] font-bold">317</span>
                </div>
                <div><span className="font-medium text-xs">Offers</span>
                  <br/><span className="text-[14px] font-bold">75%</span>
                </div>
                <div><span className="font-medium text-xs">Raised</span>
                  <br/><span className="text-[14px] font-bold">$9510</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
export default dynamic (() => Promise.resolve(Home), {ssr: false})
