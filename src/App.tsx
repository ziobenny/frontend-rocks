import { useState } from "react";


export const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("grande era dell'egitto"); 

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-3xl text-yellow-400 mb-4">
          {title}
          
        </h1>

        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://it.wikipedia.org/wiki/Piramide" target="_blank">
            <img src="data:image/jpeg;base64,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" width={50} height={40} alt="Vite logo" />
          </a>
          <a href="https://it.wikipedia.org/wiki/Egitto" target="_blank">
            <img src="data:image/png;base64,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" height="40px" width={50} alt="React logo" / >
          </a>
        </div>

        <h2 className="text-center font-bold text-xl mb-6"> corvetto casa egitto </h2>

        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-yellow-600 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            Hai premuto il pulsante {count} {count === 1 ? "volta" : "volte"}
          </button>
          <button onClick={() => setTitle("pizzeria egizziana")} className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-yellow-600 transition-colors">
            cambia titolo
          </button>
          
        </div>

        <p className="text-center text-sm text-yellow-400">Clicca sui loghi per saperne di più</p>
      </div>
    </div>
  );
}