import { instance } from "@/api/interceptor"
import { IReview } from "@/types/review.interface"
import { IStatistics } from "./statistics.interface"

const STATISTICS = 'statistics'

export const StatisticService = {
 async getMain() {
    return instance<IStatistics>({
        url: `${STATISTICS}/main`,
        method: 'GET'
    })
 },

}

export default new StatisticService()