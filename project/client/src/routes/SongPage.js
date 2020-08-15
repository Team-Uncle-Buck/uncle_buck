import React from "react";
import Song from "../components/Song";

class SongPage extends React.Component {

  render() {
    return (
      <div className="song_page">
        <section>
          <Song/>
      </section>
    </div>
    );
  }
}

export default SongPage;