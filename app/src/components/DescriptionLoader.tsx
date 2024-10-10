import { Box, Loader } from "@mantine/core";

export function DescriptionLoader() {

    const InternalLoader = () => {
        return (
            <>
            <Loader color="gray" type="dots"/>
            <Loader color="gray" type="dots"/>
            <Loader color="gray" type="dots"/>
            <Loader color="gray" type="dots"/>
            <Loader color="gray" type="dots"/>
            </>

        )
    }

    return (
        <Box>
          <InternalLoader/>
        </Box>
      );
}