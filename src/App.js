import React from "react";

function App() {
  const myName = "Анастасія";
  const favWebsite = { name: "Awwwards", url: "https://www.awwwards.com/" };

  const firstNumber = 39;
  const secondNumber = 27;
  const sum = firstNumber + secondNumber;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <h1>Моє ім'я: {myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>

      <img
        src={"https://cdn.pixabay.com/photo/2022/03/21/14/25/art-7083325_1280.jpg"}
        alt={"sky"}
        width={500}
      />

      <h4>Мій улюблений сайт: <a href={favWebsite.url} target="_blank">{favWebsite.name}</a></h4>

      <h4>Сума чисел:</h4>
      <p>{firstNumber} + {secondNumber} = {sum}</p>

      <h4>Список кольорів:</h4>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div >
  )
}

export default App;
