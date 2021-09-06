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
      <h1> </h1>
      <p>
        <span
          style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >{`${title}`}</span>{" "}
        {paragraph}{" "}
      </p>
    </div>
  );
};

export default PraragraphContainer;
