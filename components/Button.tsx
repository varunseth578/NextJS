"use client"
export function Button() {
  function handler() {
    console.log("hii there");
  }
  return (
    <div>
      <button
        onClick={handler}
        type="button"
        className="mt-8 w-full text-white bg-gray-800 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2"
      >
        Sign in
      </button>
    </div>
  );
}
