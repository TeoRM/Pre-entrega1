import { Flex } from "@chakra-ui/react";
import { IoIosCart } from "react-icons/io";

export const CartWidget = () => {
    return (
        <Flex
            alignItems={"center"}
            fontSize={25}
            marginRight={"10px"}
            justifyContent={"space-between"}
            width={"50px"}
        >
            <IoIosCart />
            <div>0</div>
        </Flex>
    );
};
