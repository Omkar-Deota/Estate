import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import img from "@/components/graphics/Background.jpg";
import HomeEx from "@/components/homeExample";
import Content from "@/components/content";
export default function IndexPage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})`, opacity: "0.5" }}
      />

      <DefaultLayout>
        <div className="content relative">
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
      <div>
        <HomeEx />
      </div>
      <div className="ml-20" style={{borderLeft:"4px solid white", width:"70%",padding:"10px"}}>
      <Content />
      </div>
      <footer  className="absolute bottom-0 w-full p-2 bg-gray-800 " style={{borderRadius:"5px"}} >
      <h3 style={{paddingLeft:"85%"}}>Developed by Omkar,</h3>
      <h3 style={{paddingLeft:"85%"}}>Raipur | +91 958377227</h3>
      </footer>
    </div>
  );
}
