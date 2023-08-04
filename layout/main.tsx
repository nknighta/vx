import { Box } from "@chakra-ui/react";
import VARIUSHeader from "../components/header";

export default function MainLayout ({children}) {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <Box color={"#fff"}>
                <VARIUSHeader/>
            </Box>
            {children}
        </div>
    )
}