import { useSelector } from "react-redux";
import Button from "./Button";
import CreateUser from "../features/user/CreateUser";
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        More than just dough and cheese,
        <br />
        <span className="text-sky-400">
          It’s a love story on a plate.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue to Menu
        </Button>
      )}
    </div>
  );
}

export default Home;
