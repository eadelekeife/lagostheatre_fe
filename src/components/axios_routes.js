import axiosCall from "./axiosCall";

export const _fetch_donation_plans = () => {
    return axiosCall("/donationplan/all")
}


export const _fetch_all_events_ = () => {
    return axiosCall('/events')
}