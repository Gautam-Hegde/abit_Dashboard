import { reckless_neue } from "@/app/styles/fonts";

const Footer = () => {
  return (
    <footer className="w-full h-[50vh] bg-white border-t border-gray-400 flex justify-center items-center">
      <div className="w-[1169px] h-[121px] 2xl:w-[90vw] flex justify-between items-center ">
        <div >
          <span className="text-[40px] font-bold">aBit</span>
          <br />
          <span
            className={reckless_neue.className}
            style={{ fontSize: "20px", fontWeight: "400" }}
          >
            Changing The Way In Which
            <br /> Creators And Fans Interact.
          </span>
        </div>
        <div className="flex">
          <div className="flex items-center space-x-4">
            <div className="h-[108px] w-0 border border-solid border-gray-400 opacity-50"></div>
            <div className="flex flex-col items-start justify-around space-y-4 font-bold">
              <div> Home</div>
              <div>Are you a creator?</div>
              <div>Support</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
