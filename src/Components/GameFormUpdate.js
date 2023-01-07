import React, { useState } from 'react';

function GameFormUpadte() {
  const [gameTitle, setGameTitle] = useState('');
  const [ratings, setRatings] = useState('');
  const [review, setReview] = useState('');

  const UpdateForm = (event) => {
    event.preventDefault();
    // do something with the form data here
  }

  const DeleteForm = (event) => {
    event.preventDefault();
    // do something with the form data here
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button onClick={UpdateForm}>Update Form</button>
      <button onClick={DeleteForm}>Delete Form</button>
    </form>
  );
}

export {GameFormUpdate};