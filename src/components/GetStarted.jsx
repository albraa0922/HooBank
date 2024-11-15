import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter}  bg-primary w-full h-full flex-col rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium  text-[18px] leading-23px] mr-[2px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arro"
            className="w-5 h-5 object-contain mt-1"
          />
        </div>
        <p className="font-poppins font-medium  text-[18px]  leading-23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
