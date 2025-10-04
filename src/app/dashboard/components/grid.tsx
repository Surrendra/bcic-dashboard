export default function Grid() {
    return (
      <div className="grid grid-cols-5 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <Box color="bg-red-500" text="1" />
        <Box color="bg-yellow-500" text="1" />
        <Box color="bg-green-500" text="1" />
        <Box color="bg-blue-500" text="1" />
        <Box color="bg-blue-500" text="1" />
      </div>
    );
}


type BoxProp = {
    color:string,
    text:string
};
function Box({ color, text }: BoxProp) {
  return (
    <div className={`${color} flex items-center justify-center h-15`}>
      {text}
    </div>
  );
}