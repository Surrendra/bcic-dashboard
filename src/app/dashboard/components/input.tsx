export function TextInput() {
    return (
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          className="mt-1 w-full p-2 border-1 rounded"
        />
      </div>
    );
}