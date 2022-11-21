import { Body } from "./Text";

type ImageCaptionProps = {
    src: string;
    caption: string;
    alt: string;
}

export const ImageCaption = ({ alt, src, caption }: ImageCaptionProps) => {
    return <div className="text-center my-4">
        <img src={src} alt={alt} />
        <Body className="italic">{caption}</Body>
    </div>
}