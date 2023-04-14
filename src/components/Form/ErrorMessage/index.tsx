interface ErrorMessageProps {
  error?: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  if (!props.error) {
    return null;
  }

  return <span className="text-xs text-red-500 mt-1">{props.error}</span>;
};

export default ErrorMessage;
