import tw from "tailwind-styled-components";

export const Heading = tw.h2<any>`
    font-bold
    lg:text-5xl
    text-3xl
`;

export const SubHeading = tw.h3<any>`
    mt-8
    font-bold
    lg:text-2xl
    text-xl
`;

export const Title = tw.h4<any>`
    font-bold
    text-lg
`;

export const Body = tw.p<any>`
    font-light
`;
