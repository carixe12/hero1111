import React from "react"
import Button from "./Button"
const Header = () => {
    const onClick = () => {
        console.log('try')
    }
    return (
        <header>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}
export default Header