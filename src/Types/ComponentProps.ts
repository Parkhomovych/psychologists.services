import { Dispatch, ReactNode, SetStateAction } from "react";
import { Therapist } from "./Therapist";
import { Review } from "@/Types/Therapist";
import { User } from "firebase/auth";

export interface PresenceModalProps {
    children: React.ReactNode;
    isOpen: boolean;
}
export interface PresencePositionProps {
    children: React.ReactNode;
    isOpen: boolean;
    pos: "fixed" | "absolute";
}
export interface EyeProps {
    handlerEye: () => void;
    showPass: boolean;
};
export interface FiltersListProps { filter: string };
export interface NavLinkProps {
    children: React.ReactNode;
    href: string;
}
export interface IconCloseModalProps {
    close: () => void;
};
export interface IoIosArrowProps {
    isOpen: boolean;
    style: string;
};
export interface ItemPsychologistsProps {
    item: Therapist
}
export interface ReviewersProps {
    reviews: Review[];
    name: string;
    image: string;
};
export interface ListPsychologistsProps {
    data: any
};
export interface ModalProps {
    children: ReactNode;
    style: string;
    closeModal: () => void;
};
export interface MakeModalProps {
    name: string;
    image: string;
    closeModal: () => void;
};
export interface BtnFavorite {
    id: string
}
