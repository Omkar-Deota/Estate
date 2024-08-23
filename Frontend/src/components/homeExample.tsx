import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import img1 from "./graphics/Screenshot 2024-08-10 193221.png"
import img2 from "./graphics/Screenshot 2024-08-10 193229.png"
import img3 from "./graphics/Screenshot 2024-08-10 193241.png"
import img4 from "./graphics/Screenshot 2024-08-10 193319.png"
import img5 from "./graphics/Screenshot 2024-08-10 193352.png"
import img6 from "./graphics/Screenshot 2024-08-10 193415.png"
import img7 from "./graphics/Screenshot 2024-08-10 193415.png"
import img8 from "./graphics/Screenshot 2024-08-10 193547.png"
import LoginPage from "./LoginPage/LoginPage";
export default function HomeEx() {
  const list = [
    {
      title: "Villa",
      img: img1,
      price: "$100k",
    },
    {
      title: "Tangi",
      img: img2,
      price: "$120k",
    },
    {
      title: "Raspberry",
      img: img3,
      price: "$130k",
    },
    {
      title: "Liverpool",
      img: img4,
      price: "$90k",
    },
    {
      title: "Avodo",
      img: img5,
      price: "$76k",
    },
    {
      title: "Limon",
      img: img6,
      price: "$130k",
    },
    {
      title: "Mannat",
      img: img7,
      price: "$140k",
    },
    {
      title: "Klassy",
      img: img8,
      price: "$135k",
    },
  ];

  return (
    <div className="gap-5 grid grid-cols-3 " style={{width:"70%", marginLeft:"5%"}}>
      {list.map((item, index) => (
        <Card
          isPressable
          className="card-hover"
          key={index}
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
        
    </div>
 
  );
}
