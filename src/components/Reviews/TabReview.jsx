import { CommonButton } from "../CommonButton/CommonButton";

export function TabReview({ isActive, onClick, externalClassname }) {
    return (
        <CommonButton
            isActive={isActive}
            onClick={onClick}
            externalClassname={externalClassname}
        >
            Review
        </CommonButton>
    );
}
