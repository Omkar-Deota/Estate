import DefaultLayout from "@/layouts/default";
// import CreateProperty from "./newProperty";
import Tabitem from "@/components/Tabitems/Tabitem";
import Pridictionbtn from "../components/Pricepridiction/Predictionbtn";

export default function PropPage() {
  return (
    <DefaultLayout>
      <div>
        <Pridictionbtn/>
      </div>
      <div>
      <Tabitem/>
      </div>
     
     {/* <div>
     <CreateProperty />
     </div> */}
      
    </DefaultLayout>
  );
}
