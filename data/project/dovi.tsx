import { HorizontalDivider } from '@/components/Common/Divider';
import Quote from '@/components/Common/Quote';
import { Body, SubHeading } from '@/components/Common/Text';

const Dovi = (
  <>
    <Quote>Spaced repetition language learning app</Quote>
    <SubHeading>Project Brief</SubHeading>
    <Body>
      Dovi is a spaced repetition application for learning new languages. It
      provides language translation feature, card management, and practice
      session. Using spaced repetition algorithm, the user could learn and
      remember words more effectively.
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
  </>
);

export default Dovi;
