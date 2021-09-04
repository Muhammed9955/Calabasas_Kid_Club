import { useState } from "react";
import "./header.style.css";
import { Button } from "@material-ui/core";
import logo from "../../imgs/logo.png";
import HeaderItem from "../HeaderItem/HeaderItem.component";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import styles from "../../util/styles";

interface Props {}

const Header: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);
  console.log({ open });
  return (
    <div>
      <div className="header">
        <div className="header_Left">
          <img src={logo} alt="logo" className="header_logo" />

          <div className="header_Items">
            <HeaderItem
              text="Twitter"
              icon={<FaTwitter style={{ marginRight: "10px" }} />}
              herf="https://twitter.com/CalabasasKidNFT"
            />
            <div style={{ marginLeft: "1.5rem" }}>
              <HeaderItem
                text="Discord"
                icon={<FaDiscord style={{ marginRight: "10px" }} />}
                herf="https:discord.gg/zN3pN3KHzu"
              />
            </div>
          </div>
        </div>

        <Button
          variant="contained"
          style={{
            background: styles.colors.primary,
            color: "white",
            textTransform: "capitalize",
            height: "2.5rem",
          }}
        >
          Connect Wallet
        </Button>
      </div>

      <div className="menu_respon">
        <button className="menu_btn" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <RiMenu2Fill />}
        </button>

        <Button
          variant="contained"
          style={{
            background: styles.colors.primary,
            color: "white",
            textTransform: "capitalize",
            height: "2.5rem",
          }}
        >
          Connect Wallet
        </Button>
      </div>
      <div className={open ? "nav active" : "nav"}>
        <HeaderItem
          text="Twitter"
          icon={<FaTwitter style={{ marginRight: "10px" }} />}
          herf="https://twitter.com/CalabasasKidNFT"
        />
        <div style={{ marginTop: "1rem" }}>
          <HeaderItem
            text="Discord"
            icon={<FaDiscord style={{ marginRight: "10px" }} />}
            herf="https:discord.gg/zN3pN3KHzu"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
