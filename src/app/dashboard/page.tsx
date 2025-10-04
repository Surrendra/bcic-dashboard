// import Flex from "./components/flex";
import Grid from "./components/grid"

export default function Home() {
    return (
      <div>
        {/* <Flex /> */}
        <Grid />
        <div className="flex flex-col space-x-4 bg-gray-100 mt-2">
          <div className="bg-blue-400 p-4 mt-1 text-white">Item 1</div>
          <div className="bg-blue-500 p-4 mt-1 text-white">Item 2</div>
          <div className="bg-blue-600 p-4 mt-1 text-white">Item 3</div>
        </div>
      </div>
    );
}
