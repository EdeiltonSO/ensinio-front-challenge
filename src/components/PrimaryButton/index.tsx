import { ReactNode } from "react"
import { Container } from "./styles";

interface PrimaryButtonProps {
    children: ReactNode;
}

export default function PrimaryButton({ children }: PrimaryButtonProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}