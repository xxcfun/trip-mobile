/**
 * 存放项目中所有的接口地址
 */

const apiHost = 'http://localhost:8080/api'

/**
 * 系统模块的接口
 */
const SystemApis = {
  // 轮播图列表
  sliderListUrl: apiHost + '/system/slider/list/'
}

/**
 * 景点模块的接口
 */
const SightApis = {
  // 景点列表
  sightListUrl: apiHost + '/sight/sight/list/',
  // 景点详情
  sightDetailUrl: apiHost + '/sight/sight/detail/#{id}/',
  // 景点下的门票列表
  sightTicketListUrl: apiHost + '/sight/ticket/list/#{id}/',
  // 景点下的评论列表
  sightCommentListUrl: apiHost + '/sight/comment/list/#{id}/'
}

export {
  SystemApis,
  SightApis
}
