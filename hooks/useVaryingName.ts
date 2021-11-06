import { useState, useEffect, useRef } from 'react';

export function useVaryingName(
  name1: string,
  name2: string,
  setName: (_prev: string) => void
) {
  const [_myname, setMyname] = useState(name1);
  const timeoutIdsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timeoutIdsRef.current.map(id => clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, []);

  // let timeoutIds: ReturnType<typeof setTimeout>[] = [];

  const wait = async (ms: number): Promise<void> => {
    return new Promise(resolve => {
      timeoutIdsRef.current.push(setTimeout(resolve, ms));
    });
  };

  const oneround = async () => {
    const addChar = async (spanStr: string) => {
      const arr = spanStr.split('');
      for (const char of arr) {
        await wait(100);
        setMyname(prev => {
          setName(prev + char);
          return prev + char;
        });
      }
    };

    const removeChar = async (curName: string) => {
      for (let i = 1; i <= curName.length; i++) {
        // say i = 1, silce(0, -1) means slice from 0 to second to last element (last one not included)
        await wait(100);
        const slicedStr = curName.slice(0, -i);
        setMyname(slicedStr);
        setName(slicedStr);
      }
    };

    await wait(2e3);
    await removeChar(name1);

    await wait(1e3);
    await addChar(name2);

    await wait(1e3);
    await removeChar(name2);

    await wait(1e3);
    await addChar(name1);

    timeoutIdsRef.current = [];

    return oneround;
  };

  const loopWrapper = async () =>
    (async function loop() {
      // await wait(1e3);  e.g. 1e3, interval between every round, uncomment to apply
      // every round cycle takes 9000ms
      await oneround();
      loop();
    })();

  return loopWrapper;
}
