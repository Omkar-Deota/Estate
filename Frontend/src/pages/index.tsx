import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import img from "@/components/graphics/Background.jpg";
import HomeEx from "@/components/homeExample";
import Content from "@/components/content";
import CunstomerSection from "@/components/Section/CunstomerSection"
import LastSection from"@/components/Section/LastSection"
import Footer from "@/components/Footer/Footer";
import 'animate.css';

export default function IndexPage() {
  return (
    <div className="relative ">
      <div
        className="background-image lg:h-screen"
        style={{ backgroundImage: `url(${img})`, opacity: "0.5" }}
      />

      <DefaultLayout>
        <div className="content relative justify-center text-center sm:h-full">
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
            <div className="inline-block max-w-lg text-center justify-center animate__animated animate__fadeIn animate__delay-2s lg:mt-28">
              <h1 className={title()}>Immense peace and &nbsp;</h1>
              <h1 className={title({ color: "green" })}>relaxing,&nbsp;</h1>
              <br />
              <h1 className={title()}>
                pleasure begins at our properties.
              </h1>
              <h4 className={subtitle({ class: "mt-4" })}>
              Find the place for your loved one
              </h4>
            </div>
          </section>
        </div>
      </DefaultLayout>
      
      <h1 className="ml-44 lg:ml-96 mt-11 text-3xl text-white font-bold">About us</h1>

      <div className="ml-20 " style={{borderLeft:"4px solid white", width:"60%",padding:"10px"}}>
      <Content />
      </div>

      <div className="flex flex-col items-center justify-center  p-5">
      <div className=" p-8 rounded-lg w-full max-w-screen-lg text-center">
        <h1 className="text-3xl text-white font-bold mb-6">Available Properties</h1>
        <HomeEx />
        <button className="mt-6 text-lg text-white font-bold bg-pink-600 rounded-xl p-2">
          See more
        </button>
      </div>
    </div>



      <div>
       <CunstomerSection/>
      </div>
      <div>
       <LastSection/>
      </div>

     <div>
      <Footer/>
     </div>
     
    </div>
  );
}
