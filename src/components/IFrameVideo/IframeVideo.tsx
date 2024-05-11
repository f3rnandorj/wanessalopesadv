import { DetailedHTMLProps, IframeHTMLAttributes } from "react";

type IFrameProps = DetailedHTMLProps<
  IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
>;
interface IFrameVideoProps extends IFrameProps {}

export function IframeVideo({
  height = 197,
  width = 351,
  src,
  ...iFrameVideoProps
}: IFrameVideoProps) {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      {...iFrameVideoProps}
    />
  );
}
