import "./footer.style.css";
import { IconContainer } from "./IconContainer";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import banner from "../../imgs/banner.png";
interface Props {}

const Fotter: React.FC<Props> = ({}) => {
  return (
    <div className="footer">
      <h1>JOIN THE COMMUNITY</h1>
      <p>
        To learn more about the Calabasas Kid Club, chat with the team, hang out
        with community members from around the world, and get the inside scoop
        for merch drops, make sure to drop by our Discord server and say hi!
      </p>
      <div className="icons_contianer">
        <IconContainer
          bg="#1DA1F2"
          icon={
            <AiOutlineTwitter style={{ color: "white", fontSize: "1.8rem" }} />
          }
          href="https://twitter.com/CalabasasKidNFT"
        />

        <IconContainer
          bg="#7289DA"
          icon={<FaDiscord style={{ color: "white", fontSize: "1.8rem" }} />}
          href="https://discord.com/invite/zN3pN3KHzu"
        />
      </div>
      <img src={banner} alt="banner" className="footer_banner" />
    </div>
  );
};

export default Fotter;
