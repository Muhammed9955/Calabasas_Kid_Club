import styles from "../../util/styles";

interface Props {
  title: String;
  paragraph: String;
}

const PraragraphContainer: React.FC<Props> = ({ title, paragraph }) => {
  return (
    <div
      style={{
        background: `${styles.colors.bg}`,
        width: "100%",
        margin: "auto",
      }}
    >
      <h1>{title} </h1>
      <p>{paragraph} </p>
    </div>
  );
};

export default PraragraphContainer;
