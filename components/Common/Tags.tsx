import { Body } from './Text';

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className='flex gap-2 my-4 flex-wrap'>
      {tags.map((tag) => (
        <Body
          key={tag}
          className='py-1 px-2 border-dark border rounded font-medium font-inconsolata'
        >
          {tag}
        </Body>
      ))}
    </div>
  );
};

export default Tags;
