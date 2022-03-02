
import * as types from '../type'
import { schedules } from '../../service'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    [types.GET_SCHEDULE_LIST]: (_, payload) => {
      return schedules.getSchedulesList(payload)
    },
    [types.GET_INSTANCE_BY_ID]: (_, payload) => {
      return schedules.getInstanceById(payload)
    },
    [types.GET_NOTEBOOK_INFO]: (_, payload) => {
      return schedules.getNotebookInfo(payload)
    },
    [types.GET_INSTANCE_LIST]: (_, payload) => {
      return schedules.getInstanceList(payload)
    },
    [types.SET_SCHEDULE]: (_, payload) => {
      return schedules.setSchedule(payload)
    },
    [types.UPDATE_SCHEDULE]: (_, { id, params }) => {
      return schedules.updateSchedule({ id, params })
    },
    [types.RUN_SCHEDULE]: (_, payload) => {
      return schedules.runSchedule(payload)
    },
    [types.DELETE_SCHEDULE]: (_, payload) => {
      return schedules.deleteSchedule(payload)
    },
    [types.TOGGLE_SCHEDULE]: (_, { id, release_state }) => {
      return schedules.toggleSchedule({ id, release_state })
    }
  }
}