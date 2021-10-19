import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Spinner style={{ width: "3rem", height: "3rem" }} />
    </div>
  );
};

export default Loader;
