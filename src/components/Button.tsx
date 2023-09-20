interface Props {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  border?: string;
  textColor?: string;
}
const Button = (props: Props) => {
  const { label, iconURL, backgroundColor, border, textColor } = props;
  return (
    <button
      className={`flex rounded-full justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? backgroundColor + " " + textColor + " " + border
          : "bg-coral-red  text-white border-coral-red"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="icon url"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
