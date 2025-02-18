declare module "react-infinity-sidebar" {
    import React, { ReactNode } from "react";

    export interface SidebarUser {
        name: string;
    }

    export interface LogoInfo {
        visibleLogo?: boolean;
        image?: string;
        width?: string;
        height?: string;
        borderRadius?: string;
        textColor?: string;
        chevronLeftColor?: string;
        logoName?: {
            visible?: boolean;
            name?: string;
            fontSize?: string;
            info?: string;
        };
    }

    export interface SectionItem {
        fontSize?: string;
        bgColor?: string;
        darkMode?: string;
        textColor?: string;
        activeColor?: string;
        paddingY?: string;
        paddingX?: string;
        borderRadius?: string;
        exit?: {
            visible?: boolean;
            name?: string;
            onExitHandler?: () => void;
        };
    }

    export interface SidebarOptions {
        bgColor?: string;
        bgImage?: string;
        logoInfo?: LogoInfo;
        sectionItem?: SectionItem;
        info?: {
            visible?: boolean;
            bgColor?: string;
            content?: {
                top?: string;
                bottom?: string;
                btn?: {
                    bgColor?: string;
                    textColor?: string;
                    fontSize?: string;
                    name?: string;
                    viewInfoHandler?: () => void;
                };
            };
        };
    }

    export interface NavbarOptions {
        visible?: boolean;
        bgColor?: string;
        textColor?: string;
        height?: string;
        profileDropdownData?: any;
        profileDropdownHandler?: (data: any) => void;
    }

    export interface SidebarProps {
        user: SidebarUser;
        routes: any[];
        sections: any[];
        darkMode?: string;
        sidebarOptions?: SidebarOptions;
        navbarOptions?: NavbarOptions;
    }

    export function Sidebar(props: SidebarProps): JSX.Element;
    export default Sidebar;

    export interface LoaderProps {
        className?: string;
    }

    export const Loader: React.FC<LoaderProps>;

    export interface NotFoundProps {
        className?: string;
    }

    export const NotFound: React.FC<NotFoundProps>;

    export const SidebarProvider: ({ children }: { children: ReactNode }) => JSX.Element;
}