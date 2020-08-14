import React from "react";
import License from "../components/License.js";

class LicensePage extends React.Component {

  render() {
    return (
      <div className="the_license">
        <section>
          <License/>
      </section>
    </div>
    );
  }
}

export default LicensePage;