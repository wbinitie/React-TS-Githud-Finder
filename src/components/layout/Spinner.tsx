import spinner from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        alt="loading"
        src={spinner}
      />
    </div>
  );
};

export default Spinner;
