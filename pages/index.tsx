import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useVaryingName } from '../hooks';

interface ListProps {
  timespan: string;
  role: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  odd?: boolean;
}

// not reusable at all, no need to refactor into its own component
const ListComponent = ({
  timespan,
  role,
  desc,
  imgSrc,
  imgAlt,
  odd
}: ListProps) => {
  const sidedClassName =
    'mt-10 mb-16 lg:mt-0 bg-white dark:bg-gray-800 lg:max-w-[240px] z-10' +
    (odd ? ' lg:ml-[450px] lg:text-left' : ' lg:mr-[450px] lg:text-right');
  return (
    <li className="flex flex-col lg:flex-row items-center lg:items-start max-w-[400px] lg:max-w-none">
      <div className="lg:absolute lg:left-1/2 lg:ml-[-70px] lg:order-last z-20">
        {/* lg:ml-[-vpx], where v should be half of image width below for image to center */}
        <Image
          src={imgSrc}
          width="140"
          height="140"
          alt={imgAlt}
          aria-hidden="true"
          className="rounded-full"
        />
      </div>
      <div className={sidedClassName}>
        <h4 className="mt-3 font-bold">{timespan}</h4>
        <h4 className="mt-3 font-bold">{role}</h4>
        <p className="my-4">{desc}</p>
      </div>
    </li>
  );
};

export default function Home() {
  const [myname, setMyname] = useState('Liao Jianjian');
  const { timeoutIds, getIntervalId } = useVaryingName(
    'Liao Jianjian',
    '廖 健 健',
    setMyname
  );

  useEffect(() => {
    const intervalId = getIntervalId();

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
      clearInterval(intervalId);
    };
  }, []);

  const listComArr: ListProps[] = [
    {
      timespan: '2010 - 2014',
      role: 'U grad',
      desc: 'I graduated with a master of science in computer science. Lots of this knowledge can be applied for more complex problems in client-server architectures.',
      imgSrc: '/hnu.jpg',
      imgAlt: 'undergraduate - hunan university'
    },
    {
      timespan: '2010 - 2014',
      role: 'U grad',
      desc: 'I graduated with a master of science in computer science. Lots of this knowledge can be applied for more complex problems in client-server architectures.',
      imgSrc: '/hnu.jpg',
      imgAlt: 'undergraduate - hunan university'
    },
    {
      timespan: '2010 - 2014',
      role: 'U grad',
      desc: 'I graduated with a master of science in computer science. Lots of this knowledge can be applied for more complex problems in client-server architectures.',
      imgSrc: '/hnu.jpg',
      imgAlt: 'undergraduate - hunan university'
    },
    {
      timespan: '2010 - 2014',
      role: 'U grad',
      desc: 'I graduated with a master of science in computer science. Lots of this knowledge can be applied for more complex problems in client-server architectures.',
      imgSrc: '/hnu.jpg',
      imgAlt: 'undergraduate - hunan university'
    },
    {
      timespan: '2010 - 2014',
      role: 'U grad',
      desc: 'I graduated with a master of science in computer science. Lots of this knowledge can be applied for more complex problems in client-server architectures.',
      imgSrc: '/hnu.jpg',
      imgAlt: 'undergraduate - hunan university'
    }
  ];

  return (
    <div className="mx-8 md:mx-12 lg:mx-6">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        <span>Hi, I'm</span>
        <span>&ensp;</span>
        <span className="inline-block tracking-wide">{myname}</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        doloribus consequatur ab rem, neque nesciunt repellendus? Aperiam
        dolores sit voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
        dolorem numquam ipsum explicabo quaerat assumenda non sed quia
        laboriosam suscipit! Autem labore nam corrupti id, nulla minima quas
        laboriosam quasi eautem nobis aliquid sit rem, suscipit architecto
        similique dolores molestias quis magnam, maxime veniam eligendi dicta!
        Impedit vel soluta quo laborum magni distinctio error aspernatur at
        culpa? Modi inventore reprehenderit ullam maiores? Provident aut sequi,
        dolore non dolorum, iure doloremque dolor aliquam pariatur rerum
        voluptas exercitationem cumque omnis at!
      </p>
      <hr className="border-t-1 border-coolGray-400 my-8" />
      <div className="flex flex-col items-center text-center pb-12 md:pb-20 px-4">
        <div className="pb-12">
          <h2>VITA</h2>
          <h3 className="uppercase">my professional story.</h3>
        </div>
        <div className="relative">
          <ul className="relative">
            <li
              className="absolute left-[49.85%] top-0 bottom-0 w-0.5 bg-coolGray-300"
              aria-hidden="true"
            ></li>
            {listComArr.map(({ timespan, role, desc, imgSrc, imgAlt }, idx) => (
              <ListComponent
                timespan={timespan}
                role={role}
                desc={desc}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                odd={idx % 2 !== 0}
                key={idx}
              />
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
