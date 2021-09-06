// import "./headerItem.style.css";

import CLB from "../../imgs/CLB.jpg";
import { Grid } from "@material-ui/core";
import styles from "../../util/styles";
import "./intro.style.css";
interface Props {}

const Intro: React.FC<Props> = ({}) => {
  return (
    <div style={{ background: `${styles.colors.bg}` }}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item sm={6} xs={12}>
          <img src={CLB} alt="DopeShiba" className="Intro_img" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <h1>WHAT IS CALABASAS KID CLUB?</h1>
          <p className="intro_p">
            <span style={{ fontWeight: "bold" }}>Calabasas Kid Club</span> is a
            hand drawn collection on the Ethereum Mainnet. The collection
            consists of 5,000 randomly generated Kids that have been put
            together from 147 different traits.
          </p>
          <p>
            This collection is being made and transition into a full on brand
            for streetwear, shoes, and hypebeast collectibles.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
