interface Props {
  message: string;
  type: "info" | "success" | "error";
}

const Toast = ({ message, type }: Props) => {
  return (
    <div className="toast toast-end">
      <div className="alert alert-info">
        <span>New mail arrived.</span>
      </div>
    </div>
  );
};

export default Toast;
