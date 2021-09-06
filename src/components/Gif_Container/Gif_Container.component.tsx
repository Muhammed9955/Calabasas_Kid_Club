import { Button } from "@material-ui/core";
import gif from "../../imgs/mainGif.gif";
import headerImg from "../../imgs/headerImg.png";
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
        height: "auto",
        margin: "3rem",
      }}
    >
      <img
        src={headerImg}
        alt=""
        style={{
          width: "100%",
          height: "auto",
          margin: "2rem",
          objectFit: "contain",
          // minHeight: "300px",
        }}
      />
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
