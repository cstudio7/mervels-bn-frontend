/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable no-useless-constructor */
import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getNotifications
} from "../../redux/actions/notificationActions";
// import placeholder from "../assets/pic.png";


export class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getNotifications } = this.props;
    // Gets Users Notifications
    getNotifications();
  }

  render() {
    const { classes, handlePane } = this.props;
    return (
      <div>
        <Badge className={classes.margin} id="noti-icon"  badgeContent={this.props.unread} onClick={handlePane} color="secondary">
          <NotificationsIcon name="notification" className={classes.iconHover} onClick={handlePane}  />
        </Badge>
      </div>
    );
  }
}

/** State */
// eslint-disable-next-line no-unused-vars
const mapStateToProps = ({ profile, notification }) => ({
  profile,
  unread: notification.unread
});

/** PropTypes  */
Notifications.propTypes = {
  getNotifications: PropTypes.func.isRequired,
  handlePane: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  unread: PropTypes.number.isRequired,
};
export default connect(
  mapStateToProps,
  {
    getNotifications
  }
)(Notifications);
