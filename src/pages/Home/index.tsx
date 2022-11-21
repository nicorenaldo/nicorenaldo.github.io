import { PointRightIcon } from "../../components/Common/Icon";
import { Heading, Title } from "../../components/Common/Text";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-12 py-12 px-8 lg:pl-24 xl:pr-96">
        <Heading className="">Hello!</Heading>
        <Heading>
          I'm <span className="font-bold">Nico Renaldo</span>, a software
          engineer focused on building creative solutions through technology
        </Heading>
        <div className="flex gap-2 flex-wrap">
          <Title>Get in touch</Title>
          <PointRightIcon className="w-auto h-7" />
          <Title className="px-2 lg:mx-2 transition-all shadow-[inset_0px_-3px_0px_0px_#007bff] hover:shadow-[inset_0px_-30px_0px_0px_#007bff] hover:text-white cursor-pointer duration-300">
            <a href="mailto:nicorenald@gmail.com">nicorenald@gmail.com</a>
          </Title>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
