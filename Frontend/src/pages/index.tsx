import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import img from "@/components/graphics/Background.jpg";
import HomeEx from "@/components/homeExample";
import Content from "@/components/content";
import CunstomerSection from "@/components/Section/CunstomerSection"
import LastSection from"@/components/Section/LastSection"
import Footer from "@/components/Footer/Footer";
export default function IndexPage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})`, opacity: "0.5" }}
      />

      <DefaultLayout>
        <div className="content relative justify-center text-center">
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
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

      <div>
        <HomeEx />
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
