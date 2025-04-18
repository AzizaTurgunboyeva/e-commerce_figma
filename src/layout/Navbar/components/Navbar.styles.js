import styled from 'styled-components'
import { colors } from "@/styles/theme";


export const NavbarWrapper = styled.div`
    margin-bottom: 65px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const TopInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px auto 20px auto;
`;

export const MenuItems = styled.div`
    display: flex;
    flex-direction: ${props => props.mobile ? 'column' : "row"};
    gap: ${props => props.mobile ? 'unset' : "27px"};
    text-align: ${props => props.mobile ? 'center' : "unset"};

    & .link {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main}50;
        padding: ${props => props.mobile ? '20px 0' : "unset"};
        border-bottom: ${props => props.mobile ? `1px solid ${colors.main}10` : "unset"};
    }
`;

export const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.mobile ? "column" : "row"};
    align-items: center;
    gap: 24px;

    & > a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main};
    }

    & > button {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main}50;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
`;

export const NavbarContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    .logo {
        width: 210px;
        height: 35px;
    }

    .mid-wrapper {
        width: 100%;
        display: flex;
        gap: 12px;
    }

    .action-bar {
        display: flex;
        align-items: center;
        gap: 30px;

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
        }
    }
`;

export const MobNavbarWrapper = styled.div`
    padding: 10px 16px;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }

    .navbar-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        .logo-menu-toggler {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .actions-side {
            display: flex;
            align-items: center;
            gap: 26px;
        }
    }
`;

export const MobNavbarContent = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${colors.white};
    box-shadow: 0 400px 0 ${colors.main}50;
`;


export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.main}10;
    padding: 16px;

    .action-bar {
        display: flex;
        align-items: center;
        gap: 40px;
    }
`;


export const Contacts = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 28px 16px;
    gap: 28px;

    button {
        width: 100%;
    }

`;