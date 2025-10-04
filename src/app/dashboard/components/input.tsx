
type TextInputProps = {
  label:string,
  placeholder:string,
  required:false,
  value:string,
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void
};

export function TextInput({
  label,
  placeholder,
  required = false,
  value = "",
  onChange,
}: TextInputProps) {
  return (
    <div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
          {label}
        </label>
        <input
          type="email"
          id="email"
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required={required && "required"}
          value={value}
        />
      </div>
    </div>
  );
}