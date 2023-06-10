import Carousel from '@/components/Common/Carousel';
import { HorizontalDivider } from '@/components/Common/Divider';
import Quote from '@/components/Common/Quote';
import { Body, SubHeading } from '@/components/Common/Text';

import ayolombaAbout from '@/public/images/project/ayolomba-about.webp';
import ayolombaForm from '@/public/images/project/ayolomba-form.webp';
import ayolombaLomba from '@/public/images/project/ayolomba-lomba.webp';
import ayolombaSearch from '@/public/images/project/ayolomba-search.webp';

const AyoLomba = (
  <>
    <Quote>
      A centralized web platform to manage competition registration and
      advertising
    </Quote>
    <SubHeading>Project Brief</SubHeading>
    <Body>
      <span className='font-bold'>AyoLomba!</span> is a web platform to
      accomodate event organizers and students across Indonesia to post and
      search competitions, scholarships, and webinars with better experience.
      Members can find the event they want based on their preferences, AyoLomba!
      also helps out organizers to reach their audience, using sleek UI and many
      features to help out both parties.
    </Body>
    <Body>
      Link to{' '}
      <a
        className='font-bold underline'
        href='https://ayolomba-id.herokuapp.com/'
        aria-label='AyoLomba Demo App'
      >
        Project Demo
      </a>
    </Body>
    <HorizontalDivider />
    <Body>
      AyoLomba! is created using Django and hosted on Heroku. While there are
      many option to find information about events, most of them rely on social
      media like Instagram and Line that doesn't have any filtering feature.
      This is why we are motivated to create a dedicated platform using web and
      android app, that solve this irritable issue. This project is made prior
      to the emerging giant Sejuta Cita which holds the same concept with us.
    </Body>

    <SubHeading>Photos</SubHeading>
    <Carousel
      cover={false}
      images={[ayolombaAbout, ayolombaForm, ayolombaLomba, ayolombaSearch]}
    />
  </>
);

export default AyoLomba;
