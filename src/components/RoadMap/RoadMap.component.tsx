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
            Send out NFTs to collectors of the original Calabasas Kid Club
            collection minted on Opensea.{" "}
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <p className="roadMapItem">Official Launch + Decentraland party</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className="roadMapItem">
            Meme contest and giveaway! *Rules to be announced at a later time
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <p className="roadMapItem">Airdrop for collectors</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <p className="roadMapItem">
            Official Merch store that will start off by having the basics, but
            as time goes on will feature limited edition products which may
            include - “THE KID” custom chain necklaces, resin full body figures
            of Kids, physical collectors coins, hats, rugs, etc. (these will not
            be released all at once, but one by one in no particular order).
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default RoadMap;
