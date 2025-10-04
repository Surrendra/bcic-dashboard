export default function Flex() {
    return (
      <div>
        <div>
          <h3>Flex Basic Example</h3>
        </div>
        <div className="flex">
          <div className="w-14 h-10 flex-none flex bg-amber-200 items-center justify-center">
            1
          </div>
          <div className="w-64 h-10 flex-1 bg-blue-400 flex items-center justify-center">
            2
          </div>
          <div className="w-32 h-10 flex-1 bg-red-500 flex items-center justify-center">
            3
          </div>
        </div>

        <div className="mt-2">
          <h3>Flex Initial Example</h3>
        </div>
        <div className="flex mt-1">
          <div className="w-14 h-10 flex-none bg-amber-400 flex items-center justify-center">
            1
          </div>
          <div className="w-64 h-10 flex-initial bg-blue-400 flex items-center justify-center">
            2
          </div>
          <div className="w-32 h-10 flex-initial bg-red-500 flex items-center justify-center">
            3
          </div>
        </div>

        <div className="mt-2">
          <h3>Flex From Chat GPT</h3>
        </div>
        <div className="flex mt-1">
          <div className="w-14 h-10 flex-none bg-amber-400 flex items-center justify-center">
            1
          </div>
          <div className="w-64 h-10 flex-1 bg-blue-400 flex items-center justify-center">
            2
          </div>
          <div className="w-32 h-10 flex-1 bg-red-500 flex items-center justify-center">
            3
          </div>
        </div>

        <div className="mt-2">Flex Auto</div>
        <div className="flex">
          <div className="w-14 h-10 flex-auto bg-amber-700 flex items-center justify-center">
            1
          </div>
          <div className="w-14 h-10 flex-auto bg-blue-400 flex items-center justify-center">
            1
          </div>
          <div className="w-14 h-10 flex-auto bg-orange-200 flex items-center justify-center">
            1
          </div>
        </div>
      </div>
    );
}