import { Box } from "@chakra-ui/react";
import VARIUSHeader from "../components/header";

export default function MainLayout ({children}) {
    return (
        <div>
            <Box color={"#fff"}>
                <VARIUSHeader/>
            </Box>
            {children}
        </div>
    )
}