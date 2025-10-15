import { useState } from "react";
import "./App.css";
import EventCard from "./components/EventCard";

function App() {
  const [count, setCount] = useState(0);

  // Ejemplo de eventos para mostrar varias tarjetas
  const events = [
    {
      title: "React Summit 2025",
      date: "Marzo 21, 2026",
      description: "Un evento para desarrolladores React con charlas sobre UI, UX, AI y más.",
      category: "Conferencia",
    },
    {
      title: "EventPulse Hackathon",
      date: "Abril 10, 2025",
      description: "Hackathon de 48 horas enfocado en desarrollo de apps con React y AWS.",
      category: "Hackathon",
    },
    {
      title: "UI/UX Workshop",
      date: "Mayo 5, 2025",
      description: "Taller práctico sobre diseño de interfaces y experiencia de usuario.",
      category: "Workshop",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-10 gap-10">
     
      <h1 className="text-3xl font-bold">Vite + React</h1>

      {/* Contador de prueba */}
      <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="text-sm text-gray-500">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Lista de EventCards con ElectricBorder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>

      <p className="text-gray-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
