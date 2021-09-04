import "./headerItem.style.css";

interface Props {
  text: String;
  herf: String;
  icon: any;
}

const HeaderItem: React.FC<Props> = ({ icon, text, herf }) => {
  return (
    <a href={`${herf}`} className="headerItem">
      {icon}
      {text}
    </a>
  );
};

export default HeaderItem;
