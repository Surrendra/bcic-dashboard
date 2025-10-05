type buttonSubmitProps = {
  text: string;
  onClick: () => void;
  disabled?:boolean
};
export function ButtonSubmit({ text,onClick,disabled = false }: buttonSubmitProps) {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 text-white  rounded-lg ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-300"
      }`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}

type buttonBackProps = {
  text: string;
  onClick: () => void
};
export function ButtonBack({ text, onClick }: buttonBackProps) {
  // console.log(text, onClick);
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
      type="button"
    >
      {text}
    </button>
  );
}
