import tw from 'tailwind-styled-components';

export const Heading = tw.h2<any>`
    mt-2
    mb-0    
    font-bold
    text-2xl
    lg:text-3xl
    xl:text-4xl
`;

export const SubHeading = tw.h3<any>`
    mt-2
    mb-0
    font-bold
    lg:text-xl
    xl:text-2xl
    text-xl
`;

export const Title = tw.h4<any>`
    my-0
    font-bold
    lg:text-lg
    text-base
`;

export const Body = tw.p<any>`
    my-0
    font-light
    lg:text-base
    text-sm
`;

export const Caption = tw.p<any>`
    my-0
    font-light
    text-xs
`;
