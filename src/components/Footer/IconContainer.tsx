import "./footer.style.css";
interface Props {
  icon: any;
  href: String;
  bg: String;
}
export const IconContainer: React.FC<Props> = ({ icon, href, bg }) => {
  return (
    <a
      className="iconContainer"
      href={`${href}`}
      style={{ backgroundColor: `${bg}` }}
    >
      {icon}
    </a>
  );
};
