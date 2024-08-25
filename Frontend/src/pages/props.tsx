import DefaultLayout from "@/layouts/default";
import CreateProperty from "./newProperty";
import Tabitem from "@/components/Tabitems/Tabitem";

export default function PropPage() {
  return (
    <DefaultLayout>
      <div>
      <Tabitem/>
      </div>
     
     {/* <div>
     <CreateProperty />
     </div> */}
      
    </DefaultLayout>
  );
}
