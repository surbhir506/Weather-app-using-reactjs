import { Button, Center, Flex, Icon, Input, useToast, Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity, getWeatherByLocation } from "../redux/actions";
import { HiLocationMarker } from "react-icons/hi";

export const Navbar = () => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChnage = () => {
        dispatch(getWeatherByCity(city, toast));
    }

    const handleLocationData = () => {
        dispatch(getWeatherByLocation(toast));
    }

    return (
        <Flex p={'10px'} minH={'70px'} bg={'#8644A2'} justifyContent={'space-between'} alignItems={'center'} flexDirection={['column', 'row']} gap={['10px', '0px']}>
            {/* Logo Section */}
            <Box ml={'20px'}> {/* Adjusted the margin-left to move the logo slightly to the right */}
                <Image src="weatherlogo.png" alt="Logo" h="50px" />
            </Box>
            
            {/* Search Section */}
            <Center px={'10px'}>
                <Input
                    onKeyPress={({ key }) => { key === "Enter" ? handleChnage() : undefined }}
                    onInput={(e) => { setCity(e.target.value) }}
                    value={city}
                    borderRadius={'15px 0px 0px 15px'}
                    bg={'white'}
                    _focus={{ 'border': 'none' }}
                    placeholder="City"
                />
                <Button
                    onClick={handleChnage}
                    borderRadius={'0px 15px 15px 0px'}
                    color={'white'}
                    bg={'#35155D'}
                    _hover={{ 'bg': '#35155D' }}
                >
                    Search
                </Button>
            </Center>

            {/* Location Section */}
            <Center px={'10px'}>
                <Button
                    bg={'#35155D'}
                    _hover={{ 'bg': '#35155D' }}
                    color={'white'}
                    w={'100%'}
                    borderRadius={'15px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}
                    onClick={handleLocationData}
                >
                    Your Location Weather
                </Button>
            </Center>
        </Flex >
    );
};
