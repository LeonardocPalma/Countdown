/* eslint-disable react-hooks/rules-of-hooks */
import Title from "../components/title";
import Counter from "../components/counter";

import useCountdown from "../hooks/useCountdown";

import { CountdownContext } from "../context/CountdownContext";

import { useContext } from "react";

import { Navigate } from "react-router-dom";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) {
    return <Navigate to="/" />;
  }

  const evenTitle = event.title;

  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={evenTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
