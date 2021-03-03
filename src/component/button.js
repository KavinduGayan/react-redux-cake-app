
const button = ({ btnStyle, btnAction, btnLabel}) => {
    return (
        <div>
            <button className={btnStyle} onClick={btnAction}>{btnLabel}</button>
        </div>
    )
}

export default button