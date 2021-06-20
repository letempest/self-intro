import { Collapse } from 'components';

export default function Techstack() {
  return (
    <div className="mx-6 md:mx-8 md:text-lg">
      <h1 className="mb-6 font-bold text-2xl md:text-4xl">Tech Stack</h1>
      <h2 className="mb-4 font-semibold text-lg md:text-2xl">
        Stack Used To Build This Site
      </h2>
      <p>
        In case you are interested in the language or technologies stack that's
        used to build this site and my thought behind, look no further, I'm
        happy to share it here.
      </p>
      <h3 className="mt-9 mb-3 text-lg font-semibold md:text-xl">Frameworks</h3>
      <ul className="pl-8 list-disc space-y-4">
        <Collapse title="Next.js" show={true}>
          <p className="pl-4 text-sm md:text-base">
            Out of the box support for image optimization, router setup, and
            super easy to write server-side rendering logic (though this site
            doesn't get any backend data to play with atm so no chance to
            showcase SSR yet)
          </p>
        </Collapse>
        <Collapse title="tailwind">
          <p className="pl-4 text-sm md:text-base">
            I deliberately select this CSS framework for its elegant
            conciseness. Typing way less than vanilla CSS to construct the
            layout and coloring with my choice, instead of being fed a bunch of
            opinionated preconfigured classes by other frameworks like
            bootstrap, or even pre-configured component from ant-design. And one
            thing I'm pretty sure now is that one who possesses the ability to
            layout (and style) a SPA with only tailwind utility classes (yep
            that's me) can also work well with other dummy CSS frameworks, but
            not vice versa.
          </p>
        </Collapse>
      </ul>
      <h3 className="mt-9 mb-3 text-lg font-semibold md:text-xl">Language</h3>
      <ul className="pl-8 list-disc">
        <Collapse title="TypeScript">
          <p className="pl-4 text-sm md:text-base">
            Type a bit more than vanilla JavaScript, yet spend way less time on
            runtime debugging. Although a tiny project at this scale does not
            seem to benefit much, once there's multiple external api to work
            with and data start to flow, I just cannot imagine a life without
            typescript.
          </p>
        </Collapse>
      </ul>
      <h3 className="mt-9 mb-3 text-lg font-semibold md:text-xl">Deployment</h3>
      <ul className="pl-8 list-disc">
        <li>
          <h4 className="font-semibold">Vercel</h4>
        </li>
        <li>
          <h4>
            <span className="font-semibold">Github</span>{' '}
            <span className="text-base">
              (code hosting and Github Action for docker image publication)
            </span>
          </h4>
        </li>
      </ul>
      <hr className="my-12 border-t-4" />
      <h2 className="mb-4 font-semibold text-lg md:text-2xl">
        Web Development Skill Set
      </h2>
      <h3 className="mb-2 italic">
        Skills not presented in this project yet I have.
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        magnam consequuntur minus sunt facilis sequi natus fuga itaque modi?
        Nulla.
      </p>
    </div>
  );
}
