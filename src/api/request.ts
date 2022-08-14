import { axiosInstance } from "./config";
import {
    URL_PARTITION,
    URL_TUIJIAN_BANNERS,
    URL_XUANCHE_CARBRAND,
    URL_XUANCHE_HOTCAR,
    URL_TUIJIAN_JIAOCHE

}  from './url'

export const getPartitionsRequest = 
    () => axiosInstance.get(URL_PARTITION)

export const getTuijianBannersRequest =
    () => axiosInstance.get(URL_TUIJIAN_BANNERS)

export const getXuancheCarbrandRequest =
    () => axiosInstance.get(URL_XUANCHE_CARBRAND)

export const getXuancheHotcarRequest =
    () => axiosInstance.get(URL_XUANCHE_HOTCAR)

export const getTuijianJiaocheRequest =
    () => axiosInstance.get(URL_TUIJIAN_JIAOCHE)