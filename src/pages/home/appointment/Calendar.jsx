
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const Calendar = ({ selected, setSelected }) => {
  const today = new Date();
  const css = `
            
            .my-selected:not([disabled]) { 
                font-weight: bold; 
                border: 2px solid #00ADB5;
                color:#00ADB5;
            }
            .my-selected:hover:not([disabled]) { 
                border-color: #00ADB5;
                color: #00ADB5;
            }
            .my-today { 
                font-weight: bold;
                font-size: 120%; 
                color: #00ADB5;
            }
            `;

         
  return (
    <div>
      <div className="mx-auto h-[360px] w-[90%] bg-bg-box p-4 shadow-md md:w-[100%] lg:w-[100%]">
        <style>{css}</style>
        <DayPicker
          mode="single"
          disabled={{ before: today }}
          modifiersClassNames={{
            selected: "my-selected",
            today: "my-today",
          }}

          styles={{ caption: { color: "#00ADB5" } }}
          selected={selected}
          onSelect={(date) => {
            if (date) {
              setSelected(date);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
