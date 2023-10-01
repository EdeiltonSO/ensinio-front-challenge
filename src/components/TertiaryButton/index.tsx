import { ReactNode } from "react"
import { Container } from "./styles";

interface TertiaryButtonProps {
    children: ReactNode;
}

export default function TertiaryButton({ children }: TertiaryButtonProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}