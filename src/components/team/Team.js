import React from "react";
import Member from "./member/member";
import Grid from "@material-ui/core/Grid";
import logo from "../../resource/rice-university_logo.png";
import module from "./Team.module.css";

const Team = (props) => {
  var faculty = [
    { src: logo, name: "Gary Woods", intro: "qwerew" },
  ];
  var member = [
    { src: logo, name: "Nichole Tan", intro: "qwerew" },
    { src: logo, name: "Justin Bryant", intro: "qwerew" },
    { src: logo, name: "Jerry Lin", intro: "qwerew" },
    { src: logo, name: "Yidi Wang", intro: "qwerew" },
  ];

  return (
    <div className={module.body}>
      <h2>Faculty</h2>
      <Grid container spacing={2}>
        {faculty.map((element) => (
          <Grid item xs={8} sm={6} md={4} lg={3}>
            <Member
              src={element.src}
              name={element.name}
              intro={element.intro}
            />
          </Grid>
        ))}
      </Grid>
      <h2>Members</h2>
      <Grid container spacing={2}>
        {member.map((element) => (
          <Grid item xs={8} sm={6} md={4} lg={3}>
            <Member
              src={element.src}
              name={element.name}
              intro={element.intro}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Team;
