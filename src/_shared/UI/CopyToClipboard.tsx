import { useCallback } from "react";
import {
  CopyToClipboard as ReactCopyToClipboard,
  Props as DefaultProps,
} from "react-copy-to-clipboard";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactChild;
  textToCopy: string;
  onCopy?: (text: string, result: boolean) => void;
  //   options?: Options | undefined;
  showNotifica?: boolean;
  notificationText?: string;
} & Partial<DefaultProps>;

export const CopyToClipboard: React.FC<Props> = ({
  children,
  textToCopy,
  options,
  onCopy,
  showNotifica,
  notificationText,
  ...rest
}) => {
  const onCopyInternal = useCallback((text: string, result: boolean) => {
    if (onCopy) {
      onCopy(text, result);
    }
    if (showNotifica) {
      toast.success("Copied to clipboard ! ");
    }
  }, []);

  return (
    <ReactCopyToClipboard
      {...rest}
      text={textToCopy}
      onCopy={onCopyInternal}
      options={options}
    >
      {children}
    </ReactCopyToClipboard>
  );
};
CopyToClipboard.defaultProps = {
  showNotifica: true,
};
