import PropTypes from 'prop-types'


const Button = ({buttonVitrakoContent,arkoContent}) =>
{
    // const {buttonVitrakoContent} = props
    return(
        <>
        <button>{buttonVitrakoContent}</button>
        <button>{arkoContent}</button>
        </>

    )
}
// Button.defaultProps = {
//     buttonVitrakoContent : "default props bata aako kura",
//     arkoContent: 99
// }

Button.propTypes = {
    arkoContent : PropTypes.string.isRequired
}

export default Button