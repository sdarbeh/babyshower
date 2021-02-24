import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setInviationModal } from "../store/actions/invitationAction";

export default () => {
  const inviationModal: any = useSelector((state: RootState) => state.inviationModal);
  const dispatch = useDispatch();

  return {
    invationActive: inviationModal,
    setInvationActive: (bool: boolean) => dispatch(setInviationModal(bool))
  };
}