import { ReactNode } from "react"
import { Container } from "./styles";

interface SecondaryButtonProps {
    children: ReactNode;
}

export default function SecondaryButton({ children }: SecondaryButtonProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}