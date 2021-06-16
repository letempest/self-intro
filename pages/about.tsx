/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { useWindowDimensions } from '../hooks';

interface GridImage {
  src: string;
  alt: string;
  objectPosition?: string;
}

const About = () => {
  const { width } = useWindowDimensions();

  const mobileGrid: GridImage[] = [
    {
      src: '/static/images/about/cycling_2.jpg',
      alt: 'on my way to Lhasa, just climbed up a mountain',
      objectPosition: '50% 90%'
    },
    { src: '/static/images/about/kayak_1.jpg', alt: 'sea kayak trip' },
    { src: '/static/images/about/windsurf_1.jpg', alt: 'learning windsurfing' },
    {
      src: '/static/images/about/cycling_1.jpg',
      alt: 'Tour Hai Nan trip, camped at a beautiful beach',
      objectPosition: '60% 80%'
    }
  ];

  return (
    <div className="flex flex-col mx-6 md:mx-8 pb-4 md:text-lg">
      <h1 className="leading-relaxed mb-2 text-2xl md:text-4xl font-medium dark:text-blue-200">
        About Me
      </h1>
      <div className="pb-4 text-gray-700 dark:text-gray-300 text-sm">
        <time dateTime="2021-06-12">June 12th, 2021</time>
      </div>
      <article className="pt-3">
        <p className="mb-3">
          Hi, I'm Liao Jianjian. I am a developer dedicated to learning latest
          programming tech for client-server architectures, all for creating
          awesome stuff and bringing positive impact on the world.
        </p>
        <p>
          I grew up in a small-town in Guangdong, southern China and went to
          school at Hunan University, graduating with a degree in Mechanical
          Engineering. After two years of work in vehicle industry, I went to
          Hong Kong and obtained my master degree in Mechanical Engineering in
          2017. The past two years I've learned and used JavaScript intensively
          to prepare myself for a career switch, and now I feel comfortable
          enough with modern web development workflow and am looking to become a
          fulltime web developer.
        </p>
        <hr className="my-4 w-full h-0.5 bg-gradient-to-r from-amber-400 via-teal-300 to-lime-300 dark:from-blue-500 dark:via-green-500 dark:to-purple-500" />
        <h2 className="m-2 text-xl md:text-2xl font-medium dark:text-blue-100">
          My private life 🎉
        </h2>
        <p className="mb-3">
          In my personal life, I am an outdoor sports enthusiast. Been finished
          a 2,000 km︎+ plateau cycling trip&#x02060;🚴🏽‍♂️ from Chengdu to Lhasa
          (route generally known as G318); being an advanced kayak certificate
          holder and can perform kayak roll🛶 in three ways (conventional Eskimo
          roll, reverse-sweep roll, and storm roll); can survive sailing a
          double-handed dinghy⛵ at sea with Force 5 wind blowing for awhile{' '}
          <span className="opacity-60">
            (ofc my fellow crewman has to be somewhat experienced too😆)
          </span>
          .{' '}
          <span className="font-semibold italic text-red-500">
            Yes,&nbsp;I know, I'm kinda crazy.
          </span>
        </p>
        {width && width <= 768 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 my-4">
            {mobileGrid.map((props, idx) => (
              <div className="relative w-[95%] md:w-full h-44" key={idx}>
                <Image
                  {...props}
                  layout="fill"
                  objectFit="cover"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        )}

        {width && width > 768 && (
          <div className="space-y-6">
            <div className="relative w-full h-72 dark:border-4 dark:border-gray-300">
              <Image
                src="/static/images/about/Collage_01.jpg"
                alt="outdoor experience - collage #1"
                layout="fill"
                objectFit="cover"
                objectPosition="10% 80%"
                aria-hidden="true"
              />
            </div>
            <div className="relative w-full h-64 dark:border-4 :dark:border-gray-300">
              <Image
                src="/static/images/about/Collage_02.jpg"
                alt="outdoor experience - collage #2"
                layout="fill"
                objectFit="cover"
                aria-hidden="true"
              />
            </div>
          </div>
        )}

        <p className="py-4">
          I look pretty happy in the pictures right? Maybe sometime in the
          future I would become a fulltime sailor working at the sea (which is a
          parallel future with slim but non-zero chance to happen&nbsp;😂), but
          before that, I think professional developer could be the second best
          choice for me to make a living and stay happy simultaneously&nbsp;😎.
          Let's code something awesome out!
        </p>
      </article>
    </div>
  );
};

export default About;
