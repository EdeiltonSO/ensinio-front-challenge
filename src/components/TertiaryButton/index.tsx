import { ButtonHTMLAttributes, ReactNode } from "react"
import { Container } from "./styles";

interface TertiaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export default function TertiaryButton({ children, ...props }: TertiaryButtonProps) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}