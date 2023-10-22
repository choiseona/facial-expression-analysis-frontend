import tw from "twin.macro";
import styled from "styled-components";

export const Button = styled.button`
  ${tw`
    bg-transparent
    rounded-sm
    border
    border-blue-500
    text-blue-500
    border-solid
    m-1
    px-4
    py-1
  `}
`;
