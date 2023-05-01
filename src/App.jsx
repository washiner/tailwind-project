function App() {
  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center">
      <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 rounded-md">
        <div className="flex flex-row items-center">
          <img
            className="w-24 rounded-full"
            alt="foto"
            src="https://github.com/washiner.png"
          />

          <div className="ml-4">
            <h3 className="font-semibold text-xl">Washiner</h3>
            <h4 className="text-indigo-300 pt-1">Front-End Developer</h4>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibol text-2xl mb-2 ">Bio</h2>
          <p className="text-gray-300 font-light mt-1 max-w-lg text-justify">
          Washiner é um desenvolvedor front-end com experiência em HTML, CSS e JavaScript.
           Ele tem habilidades em UI/UX design e é apaixonado por criar interfaces atraentes
            e funcionais.
          </p>
        </div>
        <div className="mt-6">
        <h2 className="font-semibol text-2xl mb-2 ">Career</h2>
        <div className="mt-4">
          <h3 className="text-yellow-500 font-medium text-xl mt-1">
            Prefeitura de Cuiabá
          </h3>
          <ul className="list-disc list-inside pl-4">
            <li className="list-item">Analista de Sistemas </li>
            <li className="list-item">Suporte Técnico</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-yellow-500 font-medium text-xl mt-1">
            Gorverno do Estado de Mato Grosso
          </h3>
          <ul className="list-disc list-inside pl-4">
            <li className="list-item">Analista de Sistemas</li>
            <li className="list-item">Linux Specialist</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
