import Link from 'next/link';
import Image from 'next/image';

import { VaryingName } from '../components';

interface ListProps {
  timespan: string;
  role: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  odd?: boolean;
  objectPosition?: string;
  className?: string;
}

// not reusable at all, no need to refactor into its own component
const ListComponent = ({
  timespan,
  role,
  desc,
  imgSrc,
  imgAlt,
  odd,
  objectPosition = '50% 50%',
  className = 'rounded-full'
}: ListProps) => {
  const sidedClassName =
    'mt-44 lg:mt-0 mb-12 lg:mb-0 bg-white dark:bg-gray-800 lg:max-w-[300px] z-10' +
    (!odd
      ? ' lg:ml-[500px] xl:ml-[520px] lg:text-left'
      : ' lg:mr-[500px] xl:mr-[520px] lg:text-right');

  return (
    <li className="flex flex-col lg:flex-row items-center lg:items-start max-w-[400px] lg:max-w-none lg:min-h-[220px]">
      <div className="absolute left-1/2 ml-[-64px] w-32 h-32 lg:order-last z-20">
        {/* ml-[-vpx], where v should be [w-32] * 4 / 2, to ensure the image is centered */}
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          objectPosition={objectPosition}
          alt={imgAlt}
          aria-hidden="true"
          className={className}
        />
      </div>
      <div className={sidedClassName}>
        <h4 className="mt-3 font-bold">{timespan}</h4>
        <h4 className="mt-1 font-bold">{role}</h4>
        <p className="my-3" dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </li>
  );
};

export default function Home() {
  const listComArr: ListProps[] = [
    {
      timespan: '2010 - 2014',
      role: 'Undergraduate',
      desc: "I graduated with a bachalor's degree in <em>Mechanical Design, Manufacture & Automation</em>.",
      imgSrc: '/static/images/home/hnu.jpg',
      imgAlt: 'undergraduate - hunan university'
    },
    {
      timespan: '2014 - 2016',
      role: 'Vehicle Engineer in Zhejiang',
      desc: 'Took charge of various vehicle comonents performance test, e.g. physical / functional / durability test of brake system / chassis parts / rear-view mirrors&nbsp;etc.',
      imgSrc: '/static/images/home/machine.jpg',
      imgAlt: 'First job as a vehicle testing engineer',
      objectPosition: 'left bottom'
    },
    {
      timespan: '2016 - 2017',
      role: 'Postgraduate',
      desc: 'Obtained my MSc degree in <em>Mechanical Engineering</em>.',
      imgSrc: '/static/images/home/HKUST.jpg',
      imgAlt: 'postgraduate study at HKUST',
      objectPosition: 'left bottom'
    },
    {
      timespan: '2017 - 2019',
      role: 'Graduate Engineer in Hong Kong',
      desc: "Worked for Dynasafe Demil Systems AB's distributor, made presentation for demilitarization/off-gas treament solution; made preparation for industrial exhibitions; provided quotation and followed up maintenance demand.",
      imgSrc: '/static/images/home/demil.jpg',
      imgAlt: 'graduate engineer at Hong Kong'
    },
    {
      timespan: '2020 till now',
      role: 'Learning web development',
      desc: 'Been continuously learning about modern fullstack development workflow, got my hands dirty by writing React, Node.js and GraphQL&nbsp;code.',
      imgSrc: '/static/images/home/coding.jpg',
      imgAlt: 'next web developer to change the world'
    }
  ];

  return (
    <div className="mx-6 md:mx-12 lg:mx-6 text-sm md:text-base">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        <span>Hi, I'm</span>
        <span>&ensp;</span>
        <VaryingName name1="Liao Jianjian" name2="Jesse L" />
      </h1>
      <p className="py-2 lg:text-lg">
        I'm a developer, cyclist and sailor. You just found a slice of the
        internet which prove my existence - keep on reading to reveal my career
        history or{' '}
        <Link href="/about">
          <a className="underline font-medium text-blue-400">
            learn&nbsp;more about me.
          </a>
        </Link>
      </p>
      <p className="lg:text-lg">
        I have worked in mechanical industry since graduation for a few years,
        but decided to switch my career into a developer role to actually create
        something awesome. I'm curious about trending technologies and also a
        quick learner, which combining together means I am capable of working
        with React, GraphQL and TypeScript; possess sufficient knowledge of
        Docker & Kubernetes; and last but not least, I'm a fan of microservices
        architecture.
      </p>
      <hr className="border-t-1 border-coolGray-400 my-8" />
      <div className="flex flex-col items-center text-center pb-12 md:pb-20 px-4">
        <div className="pb-12">
          <h2 className="text-lg md:text-xl lg:text-2xl">VITA</h2>
          <h3 className="mt-2 text-sm uppercase">my professional story.</h3>
        </div>
        <div className="relative">
          <ul className="flex flex-col relative">
            <li
              className="absolute left-[49.85%] top-0 bottom-0 w-0.5 bg-coolGray-300"
              aria-hidden="true"
            ></li>
            {listComArr.map((props, idx) => (
              <ListComponent {...props} odd={idx % 2 !== 0} key={idx} />
            ))}
            <li className="relative pt-4 font-bold bg-white dark:bg-gray-800">
              <h4>Be part of my story.</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
