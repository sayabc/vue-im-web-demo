import util from "@/utils";


const getters = {
    sessionId(state) {
        return state.currSessionId;
    },
    teamInfo(state) {
        if (state.currSessionId) {
            let scene = util.parseSession(state.currSessionId).scene;
            if (scene === "team") {
                var teamId = state.currSessionId.replace("team-", "");
                let teamInfo = state.teamlist.find(team => {
                    return team.teamId === teamId;
                });
                return teamInfo;
            }
            return undefined;
        }
    },
}
export default getters;