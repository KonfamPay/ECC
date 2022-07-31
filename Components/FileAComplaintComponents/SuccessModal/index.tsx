import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

interface SuccessModalProps {
  grievanceId: string;
  setSuccessModalShowing: Dispatch<SetStateAction<boolean>>;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  setSuccessModalShowing,
  grievanceId,
}) => {
  const router = useRouter();
  const [copyNotifierShowing, setCopyNotifierShowing] = useState(false);
  const onCopy = () => {
    setCopyNotifierShowing(true);
    navigator.clipboard.writeText(grievanceId);
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-[#000000] z-30 bg-opacity-80 flex items-center justify-center poppinsFont">
      {copyNotifierShowing && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: [40, 0, 0, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.1, times: [0, 0.2, 0.9, 1] }}
          onAnimationComplete={() => setCopyNotifierShowing(false)}
          className="fixed flex p-[15px] bottom-[40px] bg-white text-[#0B63C5] rounded-[10px] font-semibold text-[17.5px] items-center gap-x-[12px]"
        >
          <img className="w-[23px]" src="/Images/copyIcon.svg" />
          Copied to clipboard
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-[80%] max-w-[620px]   h-[509px] rounded-[21.5px]"
      >
        <img
          onClick={() => setSuccessModalShowing(false)}
          className="absolute right-[45px] top-[38px] cursor-pointer"
          src="/Images/x-close.svg"
        />
        <img
          className="absolute w-full h-full -z-10"
          src="/Images/modalBackground.png"
        />
        <div className="flex justify-center h-[233px] items-center pt-[20px]">
          <img className="w-[270px]" src="/Images/completedIcon.png" />
        </div>
        <p className="text-center mt-[33px] text-[22px] font-semibold text-[#0B63C5]">
          Your Complaint was filed successfully
        </p>
        <div className="mt-[15px]">
          <p className="text-center">
            Your complaint has been successfully submitted
          </p>
          <p className="text-center">
            Kindly check your dashboard to keep track of your complaints
          </p>
        </div>
        <p className="text-[#0B63C5] text-[17.5px] font-semibold text-center mt-[15px] flex gap-x-[11px] items-center justify-center">
          Grievance ID: {grievanceId}
          <img
            onClick={onCopy}
            className="cursor-pointer"
            src="/Images/copyIcon.svg"
          />
        </p>
        <div className="flex justify-center px-[30px]">
          <button
            onClick={() => router.push("/dashboard")}
            className="py-[11px] bg-[#0B63C5] w-full max-w-[367px] mt-[18px] rounded-[8px] font-semibold text-white"
          >
            Visit your Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
};
export default SuccessModal;
