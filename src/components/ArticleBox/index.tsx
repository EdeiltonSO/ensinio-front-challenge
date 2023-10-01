import Image from 'next/image';
import { Container } from "./styles";

interface ArticleBoxProps {
    iconSrc: string;
    title: string;
    description: string;
}

export default function ArticleBox({ iconSrc, title, description }: ArticleBoxProps) {
    return (
        <Container>
            <Image src={iconSrc} width={40} height={40} alt="" />
            <strong>{title}</strong>
            <p>{description}</p>
        </Container>
    )
}