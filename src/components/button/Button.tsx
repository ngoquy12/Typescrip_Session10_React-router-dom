import "./button.css";

type Style = {
  background?: string;
};

const Button: React.FC<{
  title: string;
  background?: string;
  type: string;
}> = ({ title, background, type }) => {
  // Khai báo đối tượng style chứa các thuộc tính css
  const style: Style = {
    background: background,
  };

  return (
    <>
      <button style={style} className={`q-button q-button-${type}`}>
        {title}
      </button>
    </>
  );
};
export default Button;
