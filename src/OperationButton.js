/*
Author: Pavith Bambaravanage
URL: https://github.com/Pavith19
*/

import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}
