import React from "react";
import CodeOfConduct from "../components/CodeOfConduct";

class CodePage extends React.Component {

  render() {
    return (
      <div className="code_of_conduct">
        <section>
          <CodeOfConduct/>
      </section>
    </div>
    );
  }
}

export default CodePage;