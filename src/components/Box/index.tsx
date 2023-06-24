import { Container } from "./styles";

interface BoxModelProps {
    children: React.ReactNode;
}

export function BoxModel({children}: BoxModelProps){
    return( 
        <Container>
            {children}
        </Container>
    );
}