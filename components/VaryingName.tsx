import { useState, useEffect } from 'react';
import { useVaryingName } from '../hooks';

interface Props {
  name1: string;
  name2: string;
}

export function VaryingName({ name1, name2 }: Props) {
  const [myname, setMyname] = useState(name1);
  const { timeoutIds, getIntervalId } = useVaryingName(name1, name2, setMyname);

  useEffect(() => {
    const intervalId = getIntervalId();

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
      clearInterval(intervalId);
    };
  }, []);

  return <span className="inline-block tracking-wide">{myname}</span>;
}
