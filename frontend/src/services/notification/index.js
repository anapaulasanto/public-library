import axios from "axios";

export const sendRentalNotifications = async () => {
    const { data } = await axios.post("/api/v1/notifications/rental/send");
    return data;
}
