import { ChevronDown, ChevronLeft, ChevronRight, MouseIcon } from "lucide-react"

const SliderController = () => {
  return (
    <div className="items-center flex justify-around gap-4 p-4 rounded-lg bg-transparent md:bg-background-foreground absolute md:static bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0">
      <div className="flex gap-2 md:gap-4 items-center">
        <div className="p-2 bg-primary rounded-full">
          <MouseIcon className="w-5 h-5" color="white" />
        </div>
        <p className="text-md font-medium hidden md:block">
          Use mouse to rotate
        </p>
      </div>
      <div className="flex-1 max-w-2xl items-center justify-between gap-2 hidden md:flex">
        <div>
          <span className="text-xs text-secondary">200 CI</span>
          <p className="font-semibold">Engine</p>
        </div>
        <div>
          <span className="text-xs text-secondary">3,663</span>
          <p className="font-semibold">Mileage</p>
        </div>
        <div>
          <span className="text-xs text-secondary">3-SPD MANUAL</span>
          <p className="font-semibold">Transmission</p>
        </div>
      </div>
    </div>
  )
}

export default SliderController