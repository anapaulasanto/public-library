import axios from "axios";

export const saveRental = async (rentalData) => {
    const { data } = await axios.post("/api/v1/rental", rentalData);
    return data;
}

export const fetchRentalsByUser = async (userId) => {
    const { data } = await axios.get(`/api/v1/rental/user/${userId}`);
    console.log("alugueis desse usuario: ", data);
    return data;
}

export const checkUpcomingReturns = async (userId) => {
    const { data } = await axios.get(`/api/v1/rental/user/${userId}`);
    
    const today = new Date();
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(today.getDate() + 3);
    
    const upcomingReturns = data.filter(rental => {
        if (rental.status !== 'active' || !rental.returnDate) return false;
        let returnDate;
        const dateStr = rental.returnDate.split(' ')[0];
        
        if (dateStr.includes('/')) {
            const [day, month, year] = dateStr.split('/');
            returnDate = new Date(year, month - 1, day);
        } else {
            returnDate = new Date(dateStr);
        }

        return returnDate >= today && returnDate <= threeDaysFromNow;
    });
    
    return upcomingReturns;
}