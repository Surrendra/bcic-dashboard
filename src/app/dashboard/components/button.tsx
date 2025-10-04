type buttonSubmitProps = {
  text: string;
};
export function ButtonSubmit({text} : buttonBackProps) {
  return (
    <button
      className="px-4 py-2 text-white bg-blue-600 text-blue-700 rounded-lg hover:bg-blue-300"
      type="button"
    >
      {text}
    </button>
  );
}

type buttonBackProps = {
  text: string;
};
export function ButtonBack({ text }: buttonBackProps) {
  return (
    <button
      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
      type="button"
    >
      {text}
    </button>
  );
}
