import { SET_INVIATION_MODAL } from "../actions/invitationAction";

export default (state: any, action: any) => {
  const { type, bool } = action;
  //
  switch (type) {
    case SET_INVIATION_MODAL:
      return (state = bool);
    default:
      return (state = false);
  }
};
