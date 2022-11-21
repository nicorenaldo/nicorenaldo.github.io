import PointRight from "../../assets/emojis/pointright.png";
import ArrowRight from "../../assets/emojis/arrow.png";

type IconProps = {
  className?: string;
};

export const PointRightIcon = ({ className }: IconProps) => {
  return <img src={PointRight} alt="point-right" className={className + ``} />;
};

export const ArrowRightIcon = ({ className }: IconProps) => {
  return <img src={ArrowRight} alt="arrow-right" className={className + ``} />;
};
