import React, { useState } from 'react';

function GameFormSubmit() {
  const [gameTitle, setGameTitle] = useState('');
  const [ratings, setRatings] = useState('');
  const [review, setReview] = useState('');

  const SubmitForm = (event) => {
    event.preventDefault();
    // do something with the form data here
  }

  return (
    <form onSubmit={SubmitForm}>
      <label>
        Game Title:
        <input
          type="text"
          value={gameTitle}
          onChange={(event) => setGameTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Ratings:
        <input
          type="text"
          value={ratings}
          onChange={(event) => setRatings(event.target.value)}
        />
      </label>
      <br />
      <label>
        Review:
        <textarea
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </label>
      <br />
      <button onClick={SubmitForm}>Submit Form</button>
    </form>
  );
}

export {GameFormSubmit};