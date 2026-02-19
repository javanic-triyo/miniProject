import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

interface CountdownProps {
  targetDate: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = differenceInSeconds(new Date(targetDate), new Date());

      const d = Math.floor(diff / (3600 * 24));
      const h = Math.floor((diff % (3600 * 24)) / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center sm:justify-start text-center">
      {Object.entries(timeLeft).map(([label, val]) => (
        <div key={label}>
          <div className="text-3xl font-bold">{val}</div>
          <div className="text-sm text-gray-500 capitalize">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
