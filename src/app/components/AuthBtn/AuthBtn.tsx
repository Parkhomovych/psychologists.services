export default function AuthBtn() {
  return (
    <div>
      <button className="mr-3.5 w-31 h-12 py-3 px-9 border-solid border border-white02 hover:border-hoverGreen transition-color duration-300 rounded-full ">
        <span className="text-base font-medium leading-5">Log In</span>
      </button>
      <button className="w-42 h-12 py-3 px-10 rounded-full bg-green hover:bg-hoverGreen transition-color duration-300 text-white">
        <span className="text-base font-medium leading-5"> Registration</span>
      </button>
    </div>
  );
}
