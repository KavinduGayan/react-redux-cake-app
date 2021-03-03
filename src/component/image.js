
const image= ({source, alter, style}) => {
    return (
        <img src={source} alt={alter} className={style} />
    )
}

export default image