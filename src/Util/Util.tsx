import React, { ReactNode } from "react";
import classes from './Util.module.css'

export const HR: React.FC = () => {

    return (
        <>
            <br />
            <br />
            <br />
            <hr
                data-scroll
                data-scroll-class={classes.growAnimation}
            />
        </>
    )
}

interface SkillLiProp {
    header: string
    level: number
}

export const SkillLi: React.FC<SkillLiProp> = ({ header, level }) => {

    return (
        <li className={classes.skillLi}>
            {header}
            <div className={classes.fullBar}>
                <div
                    style={{ width: `${level}%` }}
                    data-scroll
                    className={classes.bar}

                >
                    <div
                        className={classes.coverBar}
                        data-scroll
                        data-scroll-class={classes.loadAnimation}
                    />
                </div>
            </div>
        </li>
    )
}

interface HeaderProp {
    text: string
}

export const Header: React.FC<HeaderProp> = ({ text }) => {

    return (
        <h1>
            <span
                className={classes.cover}
                data-scroll
                data-scroll-class={classes.sliceRightAnimation}
            />
            {text}
        </h1>
    )
}

interface CtLiProp {
    icon: ReactNode
    text: string
}

export const CtLi: React.FC<CtLiProp> = ({
    icon,
    text
}) => {

    return (
        <li
            className={classes.ctLi}
        >
            <div
                data-scroll
                data-scroll-class={classes.growAnimation}
            >
                {icon}
            </div>
            <span>{text}</span>
        </li>
    )
}

interface ContainerProp {
    children: ReactNode
}

export const Container: React.FC<ContainerProp> = ({ children }) => {

    return (
        <div
            data-scroll
            className={classes.container}
        >
            {children}
        </div>
    )
}