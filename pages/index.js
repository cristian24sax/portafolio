import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
const Home = () => {
  return (
    <div className="bg-primary/60 h-[80%] xl:h-full ">
      <div className="w-full h-full bg-gradient-to-r from-primary via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-start lg:justify-center xl:pt-0 xl:text-left h-[100%] lg:h-full xl:h-[92%] container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 "
          >
            Cristian
            <span className="text-accent xl:ml-6">Quispe</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            ¡Bienvenido a mi rincón digital! Soy un apasionado desarrollador
            <br/>
            <span className="text-accent text-[20px]"> full stack</span> con un recorrido de
            más de un año en el emocionante mundo de la tecnología. Mi
            trayectoria no solo abarca líneas de código, sino también soluciones
            creativas y eficientes que transforman ideas en realidades
            digitales.
          </motion.p>
          <div className="flex justify-center xl:hidden relative z-50">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge transalte-z-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" absolute bottom-0 right-[5%] w-[50%] "
          >
          {/* // w-full h-full max-w-[737px] max-h-[678px] lg:max-w-[560px] xl:max-w-[600px] absolute -bottom-32 lg:-bottom-[40%] xl:-bottom-[27%] lg:right-[0%] xl:right-[7%] */}
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
