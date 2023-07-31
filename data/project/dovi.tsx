import Carousel from '@/components/Common/Carousel';
import { HorizontalDivider } from '@/components/Common/Divider';
import Quote from '@/components/Common/Quote';
import { Body, SubHeading } from '@/components/Common/Text';

import doviFeature1 from '@/public/images/project/dovi-feature1.webp';
import doviFeature2 from '@/public/images/project/dovi-feature2.webp';
import doviThumbnail from '@/public/images/project/dovi-thumbnail.webp';
import Link from 'next/link';

const Dovi = (
  <>
    <Quote>
      Powerful, intelligent flash cards made specially for language learning
    </Quote>
    <SubHeading>Project Brief</SubHeading>
    <Body>
      Dovi is a flashcard app made specially for language learning. It utilizes
      spaced repetition to increase learning efficiency, and helps user in
      managing the words they remember through card management and auto
      translation.
    </Body>
    <HorizontalDivider />

    <Body>
      Spaced repetition is a popular learning strategy where lessons are
      repeatedly reviewed at increasing intervals to ensure that important
      lessons are unforgettable. This strategy help filling in learning gaps
      among learners in every recap session until the material is
      well-remembered and fully understood.
    </Body>
    <Body>
      The repetition algorithm is partly adopted from{' '}
      <a
        className='underline'
        href='https://apps.ankiweb.net/'
        aria-label='Anki Official Website'
      >
        Anki
      </a>
      , a popular open-source spaced repetition apps.
    </Body>
    <Body>
      The motivation behind the development of Dovi is to provide an easy-to-use
      learning application where user can write their day-to-day words used,
      translate it automatically, and review it on their spare time. All in one
      application.
    </Body>

    <SubHeading>Links</SubHeading>
    <Link href='https://www.doviflashcard.com/'>Project's Website</Link>

    <SubHeading>Photos</SubHeading>
    <Carousel
      cover={false}
      images={[doviThumbnail, doviFeature1, doviFeature2]}
    />
  </>
);

export default Dovi;
