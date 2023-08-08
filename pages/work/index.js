import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 pb-32 pt-2 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left  mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My work <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Dolor ullamco ut do sint esse veniam aliquip esse nostrud ea quis.
              Dolor ullamco ut do sint esse veniam aliquip esse nostrud ea quis.
              Dolor ullamco ut do sint esse veniam aliquip esse nostrud ea quis.
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
