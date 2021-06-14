import { useState, useEffect } from 'react';

export function useVaryingName(
  name1: string,
  name2: string,
  setName: (prev: string) => void
) {
  const [_myname, setMyname] = useState(name1);

  useEffect(() => {
    return () => {
      timeoutIds.map(id => clearTimeout(id));
      timeoutIds = [];
    };
  }, []);

  // let timeoutIds: ReturnType<typeof setTimeout>[] = [];
  let timeoutIds: number[] = [];

  const wait = async (ms: number): Promise<void> => {
    return new Promise(resolve => {
      timeoutIds.push(setTimeout(resolve, ms));
    });
  };

  const oneround = async () => {
    const addChar = async (spanStr: string) => {
      const arr = spanStr.split('');
      const ms = spanStr === name1 ? 100 : 200;
      for (const char of arr) {
        await wait(ms);
        setMyname(prev => {
          setName(prev + char);
          return prev + char;
        });
      }
    };

    const removeChar = async (curName: string) => {
      const ms = curName === name1 ? 100 : 200;
      for (let i = 1; i <= curName.length; i++) {
        // say i = 1, silce(0, -1) means slice from 0 to second to last element (last one not included)
        await wait(ms);
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

    timeoutIds = [];

    return oneround;
  };

  const loopWrapper = async () =>
    (async function loop() {
      // await wait(1e3);  e.g. 1e3, interval between every round, uncomment to apply
      // every round cycle takes 9100ms
      await oneround();
      loop();
    })();

  return loopWrapper;
}
