import { Button } from "@chakra-ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/hook";
import { defaultState } from "../../store/state/authSlice";

const Home = () => {
  const { name } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    dispatch(defaultState());
  };

  return (
    <div>
      User Name - {name}
      <Button onClick={signout}>Signout</Button>
    </div>
  );
};

export default Home;
