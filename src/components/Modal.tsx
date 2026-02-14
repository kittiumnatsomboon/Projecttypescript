import Termscondition from "../Terms & Conditions/Termscondition";
export const CustomStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Modalterm() {
    return (
        <>
        <Termscondition/>
        <button>ปิด</button>
        </>
    )
}