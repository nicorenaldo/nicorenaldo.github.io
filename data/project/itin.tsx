import Carousel from '@/components/Common/Carousel';
import { HorizontalDivider } from '@/components/Common/Divider';
import Quote from '@/components/Common/Quote';
import { Body, SubHeading } from '@/components/Common/Text';

import itinBrowse from '@/public/images/project/itin-browse.webp';
import itinCreate from '@/public/images/project/itin-create.webp';
import itinItem from '@/public/images/project/itin-item.webp';
import itinModify from '@/public/images/project/itin-modify.webp';
import itinBook from '@/public/images/project/itin-book.webp';

const Itin = (
  <>
    <Quote>
      A trip planning web application to easily make, share, and browse
      itineraries
    </Quote>
    <SubHeading>Project Brief</SubHeading>
    <Body>
      Itin is a trip planning web application to easily make, share, and browse
      itineraries. Users could make their own itinerary, share it with friends
      and public, and take inspiration from others.
    </Body>
    <Body>
      Link to{' '}
      <a
        className='underline'
        href='https://itin.netlify.app/'
        aria-label='Itin Preview Website'
      >
        Project Demo
      </a>
    </Body>
    <HorizontalDivider />
    <Body>
      Itin is created using Django for backend, and Nuxt.js for frontend side.
      Most people plan their trip using notepad, google search and maps. This
      old-fashioned way of making itinerary is inflexible, having to switch to
      many applications and making changes burdensome. Itin provides a way for
      people to make their itinerary in one place, where user could search
      destinations, write notes, see suggestions and sharing it to friends.
    </Body>

    <SubHeading>Photos</SubHeading>
    <Carousel
      cover={false}
      images={[itinBrowse, itinBook, itinCreate, itinItem, itinModify]}
    />
  </>
);

export default Itin;
