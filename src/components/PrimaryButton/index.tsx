import { ButtonHTMLAttributes, ReactNode } from "react"
import { Container } from "./styles";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export default function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}