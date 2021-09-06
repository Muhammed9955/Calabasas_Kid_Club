import { Grid } from "@material-ui/core";
import "./RoadMap.style.css";
interface Props {}

const RoadMap: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1> ROADMAP</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {" "}
          <p className="roadMapItem">
            <span style={{ fontWeight: "bold" }}>1-</span>Airdrop for all OG CKC
            HOLDERS
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <p className="roadMapItem">
            <span style={{ fontWeight: "bold" }}>2-</span> Official Launch +
            Decentraland party
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className="roadMapItem">
            <span style={{ fontWeight: "bold" }}>3-</span> Meme contest and
            giveaway! *Rules to be announced at a later time
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <p className="roadMapItem">
            <span style={{ fontWeight: "bold" }}>4-</span> Airdrop for
            collectors
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <p className="roadMapItem">
            <span style={{ fontWeight: "bold" }}>5-</span> Official Merch store
            that will start off by having the basics, but as time goes on will
            feature limited edition products which may include - “THE KID”
            custom chain necklaces, resin full body figures of Kids, physical
            collectors coins, hats, rugs, etc. (these will not be released all
            at once, but one by one in no particular order).
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default RoadMap;
