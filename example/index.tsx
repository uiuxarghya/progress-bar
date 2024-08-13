import * as React from "react";
import "react-app-polyfill/ie11";
import * as ReactDOM from "react-dom";
import ProgressBar from "../src";

const progress = new ProgressBar({
  size: 4,
  color: "#3B82F6",
  className: "progress-bar",
  delay: 100
});

const App = () => {
  progress.start();
  setTimeout(() => {
    progress.finish();
  }, 1000);

  return (
    <div>
      <h2>Progress Bar Demo</h2>
      <p>
        Press Ctrl+R or Command (⌘)+R to reload the page to see the progress
        bar.
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
