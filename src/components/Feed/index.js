import React, { useEffect } from "react";
import { syncUserRecipes } from "../../actions/user";
import { connect } from "react-redux";

const Feed = (props) => {
  useEffect(() => {
    console.log(props);
    const { syncRecipes } = props;
    syncRecipes();
  });
  return <div>hello</div>;
};

const mapDispatchToProps = {
  syncRecipes: syncUserRecipes,
};
export default connect(null, mapDispatchToProps)(Feed);
