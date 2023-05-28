type DividerProps = {
  className?: string;
};

export const HorizontalDivider = ({ className }: DividerProps) => {
  return <hr className={`my-4 ${className}`} />;
};
