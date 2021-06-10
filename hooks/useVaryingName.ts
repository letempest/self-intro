import { useState } from 'react';

export function useVaryingName(
  name1: string,
  name2: string,
  setName: (prev: string) => void
) {
  const [_myname, setMyname] = useState(name1);

  const timeoutIds: ReturnType<typeof setTimeout>[] = [];

  const getIntervalId = () =>
    setInterval(
      (function oneround() {
        const addpart = (spanStr: string) => {
          const arr = spanStr.split('');
          arr.forEach((char, idx) => {
            timeoutIds.push(
              setTimeout(() => {
                setMyname(prev => {
                  setName(prev + char);
                  return prev + char;
                });
              }, idx * 100)
            );
          });
        };
        const slicepart = (curName: string) => {
          for (let i = 1; i <= curName.length; i++) {
            // say i = 1, silce(0, -1) means slice from 0 to second to last element (last one not included)
            timeoutIds.push(
              setTimeout(() => {
                const slicedStr = curName.slice(0, -i);
                setMyname(slicedStr);
                setName(slicedStr);
              }, i * 100)
            );
          }
        };
        return (
          timeoutIds.push(setTimeout(slicepart.bind(null, name1), 3e3)),
          timeoutIds.push(setTimeout(addpart.bind(null, name2), 5e3)),
          timeoutIds.push(setTimeout(slicepart.bind(null, name2), 7e3)),
          timeoutIds.push(setTimeout(addpart.bind(null, name1), 8.5e3)),
          oneround
        );
      })(),
      1e4
    );

  return { timeoutIds, getIntervalId };
}
