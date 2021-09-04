import styles from "../../util/styles";
import "./ckc.style.css";

interface Props {
  //   title: String;
  //   paragraph: String;
}

const CKC: React.FC<Props> = ({}) => {
  return (
    <div
      style={{
        background: `${styles.colors.bg}`,
        width: "100%",
        margin: "auto",
      }}
    >
      <h1>WHAT CAN I EXPECT FROM CKC?</h1>
      <p>Things THE KID would love to do with the community in the future:</p>
      <p className="ckc_item">Sandbox games</p>
      <p className="ckc_item">Comic book</p>
      <p className="ckc_item">Animated series</p>
    </div>
  );
};

export default CKC;
