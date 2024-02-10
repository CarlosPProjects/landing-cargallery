import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

const SliderController = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-background-foreground">
      <div className="flex gap-4 items-center">
        <div className="p-2 bg-primary rounded-full">
          <ChevronDown className="w-5 h-5" color="white" />
        </div>
        <p className="text-md font-medium">
          Scroll down
        </p>
      </div>
      <div className="flex-1 max-w-2xl flex items-center justify-between gap-2">
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
      <div className="space-x-4">
        <button className="bg-white rounded-full p-2">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="bg-white rounded-full p-2">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default SliderController