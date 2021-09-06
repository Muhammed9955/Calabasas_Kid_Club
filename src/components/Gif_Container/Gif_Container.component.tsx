import { Button } from "@material-ui/core";
import gif from "../../imgs/mainGif.gif";
import styles from "../../util/styles";
interface Props {}

const Gif_Container: React.FC<Props> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        marginTop: "2rem",
      }}
    >
      <img
        src={gif}
        alt=""
        style={{ width: "320px", height: "320px", borderRadius: ".8rem" }}
      />
      <Button
        variant="contained"
        style={{
          background: styles.colors.primary,
          color: "white",
          textTransform: "capitalize",
          height: "2.5rem",
          opacity: ".6",
          width: "320px",
          marginTop: "10px",
        }}
      >
        Connect Wallet
      </Button>
    </div>
  );
};

export default Gif_Container;
