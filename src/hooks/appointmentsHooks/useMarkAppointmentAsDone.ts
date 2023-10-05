import { useCallback } from "react";
import { markAppointmentAsDone } from "../../services/appointmentsService"; // Adjust the path as needed
import { Appointment } from "../../data/models"; // Adjust the path as needed

export const useMarkAppointmentAsDone = () => {
    const markAsDone = useCallback(
      async (appointmentId: string, isDone: boolean): Promise<Appointment | null> => {
        try {
          const updatedAppointment = await markAppointmentAsDone(appointmentId, isDone);
          return updatedAppointment;
        } catch (error) {
          console.error("Error marking appointment as done:", error);
          return null;
        }
      },
      []
    );
  
    return { markAsDone };
  };
  
  export default useMarkAppointmentAsDone;
