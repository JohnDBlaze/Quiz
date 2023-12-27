import "./style.css";

export const Home = () => {
  return (
    <>
      <h1 className="text-white mt-10">Welcome to the World of Quiz</h1>
      <a href="/Quiz" className="text-decoration-none">
        <button className="mx-auto block">Start Quiz</button>
      </a>
    </>
  );
};
