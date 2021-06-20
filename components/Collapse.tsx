import React, { useState } from 'react';

interface WrapperProps {
  title: string;
  children: React.ReactElement;
  show?: boolean;
}

const Collapse = (props: WrapperProps) => {
  const [show, setShow] = useState(props.show || false);

  const toggleShow = () => {
    setShow(prev => !prev);
  };

  return (
    <li>
      <h4
        className="inline-block font-semibold hover:cursor-pointer"
        onClick={toggleShow}
      >
        {props.title}{' '}
        <svg
          className={`inline-block opacity-80 ${
            show && 'transform-gpu rotate-90'
          }`}
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="right"
          width="10"
          height="10"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
        </svg>
      </h4>
      {show && props.children}
    </li>
  );
};

export { Collapse };
