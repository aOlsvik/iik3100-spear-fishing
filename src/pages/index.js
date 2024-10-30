import { useState } from 'react';

async function submitForm(e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const username = document.getElementById('brukernavn').value;
  const password = document.getElementById('passord').value;

  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result); // Handle successful response
  } else {
    console.error('Error logging in:', response.statusText); // Handle error response
  }
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src="/TIHLDE_LOGO_HVIT.png" alt="TIHLDE logo" />
        </div>
        <div className="links">
          <a href="/">Generelt</a>
          <a href="/about">Arrangementer</a>
          <a href="/about">Nyheter</a>
          <a href="/about">Karriere</a>
          <a href="/about">For bedrifter</a>
        </div>
        <div className="icons">
          <img id="svg1" src="/moon.svg" style={{fill: 'white', color:'white'}}/>
          <img src="/person.svg"/>
        </div>
      </nav>
      <main>
        <form onSubmit={submitForm}>
          <h2>Logg inn</h2>
          <p>Logg inn med ditt TIHLDE brukernavn og passord</p>

          <label htmlFor="brukernavn">Brukernavn <span>*</span></label>
          <input
            type="text"
            id="brukernavn"
            name="brukernavn"
            placeholder="Brukernavn"
            required
          />

          <label htmlFor="passord">Passord <span>*</span></label>
          <input
            type="password"
            id="passord"
            name="passord"
            placeholder="Passord"
            required
          />

          <button id="submit" type="submit">Logg inn</button>

          <div className="buttons">
            <button type="button">Glemt passord?</button>
            <button type="button">Registrer deg</button>
          </div>
        </form>
      </main>
    </>
  );
}
