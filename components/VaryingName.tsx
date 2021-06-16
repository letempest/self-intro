import { useState, useEffect } from 'react';
import { useVaryingName } from '../hooks';

interface Props {
  name1: string;
  name2: string;
}

export function VaryingName({ name1, name2 }: Props) {
  const [myname, setMyname] = useState(name1);
  const startLoop = useVaryingName(name1, name2, setMyname);

  useEffect(() => {
    startLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className="inline-block tracking-wide">{myname}</span>;
}
