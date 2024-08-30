import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import img from "@/components/graphics/Background.jpg";
import Content from "@/components/content";
import CunstomerSection from "@/components/Section/CunstomerSection";
import LastSection from "@/components/Section/LastSection";
import Footer from "@/components/Footer/Footer";
import "animate.css";
import AvailableProperty from "@/components/curosals/AvailableProperty";
import Insingth from "@/components/curosals/Insingth";

export default function IndexPage() {
  return (
    <div className="relative ">
      <div
        className="background-image lg:h-screen"
        style={{ backgroundImage: `url(${img})`, opacity: "0.5" }}
      />
      {/* Background conntent */}
      <DefaultLayout>
        <div className="content relative justify-center text-center sm:h-full">
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
            <div className="inline-block max-w-lg text-center justify-center animate__animated animate__fadeIn animate__delay-1s lg:mt-28">
              <h1 className={title()}>Immense peace and &nbsp;</h1>
              <h1 className={title({ color: "green" })}>relaxing,&nbsp;</h1>
              <br />
              <h1 className={title()}>pleasure begins at our properties.</h1>
              <h4 className={subtitle({ class: "mt-4" })}>
                Find the place for your loved one
              </h4>
            </div>
          </section>
        </div>
      </DefaultLayout>

      {/* about content */}

      <h1 className="ml-44 lg:ml-96 mt-11 text-3xl text-white font-bold">
        About us
      </h1>
      <div
        className="ml-20 "
        style={{ borderLeft: "4px solid white", width: "60%", padding: "10px" }}
      >
        <Content />
      </div>

       {/* CardCourasal  */}
      <div className="mb-20 ">
       <AvailableProperty/>
      </div>
     
      {/* our coustomer section */}
      <div>
        <CunstomerSection />
      </div>
    
    {/* insigth & tools */}
    <div className="items-center justify-center flex mb-28">
    <Insingth/>
    </div>
   

      {/* Last section */}
      <div>
        <LastSection />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>

    </div>
  );
}
