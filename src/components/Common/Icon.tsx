import PointRight from "../../assets/emojis/pointright.png";

type IconProps = {
  className?: string;
};

export const PointRightIcon = ({ className }: IconProps) => {
  return <img src={PointRight} alt="point-right" className={className + ``} />;
};
