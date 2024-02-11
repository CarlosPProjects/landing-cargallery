import Car from "@/components/Car";
import SliderController from "@/components/SliderController";

export default function Home() {
  return (
    <>
      <div className="flex flex-1">
        <Car />
      </div>
      <SliderController />
    </>
  );
}
