import { Image } from "@chakra-ui/react";
import { Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { APP_NAME } from "../config/constants";

function Logo(): ReactElement {
  return (
    <Link href="/">
      <a>
        <HStack spacing={0}>
          <Image
            src={"/images/logo_bolt_small.png"}
            height={["30px", "50px"]}
          />
          <Heading fontSize={["2xl", "3xl"]} color="#333333">
            {APP_NAME.toLowerCase()}
          </Heading>
        </HStack>
      </a>
    </Link>
  );
}

export default Logo;
