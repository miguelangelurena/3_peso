import { useEffect, useState } from "react";

const TRANSITIONS = [
  { step: 0, duration: 2000 },
  { step: 1, duration: 2000 },
  { step: 2, duration: 0 },
];

export const useSteps = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const transitions = TRANSITIONS.reduce<{
      total: number;
      timeouts: NodeJS.Timeout[];
    }>(
      (acc, transition) => {
        const timeout = setTimeout(() => setSteps(transition.step), acc.total);
        return {
          total: acc.total + transition.duration,
          timeouts: [...acc.timeouts, timeout],
        };
      },
      { total: 0, timeouts: [] },
    );

    return () => transitions.timeouts.forEach(clearTimeout);
  }, []);

  return steps;
};
