import { ButtonHTMLAttributes, ReactNode } from "react"
import { Container } from "./styles";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export default function SecondaryButton({ children, ...props }: SecondaryButtonProps) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}