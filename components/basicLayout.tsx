import {getWindowWidth} from "../scripts/getWidth";
import {Text} from "@chakra-ui/react";

export const BasicElement = ({children, workstitle}: { children: any, workstitle: string }) => {
    const width:number = getWindowWidth();
    const dpadding:number = width > 850 ? 60 : 0;
    return (
        <div style={{
            marginTop: 30,
            marginBottom: 30,
            marginLeft: dpadding,
            marginRight: dpadding,
        }}>
            <Text fontFamily={"rem"} fontSize={29} textAlign={"center"} p={4}>
                {workstitle}
            </Text>
            <Text fontSize={23} textAlign={"center"} p={4} >
                {children}
            </Text>
        </div>
    )
};