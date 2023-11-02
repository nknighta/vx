import { Box } from "@chakra-ui/react";
import VARIUSHeader from "../components/header";

<<<<<<< HEAD
interface Props {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div>
            <ChakraProvider theme={theme}>
                <VARIUSHeader/>
                {children}
            </ChakraProvider>
=======
export default function MainLayout ({children}) {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <Box color={"#fff"}>
                <VARIUSHeader/>
            </Box>
            {children}
>>>>>>> 281172ba5c13b86e33d1c36c5851d271d50837c2
        </div>
    )
}