import React from "react";
import { Redirect, Link } from "react-router-dom";

const Instructions = ({ location: { pathname } }) => {
  if (pathname !== "/instructions") {
    return <Redirect to="/instructions" />;
  }
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <section>
        <h2>Getting Started</h2>
        <p>Please Fork this sandbox to create your own (This will happen automatically when you start making edits). 
          On completion of your test, send your unique Fork (URL) back to us within the alloted time.</p>
        <h3>Overview</h3>
        <p>
          You have been provided a random number of players which are part of a Team Photo. We need to construct that Team Photo, based on the data provided in the API request (see below).
          Players are ordered by Height, and the number of players per row is determined based on the row_reference lookup provided in the API. The number of players, and therefore the number of rows will differ on every refresh.
          </p>

        <div className="wireframe">
          <img
            className="wireframe"
            alt="Edit React Developer Test"
            src="https://sif-web-assets-au.s3.ap-southeast-2.amazonaws.com/sandbox/2Eyy892.jpg"
          />
          </div>
        
        <p>
          A <strong>Requests</strong> component has been created for you as a
          starting place. Feel free to create additional files to componentize your solution. However, ensure
          that all logic around sorting records is handled in your own code. You should not need to modify any of the
          other existing files.
        </p>
      </section>
      <section>
        <h2>Getting Request Data</h2>
        <p>
          There are two functions exported from the API module for
          fetching requests. The first, "getRequests", returns a promise;
          whereas the second, "getRequestsSync", synchronously returns an array
          of requests. It is preferred to use the async version since it more
          closesly resembles a real-world scenario but handling async operations
          in React adds some complexity. 
        </p>
        <p>
        </p>
      </section>
      <section>
        <h2>Requirements</h2>
        <p>
          Please take the sample output and replicate based on your data set. For an example of how this should be done, <Link to="/wireframe">please see this example.</Link>
          If any requirements are unclear, you are free to make an assumption and proceed, but please advice on submission of anything that was not clear, and decisions you made based on your understanding.
        </p>
        <ol>
          <li>
            Create a Team Photo Frame Collection
            <ul>
              <li>
                Order all players by <i>height</i> descending, so the tallest player is Top Row Middle, to shortest player, Bottom Row Ottermost Seat. <Link to="/wireframe">(see example)</Link>.
              </li>
              <li>
                Start from the center of each ROW, and add succeeding players to the left and right most positions alternating until the row is full.
              </li>
              <li>
                Ensure each row has the right number of players based on the player count supplied in the row_reference object.
              </li>
            </ul>
          </li>
          <li>
            For each player, please display
            <ul>
              <li>full name</li><li>Height</li> <li>Image</li>
            </ul>
          </li>
          <li>
            Base the number of rows and number of players per row from the `row_reference` key returned via Api.js
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Instructions;
